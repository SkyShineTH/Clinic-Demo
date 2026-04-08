/** Rich demo records for staff dashboards — สาธิตเท่านั้น */

export type InventoryItem = {
  id: string;
  sku: string;
  nameTh: string;
  nameEn: string;
  category: string;
  qty: number;
  par: number;
  supplier: string;
  location: string;
};

export const inventorySeed: InventoryItem[] = [
  {
    id: "inv-1",
    sku: "GLV-N-100",
    nameTh: "ถุงมือไนไตร ไซส์ M",
    nameEn: "Nitrile gloves M",
    category: "PPE",
    qty: 120,
    par: 80,
    supplier: "MedSupply TH",
    location: "คลัง A-1",
  },
  {
    id: "inv-2",
    sku: "MSK-3PLY",
    nameTh: "หน้ากากอนามัย 3 ชั้น",
    nameEn: "Surgical mask 3-ply",
    category: "PPE",
    qty: 40,
    par: 100,
    supplier: "HealthPro",
    location: "คลัง A-2",
  },
  {
    id: "inv-3",
    sku: "IMP-STR-4.2",
    nameTh: "สกรูรากเทียม 4.2 mm (จำลอง)",
    nameEn: "Implant screw 4.2mm",
    category: "รากเทียม",
    qty: 24,
    par: 12,
    supplier: "OsteoDemo",
    location: "ห้องผ่าตัด",
  },
  {
    id: "inv-4",
    sku: "COM-RMGI",
    nameTh: "คอมโพสิต RMGI สี A2",
    nameEn: "RMGI composite A2",
    category: "วัสดุอุด",
    qty: 18,
    par: 10,
    supplier: "DentalMat",
    location: "คลัง B-1",
  },
  {
    id: "inv-5",
    sku: "END-K25",
    nameTh: "เข็มเอ็นดู 25 mm",
    nameEn: "Endo file 25mm",
    category: "รักษารากฟัน",
    qty: 200,
    par: 60,
    supplier: "EndoPlus",
    location: "คลัง B-3",
  },
  {
    id: "inv-6",
    sku: "ORT-BKT-MB",
    nameTh: "เหล็กจัดฟัน MBT ชุด",
    nameEn: "Bracket set MBT",
    category: "จัดฟัน",
    qty: 8,
    par: 15,
    supplier: "OrthoLine",
    location: "คลัง C-1",
  },
  {
    id: "inv-7",
    sku: "HYG-PMTC",
    nameTh: "ยาสีฟันเด็ก เมนทอล",
    nameEn: "Kids toothpaste menthol",
    category: "ของใช้คนไข้",
    qty: 55,
    par: 30,
    supplier: "SmileRetail",
    location: "รับรอง",
  },
  {
    id: "inv-8",
    sku: "SAL-ART-50",
    nameTh: "น้ำยาฆ่าเชื้อพื้นผิว 5L",
    nameEn: "Surface disinfectant 5L",
    category: "การติดเชื้อ",
    qty: 6,
    par: 8,
    supplier: "SteriCo",
    location: "คลัง A-3",
  },
];

export type MarketingCampaign = {
  id: string;
  name: string;
  channel: string;
  spendThb: number;
  leads: number;
  conversions: number;
  status: "active" | "paused" | "draft";
  updatedAt: string;
  notes: string;
};

export const marketingSeed: MarketingCampaign[] = [
  {
    id: "mkt-1",
    name: "โปรวีเนียร์ Q2 — สยาม",
    channel: "Meta Ads",
    spendThb: 42000,
    leads: 312,
    conversions: 28,
    status: "active",
    updatedAt: "2026-04-05",
    notes: "utm_source=meta&utm_campaign=veneers_siam",
  },
  {
    id: "mkt-2",
    name: "รีทาร์เก็ตจองคิว",
    channel: "Google Ads",
    spendThb: 18500,
    leads: 156,
    conversions: 41,
    status: "active",
    updatedAt: "2026-04-06",
    notes: "search brand + รากเทียม",
  },
  {
    id: "mkt-3",
    name: "อีเมลติดตามใบเสนอราคา",
    channel: "Email",
    spendThb: 0,
    leads: 89,
    conversions: 12,
    status: "active",
    updatedAt: "2026-04-01",
    notes: "segment=quote_pending",
  },
  {
    id: "mkt-4",
    name: "TikTok สไมล์ดีไซน์",
    channel: "TikTok",
    spendThb: 12000,
    leads: 540,
    conversions: 9,
    status: "paused",
    updatedAt: "2026-03-20",
    notes: "ทดลองครีเอทีฟใหม่",
  },
  {
    id: "mkt-5",
    name: "LINE OA แจ้งเตือนนัด",
    channel: "LINE",
    spendThb: 3500,
    leads: 0,
    conversions: 62,
    status: "active",
    updatedAt: "2026-04-07",
    notes: "ไม่นับเป็น lead แยกต่างหาก",
  },
];

