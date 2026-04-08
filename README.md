# Clinic Demo (`clinic-demo`)

สาธิตเว็บไซต์คลินิกทันตกรรมพรีเมียม (กรุงเทพฯ) + แอปพนักงานแบบจำลอง — **ไม่ใช่คลินิกจริง** ไม่มีข้อมูลคนไข้จริง (PHI)

## ความต้องการของระบบ

- **Node.js** ตาม [`.nvmrc`](.nvmrc) (แนะนำ `nvm use` / `fnm use`) — ดู [`package.json` → `engines`](package.json)

## เริ่มต้น

```bash
npm install
npm run dev
```

เปิด [http://localhost:3000](http://localhost:3000) — ภาษาเริ่มต้นเป็นไทย; สลับอังกฤษได้จากหัวเว็บ (เส้นทางอังกฤษใช้ prefix `/en` เมื่อจำเป็น)

คำสั่งอื่น:

```bash
npm run lint    # ESLint
npm run build   # production build + typecheck ผ่าน Next
npm run start   # รัน build ที่ build แล้ว
```

## ฟีเจอร์หลัก

- **มาร์เก็ตติ้ง:** หน้าแรก, บริการ, เทคโนโลยี, ทีม, แกลเลอรี่, สาขา, FAQ, จองคิว, หน้ากฎหมาย (privacy / terms / cookies) — รองรับ **สองภาษาไทย–อังกฤษ** ผ่าน [`next-intl`](https://next-intl.dev) ข้อความอยู่ใน `src/messages/th.json` และ `src/messages/en.json`
- **จองคิว:** `/booking` — ส่งคำขอไปที่ API ใน-memory (รีสตาร์ทเซิร์ฟเวอร์แล้วข้อมูลคำขออาจหาย)
- **พนักงาน:** `/app/reception` แดชบอร์ดหน้าร้าน + เมนูไปยังหน้าอื่นที่เป็น stub (ไม่อยู่ภายใต้ `[locale]`)

## โครงสร้างที่เกี่ยวข้อง

| พื้นที่ | คำอธิบาย |
|--------|----------|
| `src/app/[locale]/` | เส้นทางมาร์เก็ตติ้ง + i18n |
| `src/app/app/` | เชลล์พนักงาน (สตาฟ) |
| `src/i18n/` | routing, navigation, โหลด messages |
| `src/messages/` | คำแปล TH / EN |

## ภาพประกอบ

- **Hero หน้าแรก:** `public/images/hero-clinic.jpg` — เครดิตใน `src/lib/hero-photo.ts` และใต้ภาพบนเว็บ
- **ชุดสต็อกเพิ่ม:** `public/images/points/*.jpg` — จาก Unsplash; `alt` / ลิงก์หน้ารูปอยู่ใน `src/lib/stock-photos.ts` และลิงก์ใต้การ์ดหลายจุด
- **SVG เวกเตอร์:** `src/components/illustrations/`

## สแตก

Next.js (App Router) · React · Tailwind CSS v4 · Noto Sans Thai · next-intl

## CI/CD

- **CI:** [`.github/workflows/ci.yml`](.github/workflows/ci.yml) — รัน `lint` + `build` เมื่อ push/PR ไป `main` หรือ `master`
- **Deploy (ทางเลือก):** [`.github/workflows/deploy-vercel.yml`](.github/workflows/deploy-vercel.yml) — รันด้วยมือจากแท็บ Actions → **Run workflow** หลังตั้ง secrets ใน GitHub: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID` (รายละเอียดอยู่ในคอมเมนต์บนไฟล์ workflow) · หรือเชื่อม repo ในแดชบอร์ด Vercel เพื่อ deploy อัตโนมัติโดยไม่ต้องใช้ workflow นี้
- **Dependabot:** [`.github/dependabot.yml`](.github/dependabot.yml)

## หมายเหตุ

การจองและคิวจากเว็บเก็บในหน่วยความจำโปรเซสของเซิร์ฟเวอร์เพื่อเดโมเท่านั้น — ไม่เหมาะกับ production
