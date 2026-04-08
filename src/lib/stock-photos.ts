/** Local files in /public/images/points — Unsplash License; verify before commercial use */
export type StockPhotoMeta = {
  src: string;
  altTh: string;
  /** English alt when locale is `en` (falls back to altTh if omitted) */
  altEn?: string;
  pageUrl: string;
  photographer?: string;
};

export const servicePhotos: Record<string, StockPhotoMeta> = {
  implants: {
    src: "/images/points/service-implants.jpg",
    altTh: "ชุดเครื่องมือทางการแพทย์จัดวางในถาด — ภาพสต็อก ไม่ใช่คลินิกเดโม่",
    pageUrl: "https://unsplash.com/photos/a-green-box-filled-with-lots-of-surgical-tools-8K2vv2JMRBQ",
  },
  veneers: {
    src: "/images/points/service-veneers.jpg",
    altTh: "ซิงค์เซรามิกสีขาวในห้องทันตกรรม — ภาพสต็อก",
    pageUrl: "https://unsplash.com/photos/white-ceramic-sink-near-white-ceramic-sink-e7MJLM5VGjY",
  },
  makeover: {
    src: "/images/points/service-makeover.jpg",
    altTh: "มุมรอรับในอาคารที่โปร่งและมีต้นไม้ — ภาพสต็อก",
    pageUrl: "https://unsplash.com/photos/blue-couch-beside-green-potted-plant-B_sK_xgzwVA",
  },
  ortho: {
    src: "/images/points/service-ortho.jpg",
    altTh: "อุปกรณ์ทันตกรรมบนโต๊ะไม้ — ภาพสต็อก",
    pageUrl: "https://unsplash.com/photos/a-dental-device-sitting-on-top-of-a-wooden-table-FDuefSgoO8E",
  },
  dsd: {
    src: "/images/points/service-dsd.jpg",
    altTh: "ห้องทันตกรรมพร้อมเก้าอี้และจอมอนิเตอร์ — ภาพสต็อก",
    pageUrl: "https://unsplash.com/photos/a-dental-room-with-a-chair-and-a-monitor-Pc8lpKJwecM",
  },
  general: {
    src: "/images/points/service-general.jpg",
    altTh: "เก้าอี้ทันตกรรมสีขาวใกล้หน้าต่าง — ภาพสต็อก",
    pageUrl: "https://unsplash.com/photos/a-white-dental-chair-in-a-room-with-a-window-44jaETSVX2I",
  },
};

export const techPhotos: [StockPhotoMeta, StockPhotoMeta, StockPhotoMeta] = [
  {
    src: "/images/points/tech-scan.jpg",
    altTh: "บริเวณซิงค์และพื้นผิวสะอาดในคลินิก — ภาพสต็อกสำหรับแนวคิดสแกน",
    altEn: "Clean sink and surfaces in a clinic — stock photo (scan concept)",
    pageUrl: "https://unsplash.com/photos/white-ceramic-sink-near-white-ceramic-sink-e7MJLM5VGjY",
  },
  {
    src: "/images/points/tech-cad.jpg",
    altTh: "เครื่องมือทางการแพทย์ในถาด — ภาพสต็อกสำหรับแนวคิด CAD/CAM",
    altEn: "Medical tools in a tray — stock photo (CAD/CAM concept)",
    pageUrl: "https://unsplash.com/photos/a-green-box-filled-with-lots-of-surgical-tools-8K2vv2JMRBQ",
  },
  {
    src: "/images/points/tech-dsd.jpg",
    altTh: "ห้องทันตกรรมกับจอแสดงผล — ภาพสต็อกสำหรับแนวคิด DSD",
    altEn: "Dental treatment room with a monitor — stock photo (DSD concept)",
    pageUrl: "https://unsplash.com/photos/a-dental-room-with-a-chair-and-a-monitor-Pc8lpKJwecM",
  },
];

