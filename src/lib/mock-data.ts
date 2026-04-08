import type { Branch, DemoAppointmentSeed, ServiceOption } from "./types";

export const brand = {
  nameTh: "คลินิกเดโม่",
  nameEn: "Clinic Demo",
  taglineTh: "ยิ้มสวยมั่นใจ ด้วยเทคโนโลยีทันสมัย",
  demoLabel: "เว็บไซต์สาธิต — ข้อมูลจำลอง",
};

export const branches: Branch[] = [
  {
    id: "siam",
    nameTh: "สาขาสยาม",
    nameEn: "Siam",
    area: "BTS สยาม",
    hours: "จันทร์–ศุกร์ 10:00–20:00 · เสาร์ 10:00–18:00",
    phone: "02-000-0000",
    map: { lat: 13.7455, lng: 100.534 },
  },
  {
    id: "thonglor",
    nameTh: "สาขาทองหล่อ",
    nameEn: "Thong Lo",
    area: "BTS ทองหล่อ",
    hours: "จันทร์–ศุกร์ 10:00–20:00 · อาทิตย์ปิด",
    phone: "02-000-0001",
    map: { lat: 13.724, lng: 100.5825 },
  },
  {
    id: "ari",
    nameTh: "สาขาอารีย์",
    nameEn: "Ari",
    area: "BTS อารีย์",
    hours: "จันทร์–เสาร์ 09:30–19:30",
    phone: "02-000-0002",
    map: { lat: 13.7787, lng: 100.5448 },
  },
];

export const services: ServiceOption[] = [
  { id: "implants", nameTh: "รากเทียม", nameEn: "Dental implants", durationMin: 90 },
  { id: "veneers", nameTh: "วีเนียร์", nameEn: "Veneers", durationMin: 60 },
  { id: "makeover", nameTh: "สไมล์เมคโอเวอร์", nameEn: "Smile makeover", durationMin: 60 },
  { id: "ortho", nameTh: "จัดฟัน", nameEn: "Orthodontics", durationMin: 45 },
  { id: "dsd", nameTh: "ดิจิทัลสไมล์ดีไซน์", nameEn: "Digital smile design", durationMin: 45 },
  { id: "general", nameTh: "ทันตกรรมทั่วไป", nameEn: "General dentistry", durationMin: 30 },
];

export const providers = [
  { id: "any", labelTh: "ไม่ระบุ", labelEn: "No preference" },
  { id: "dr1", labelTh: "ทพ. วิมล ใจดี", labelEn: "Dr. Wimol Jaidee" },
  { id: "dr2", labelTh: "ทพ. ภูมิ นุ่มนวล", labelEn: "Dr. Phumi Numnuan" },
  { id: "dr3", labelTh: "ทพ. ลลิตา สว่าง", labelEn: "Dr. Lalita Sawang" },
];

/**
 * Demo appointments — `relativeDay` is resolved to `slotDate` on the client
 * (0 = today in local time, -1 = yesterday, …) via `hydrateDemoAppointments`.
 */
export const demoAppointmentSeeds: DemoAppointmentSeed[] = [
  {
    id: "appt-1",
    relativeDay: 0,
    time: "10:00",
    patientName: "คุณณัฐ (ตัวอย่าง)",
    service: "ปรึกษารากเทียม",
    room: "ห้อง 2",
    provider: "ทพ. วิมล ใจดี",
    status: "checked_in",
    branchId: "siam",
    categoryId: "implants",
  },
  {
    id: "appt-2",
    relativeDay: 0,
    time: "10:45",
    patientName: "คุณแป้ง (ตัวอย่าง)",
    service: "วีเนียร์ — ปรึกษา",
    room: "ห้อง 1",
    provider: "ทพ. ลลิตา สว่าง",
    status: "scheduled",
    branchId: "siam",
    categoryId: "veneers",
  },
  {
    id: "appt-3",
    relativeDay: 0,
    time: "11:30",
    patientName: "คุณโอ๊ต (ตัวอย่าง)",
    service: "จัดฟัน — ติดตาม",
    room: "ห้อง 3",
    provider: "ทพ. ภูมิ นุ่มนวล",
    status: "scheduled",
    branchId: "thonglor",
    categoryId: "ortho",
  },
  {
    id: "appt-4",
    relativeDay: 0,
    time: "14:00",
    patientName: "คุณมิ้น (ตัวอย่าง)",
    service: "ทำความสะอาดฟัน",
    room: "ห้อง 4",
    provider: "ทพ. ลลิตา สว่าง",
    status: "no_show",
    branchId: "ari",
    categoryId: "general",
  },
  {
    id: "appt-5",
    relativeDay: -1,
    time: "09:30",
    patientName: "คุณบีม (ตัวอย่าง)",
    service: "ดิจิทัลสไมล์ดีไซน์",
    room: "ห้อง 1",
    provider: "ทพ. ลลิตา สว่าง",
    status: "completed",
    branchId: "thonglor",
    categoryId: "dsd",
  },
  {
    id: "appt-6",
    relativeDay: -2,
    time: "15:00",
    patientName: "คุณเจ (ตัวอย่าง)",
    service: "สไมล์เมคโอเวอร์ — ปรึกษา",
    room: "ห้อง 2",
    provider: "ทพ. วิมล ใจดี",
    status: "completed",
    branchId: "siam",
    categoryId: "makeover",
  },
  {
    id: "appt-7",
    relativeDay: 1,
    time: "13:00",
    patientName: "คุณฟ้า (ตัวอย่าง)",
    service: "รากเทียม — ติดตาม",
    room: "ห้อง 2",
    provider: "ทพ. วิมล ใจดี",
    status: "scheduled",
    branchId: "ari",
    categoryId: "implants",
  },
];