export type ClinicalVisit = {
  id: string;
  hn: string;
  patientLabel: string;
  visitedAt: string;
  provider: string;
  branch: string;
  summary: string;
  consentFlags: string[];
};

export const clinicalSeed: ClinicalVisit[] = [
  {
    id: "enc-1",
    hn: "HN-10492",
    patientLabel: "คุณณัฐ (ตัวอย่าง)",
    visitedAt: "2026-04-07T10:00:00",
    provider: "ทพ. วิมล ใจดี",
    branch: "สยาม",
    summary: "ปรึกษารากเทียม — อธิบายขั้นตอน 3 ช่วง ไม่มีการวินิจฉัยขั้นสุดท้าย",
    consentFlags: ["ถ่ายภาพในปาก", "ส่งต่อ LAB"],
  },
  {
    id: "enc-2",
    hn: "HN-10488",
    patientLabel: "คุณแป้ง (ตัวอย่าง)",
    visitedAt: "2026-04-07T10:45:00",
    provider: "ทพ. ลลิตา สว่าง",
    branch: "สยาม",
    summary: "วีเนียร์ consult — ดูสีตัวอย่าง",
    consentFlags: ["ถ่ายภาพยิ้ม"],
  },
  {
    id: "enc-3",
    hn: "HN-10401",
    patientLabel: "คุณโอ๊ต (ตัวอย่าง)",
    visitedAt: "2026-04-06T15:30:00",
    provider: "ทพ. ภูมิ นุ่มนวล",
    branch: "ทองหล่อ",
    summary: "จัดฟัน — ตรวจสายลิ้น กำหนดนัดถัดไป",
    consentFlags: [],
  },
  {
    id: "enc-4",
    hn: "HN-10377",
    patientLabel: "คุณมิ้น (ตัวอย่าง)",
    visitedAt: "2026-04-05T09:00:00",
    provider: "ทพ. ลลิตา สว่าง",
    branch: "อารีย์",
    summary: "ขูดหินปูน + fluoride",
    consentFlags: ["ใช้ยาชา"],
  },
  {
    id: "enc-5",
    hn: "HN-10350",
    patientLabel: "คุณบีม (ตัวอย่าง)",
    visitedAt: "2026-04-04T11:00:00",
    provider: "ทพ. ลลิตา สว่าง",
    branch: "ทองหล่อ",
    summary: "DSD — รีวิวแบบดิจิทัล",
    consentFlags: ["ถ่ายวิดีโอสาธิต"],
  },
];

export type PipelineStage = "สอบถาม" | "นัดปรึกษา" | "เสนอราคา" | "ตัดสินใจ";

export const PIPELINE_STAGES: PipelineStage[] = ["สอบถาม", "นัดปรึกษา", "เสนอราคา", "ตัดสินใจ"];

export type PipelineLead = {
  id: string;
  name: string;
  phoneLast4: string;
  stage: PipelineStage;
  valueThb: number;
  source: string;
  lastContact: string;
  note: string;
};

export const pipelineSeed: PipelineLead[] = [
  {
    id: "lead-1",
    name: "คุณแอน (ตัวอย่าง)",
    phoneLast4: "8891",
    stage: "สอบถาม",
    valueThb: 0,
    source: "LINE",
    lastContact: "2026-04-07",
    note: "สนใจวีเนียร์ 6 ซี่",
  },
  {
    id: "lead-2",
    name: "คุณโจ (ตัวอย่าง)",
    phoneLast4: "2204",
    stage: "นัดปรึกษา",
    valueThb: 0,
    source: "เว็บจอง",
    lastContact: "2026-04-06",
    note: "นัดสยาม พุธ 14:00",
  },
  {
    id: "lead-3",
    name: "คุณฟ้า (ตัวอย่าง)",
    phoneLast4: "5510",
    stage: "เสนอราคา",
    valueThb: 185000,
    source: "Walk-in",
    lastContact: "2026-04-05",
    note: "รากเทียม All-on-4 ร่างใบเสนอราคา",
  },
  {
    id: "lead-4",
    name: "คุณเจ (ตัวอย่าง)",
    phoneLast4: "0932",
    stage: "ตัดสินใจ",
    valueThb: 45000,
    source: "Google",
    lastContact: "2026-04-03",
    note: "รอผ่อนชำระ",
  },
  {
    id: "lead-5",
    name: "คุณนนท์ (ตัวอย่าง)",
    phoneLast4: "1122",
    stage: "สอบถาม",
    valueThb: 0,
    source: "TikTok",
    lastContact: "2026-04-07",
    note: "ถามเรื่องจัดฟันใส",
  },
  {
    id: "lead-6",
    name: "คุณแนน (ตัวอย่าง)",
    phoneLast4: "4456",
    stage: "นัดปรึกษา",
    valueThb: 0,
    source: "แนะนำเพื่อน",
    lastContact: "2026-04-02",
    note: "สนใจสไมล์ดีไซน์",
  },
];

export type ScheduleBlock = {
  id: string;
  dateYmd: string;
  startTime: string;
  endTime: string;
  patientLabel: string;
  service: string;
  room: string;
  provider: string;
  branch: string;
  status: string;
};