/** ภาพกลุ่มสต็อก — ไม่ใช่ทีมจริงของคลินิกเดโม่ */
export const teamGroupPhoto: StockPhotoMeta = {
  src: "/images/points/team-group.jpg",
  altTh: "กลุ่มบุคลากรในชุดสครับยืนรวมกัน — ภาพสต็อก ไม่ใช่ทีมแพทย์จริงของคลินิกเดโม่",
  pageUrl: "https://unsplash.com/photos/a-group-of-people-in-scrubs-posing-for-a-picture-IflZFir8RAE",
};

/** แกลเลอรี่สาธิต: ผู้คนยิ้มแสดงฟัน — ภาพสต็อก ไม่ใช่คนไข้จริง */
export const galleryPhotos: StockPhotoMeta[] = [
  {
    src: "/images/points/gallery-smile-1.jpg",
    altTh: "ผู้หญิงยิ้มแสดงฟัน — ภาพสต็อกสำหรับสาธิตแกลเลอรี่",
    pageUrl: "https://unsplash.com/photos/woman-in-white-and-pink-halter-top-smiling-jwcA6zJUbuw",
  },
  {
    src: "/images/points/gallery-smile-2.jpg",
    altTh: "ผู้หญิงยิ้มในชุดสบาย — ภาพสต็อกสำหรับสาธิตแกลเลอรี่",
    pageUrl: "https://unsplash.com/photos/smiling-woman-in-white-tank-top-5ET774XBx6I",
  },
  {
    src: "/images/points/gallery-smile-3.jpg",
    altTh: "ผู้หญิงยิ้มในชุดลาย — ภาพสต็อกสำหรับสาธิตแกลเลอรี่",
    pageUrl: "https://unsplash.com/photos/woman-in-blue-and-brown-dress-smiling-2ZwJwQtKDqQ",
  },
  {
    src: "/images/points/gallery-smile-4.jpg",
    altTh: "ใกล้ชิดริมฝีปากและฟันขาว — ภาพสต็อกสำหรับสาธิตแกลเลอรี่",
    pageUrl: "https://unsplash.com/photos/close-up-of-a-womans-mouth-with-teeth-showing-fSXu65m39ac",
  },
  {
    src: "/images/points/gallery-smile-5.jpg",
    altTh: "ผู้หญิงยิ้ม — ภาพสต็อกสำหรับสาธิตแกลเลอรี่",
    pageUrl: "https://unsplash.com/photos/a-smiling-asian-woman-with-dark-hair-5V6takmtNUM",
  },
  {
    src: "/images/points/gallery-smile-6.jpg",
    altTh: "ผู้หญิงยิ้มสวมแว่นกันแดด — ภาพสต็อกสำหรับสาธิตแกลเลอรี่",
    pageUrl: "https://unsplash.com/photos/woman-in-green-tank-top-wearing-sunglasses-and-smiling-I6JGNRvBJ5U",
  },
];

export const branchPhotos: Record<string, StockPhotoMeta> = {
  siam: {
    src: "/images/points/branch-siam.jpg",
    altTh: "ทิวทัศน์เมืองจากมุมสูง — ภาพสต็อกกรุงเทพฯ",
    pageUrl: "https://unsplash.com/photos/aerial-photography-of-high-rise-buildings-under-cloudy-sky-g5Uh7nP60FA",
  },
  thonglor: {
    src: "/images/points/branch-thonglor.jpg",
    altTh: "ตึกในเมืองใต้ท้องฟ้า — ภาพสต็อกกรุงเทพฯ",
    pageUrl: "https://unsplash.com/photos/city-buildings-under-blue-sky-during-daytime-TreyJD0mps4",
  },
  ari: {
    src: "/images/points/branch-ari.jpg",
    altTh: "มุมมองเมืองจากมุมสูง — ภาพสต็อกกรุงเทพฯ",
    pageUrl: "https://unsplash.com/photos/aerial-view-of-city-building-during-daytime-PHMabtedGwQ",
  },
};

