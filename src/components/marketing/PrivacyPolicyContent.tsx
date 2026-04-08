/** Shared copy for /privacy page and privacy modal — no client JS */
export function PrivacyPolicyContent({
  titleId = "privacy-policy-title",
  titleTag: Title = "h1",
  titleClassName = "text-2xl font-semibold text-ink",
}: {
  titleId?: string;
  titleTag?: "h1" | "h2";
  titleClassName?: string;
}) {
  return (
    <>
      <Title id={titleId} className={titleClassName}>
        นโยบายความเป็นส่วนตัว (ร่างสาธิต)
      </Title>
      <p className="mt-4 text-sm text-ink-muted">
        เอกสารนี้เป็นโครงร่างสำหรับสาธิตเท่านั้น ไม่ใช่คำแนะนำทางกฎหมาย — ควรให้ที่ปรึกษากฎหมายร่างฉบับจริงตาม PDPA
      </p>
      <h2 className="mt-8 text-lg font-semibold text-ink">1. การเก็บรวบรวมข้อมูล</h2>
      <p className="mt-2 text-sm text-ink-muted">
        ตัวอย่าง: ชื่อ เบอร์โทร อีเมล ข้อมูลการนัดหมาย เพื่อติดต่อและนัดหมาย
      </p>
      <h2 className="mt-8 text-lg font-semibold text-ink">2. วัตถุประสงค์</h2>
      <p className="mt-2 text-sm text-ink-muted">จัดการนัดหมาย ติดต่อสอบถาม ปรับปรุงบริการ</p>
      <h2 className="mt-8 text-lg font-semibold text-ink">3. การเก็บรักษา</h2>
      <p className="mt-2 text-sm text-ink-muted">
        ระยะเวลาเก็บรักษาตามนโยบายภายในองค์กร (ระบุใน production)
      </p>
      <h2 className="mt-8 text-lg font-semibold text-ink">4. สิทธิของเจ้าของข้อมูล</h2>
      <p className="mt-2 text-sm text-ink-muted">
        ขอเข้าถึง แก้ไข ลบ หรือถอนความยินยอมตามกฎหมายที่ใช้บังคับ
      </p>
    </>
  );
}