/** Resolved on the client: 0 = today (local), 1 = tomorrow, … */
export type ScheduleBlockSeed = Omit<ScheduleBlock, "dateYmd"> & { relativeDay: number };

export const scheduleSeedTemplate: ScheduleBlockSeed[] = [
  {
    id: "sch-1",
    relativeDay: 0,
    startTime: "10:00",
    endTime: "10:45",
    patientLabel: "คุณณัฐ (ตัวอย่าง)",
    service: "ปรึกษารากเทียม",
    room: "ห้อง 2",
    provider: "ทพ. วิมล ใจดี",
    branch: "สยาม",
    status: "เช็คอินแล้ว",
  },
  {
    id: "sch-2",
    relativeDay: 0,
    startTime: "10:45",
    endTime: "11:30",
    patientLabel: "คุณแป้ง (ตัวอย่าง)",
    service: "วีเนียร์ — ปรึกษา",
    room: "ห้อง 1",
    provider: "ทพ. ลลิตา สว่าง",
    branch: "สยาม",
    status: "รอเข้าพบ",
  },
  {
    id: "sch-3",
    relativeDay: 0,
    startTime: "11:30",
    endTime: "12:15",
    patientLabel: "คุณโอ๊ต (ตัวอย่าง)",
    service: "จัดฟัน — ติดตาม",
    room: "ห้อง 3",
    provider: "ทพ. ภูมิ นุ่มนวล",
    branch: "ทองหล่อ",
    status: "รอเข้าพบ",
  },
  {
    id: "sch-4",
    relativeDay: 0,
    startTime: "14:00",
    endTime: "14:45",
    patientLabel: "คุณมิ้น (ตัวอย่าง)",
    service: "ทำความสะอาดฟัน",
    room: "ห้อง 4",
    provider: "ทพ. ลลิตา สว่าง",
    branch: "อารีย์",
    status: "ไม่มาตามนัด",
  },
  {
    id: "sch-5",
    relativeDay: 1,
    startTime: "09:00",
    endTime: "09:30",
    patientLabel: "คุณฟ้า (ตัวอย่าง)",
    service: "ตรวจฟัน",
    room: "ห้อง 1",
    provider: "ทพ. วิมล ใจดี",
    branch: "อารีย์",
    status: "รอเข้าพบ",
  },
  {
    id: "sch-6",
    relativeDay: 1,
    startTime: "13:00",
    endTime: "14:30",
    patientLabel: "คุณบีม (ตัวอย่าง)",
    service: "DSD consult",
    room: "ห้อง 1",
    provider: "ทพ. ลลิตา สว่าง",
    branch: "ทองหล่อ",
    status: "รอเข้าพบ",
  },
  {
    id: "sch-7",
    relativeDay: 2,
    startTime: "15:00",
    endTime: "15:45",
    patientLabel: "คุณนนท์ (ตัวอย่าง)",
    service: "รีเทนเนอร์",
    room: "ห้อง 3",
    provider: "ทพ. ภูมิ นุ่มนวล",
    branch: "สยาม",
    status: "รอเข้าพบ",
  },
];

export type StaffUser = {
  id: string;
  name: string;
  email: string;
  role: string;
  branch: string;
  lastActive: string;
};

export const staffUsersSeed: StaffUser[] = [
  {
    id: "u1",
    name: "คุณแป้ง รับรอง",
    email: "reception.demo@clinic.local",
    role: "หน้าร้าน",
    branch: "สยาม",
    lastActive: "2026-04-07 09:12",
  },
  {
    id: "u2",
    name: "คุณบอส แอดมิน",
    email: "admin.demo@clinic.local",
    role: "Admin",
    branch: "ทุกสาขา",
    lastActive: "2026-04-07 08:55",
  },
  {
    id: "u3",
    name: "คุณมาร์ค การตลาด",
    email: "marketing.demo@clinic.local",
    role: "การตลาด",
    branch: "สยาม",
    lastActive: "2026-04-06 17:40",
  },
];

export type AuditEntry = {
  id: string;
  at: string;
  actor: string;
  action: string;
  detail: string;
};

export const auditSeed: AuditEntry[] = [
  {
    id: "aud-1",
    at: "2026-04-07T08:12:00",
    actor: "คุณบอส แอดมิน",
    action: "แก้ไขสิทธิ์",
    detail: "เพิ่มสิทธิ์ดูลีดให้ reception.demo@clinic.local",
  },
  {
    id: "aud-2",
    at: "2026-04-06T16:02:00",
    actor: "ระบบ",
    action: "สำรองข้อมูล",
    detail: "สำรองคอนฟิกสาขาอารีย์ — สำเร็จ",
  },
  {
    id: "aud-3",
    at: "2026-04-05T11:30:00",
    actor: "คุณบอส แอดมิน",
    action: "ตั้งค่า",
    detail: "อัปเดตเวลาเปิดสาขาทองหล่อ (จำลอง)",
  },
];