export const testimonialPhotos: [StockPhotoMeta, StockPhotoMeta] = [
  {
    src: "/images/points/testimonial-1.jpg",
    altTh: "ภาพบุคคลสต็อกผู้หญิง — ไม่ใช่ลูกค้าจริง",
    pageUrl: "https://unsplash.com/photos/rDEOVtE7vOs",
    photographer: "Christopher Campbell",
  },
  {
    src: "/images/points/testimonial-2.jpg",
    altTh: "ภาพบุคคลสต็อกผู้ชาย — ไม่ใช่ลูกค้าจริง",
    pageUrl: "https://unsplash.com/photos/mans-grey-and-black-shirt-ILip77SbmOE",
  },
];

export type ReviewSlide = {
  quote: string;
  author: string;
  avatar?: StockPhotoMeta;
};

export const reviewSlides: ReviewSlide[] = [
  {
    quote:
      "อธิบายละเอียด ไม่เร่งให้ตัดสินใจ รู้สึกสบายใจตั้งแต่เข้าประตู — ข้อความจำลองสำหรับสาธิต",
    author: "คุณลูกค้าตัวอย่าง ก",
    avatar: testimonialPhotos[0],
  },
  {
    quote:
      "นัดหมายชัดเจน ทีมตอบคำถามเรื่องแผนการรักษาได้เข้าใจง่าย — ข้อความจำลองสำหรับสาธิต",
    author: "คุณลูกค้าตัวอย่าง ข",
    avatar: testimonialPhotos[1],
  },
  {
    quote: "บรรยากาศสะอาด ขั้นตอนไม่ซับซ้อน — ข้อความจำลองสำหรับสาธิต",
    author: "คุณลูกค้าตัวอย่าง ค",
  },
  {
    quote: "เห็นภาพรวมก่อนเริ่มรักษา ช่วยให้ตัดสินใจได้มั่นใจขึ้น — ข้อความจำลองสำหรับสาธิต",
    author: "คุณลูกค้าตัวอย่าง ง",
    avatar: testimonialPhotos[0],
  },
];

export const homeServicePhotos: Record<string, StockPhotoMeta> = {
  implants: {
    src: "/images/points/home-implants.jpg",
    altTh: "ห้องทันตกรรมกับเก้าอี้ — ภาพสต็อก",
    pageUrl: "https://unsplash.com/photos/a-dentist-chair-in-a-room-with-a-painting-on-the-wall-aFqSRokmw2E",
  },
  veneers: {
    src: "/images/points/home-veneers.jpg",
    altTh: "มุมรอรับสบายตา — ภาพสต็อก",
    pageUrl: "https://unsplash.com/photos/blue-couch-beside-green-potted-plant-B_sK_xgzwVA",
  },
  ortho: {
    src: "/images/points/home-ortho.jpg",
    altTh: "อุปกรณ์ทันตกรรมบนโต๊ะ — ภาพสต็อก",
    pageUrl: "https://unsplash.com/photos/a-dental-device-sitting-on-top-of-a-wooden-table-FDuefSgoO8E",
  },
};

export const pipelinePhotos: StockPhotoMeta[] = [
  {
    src: "/images/points/pipeline-1.jpg",
    altTh: "บุคลากรในชุดทางการ — ภาพสต็อก",
    pageUrl: "https://unsplash.com/photos/man-in-white-dress-shirt-holding-black-pen--m-4tYmtLlI",
  },
  {
    src: "/images/points/pipeline-2.jpg",
    altTh: "ห้องทันตกรรมกับจอ — ภาพสต็อก",
    pageUrl: "https://unsplash.com/photos/a-dental-room-with-a-chair-and-a-monitor-Pc8lpKJwecM",
  },
  {
    src: "/images/points/pipeline-3.jpg",
    altTh: "ซิงค์ในคลินิก — ภาพสต็อก",
    pageUrl: "https://unsplash.com/photos/white-ceramic-sink-near-white-ceramic-sink-e7MJLM5VGjY",
  },
  {
    src: "/images/points/pipeline-4.jpg",
    altTh: "รูปจำลองฟัน — ภาพสต็อก",
    pageUrl: "https://unsplash.com/photos/white-and-pink-dentures-Yl8VlwQdTJ8",
  },
];
