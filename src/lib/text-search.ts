/**
 * Staff UI search — better than naive `includes`:
 * - Unicode NFC normalize + trim + locale-aware lowercase
 * - Thai: optional stripping of vowel/tone marks so "ทันตกรรม" matches partial typing patterns
 * - Query tokenization: whitespace + quoted phrases; every token must match (AND)
 * - Ranking: earlier substring hits and longer tokens score higher (stable sort)
 */

/** Thai vowel / tone / upper marks (common set) — loose matching only */
const THAI_MARKS = /[\u0E31\u0E34-\u0E3A\u0E47-\u0E4E]/g;

export function stripThaiMarks(s: string): string {
  return s.replace(THAI_MARKS, "");
}

export function normalizeForSearch(s: string): string {
  let t = s.normalize("NFC").trim().toLocaleLowerCase("th-TH");
  t = stripThaiMarks(t);
  t = t.replace(/\s+/g, " ");
  return t;
}

/**
 * Split query into normalized tokens. Supports "วีเนียร์ สยาม" and exact phrases: "รากเทียม"
 */
export function parseSearchQuery(raw: string): string[] {
  const q = raw.trim();
  if (!q) return [];
  const tokens: string[] = [];
  const re = /"([^"]*)"|(\S+)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(q)) !== null) {
    const piece = (m[1] !== undefined ? m[1] : m[2]) ?? "";
    const n = normalizeForSearch(piece);
    if (n.length > 0) tokens.push(n);
  }
  return tokens;
}

export function matchesAllTokens(haystackNormalized: string, tokens: string[]): boolean {
  if (tokens.length === 0) return true;
  return tokens.every((t) => haystackNormalized.includes(t));
}

/** Higher is better; -1 if any token missing */
export function rankSearchScore(haystackNormalized: string, tokens: string[]): number {
  if (tokens.length === 0) return 1;
  let score = 0;
  for (const t of tokens) {
    const idx = haystackNormalized.indexOf(t);
    if (idx < 0) return -1;
    score += 1000 / (idx + 1) + t.length * 3;
  }
  return score;
}

export function filterAndSortBySearch<T>(
  items: readonly T[],
  query: string,
  getSearchableRawText: (item: T) => string,
): T[] {
  const tokens = parseSearchQuery(query);
  if (tokens.length === 0) return [...items];
  const rows = items
    .map((item, idx) => {
      const norm = normalizeForSearch(getSearchableRawText(item));
      const score = rankSearchScore(norm, tokens);
      return { item, score, idx };
    })
    .filter((r) => r.score >= 0)
    .sort((a, b) => b.score - a.score || a.idx - b.idx);
  return rows.map((r) => r.item);
}
