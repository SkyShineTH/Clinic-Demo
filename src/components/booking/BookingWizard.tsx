"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { buildSlotPresets } from "@/lib/provider-availability";
import { branches, providers, services } from "@/lib/mock-data";
import { PrivacyPolicyModalTrigger } from "@/components/marketing/PrivacyPolicyModal";

type Step = 0 | 1 | 2 | 3 | 4 | 5;

const thPhone = /^0[0-9]{9}$/;

export function BookingWizard() {
  const [step, setStep] = useState<Step>(0);
  const [branchId, setBranchId] = useState(branches[0]!.id);
  const [serviceId, setServiceId] = useState(services[0]!.id);
  const [providerId, setProviderId] = useState(providers[0]!.id);
  const [slotIso, setSlotIso] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [doneRef, setDoneRef] = useState<string | null>(null);

  const slots = useMemo(() => buildSlotPresets(branchId, providerId), [branchId, providerId]);

  useEffect(() => {
    setSlotIso(null);
  }, [branchId, providerId]);

  const branch = branches.find((b) => b.id === branchId)!;
  const service = services.find((s) => s.id === serviceId)!;
  const provider = providers.find((p) => p.id === providerId)!;

  async function submit() {
    setError(null);
    if (!slotIso) {
      setError("กรุณาเลือกวันและเวลา");
      return;
    }
    if (name.trim().length < 2) {
      setError("กรุณากรอกชื่อให้ครบถ้วน");
      return;
    }
    const digits = phone.replace(/\s+/g, "");
    if (!thPhone.test(digits)) {
      setError("กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (10 หลัก ขึ้นต้น 0)");
      return;
    }
    if (!consent) {
      setError("กรุณายอมรับนโยบายความเป็นส่วนตัว");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/booking-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          branchId: branch.id,
          branchName: branch.nameTh,
          serviceId: service.id,
          serviceName: service.nameTh,
          providerPreference: providerId === "any" ? null : provider.labelTh,
          slotStart: slotIso,
          patientName: name.trim(),
          phone: digits,
          email: email.trim() || null,
          note: note.trim() || null,
        }),
      });
      const data = (await res.json()) as { item?: { id: string }; error?: string };
      if (!res.ok) {
        setError("เกิดข้อผิดพลาดชั่วคราว กรุณาลองใหม่หรือติดต่อทาง LINE");
        return;
      }
      setDoneRef(`DEMO-BKK-${data.item?.id?.slice(-6).toUpperCase() ?? "000000"}`);
      setStep(5);
    } catch {
      setError("เกิดข้อผิดพลาดชั่วคราว กรุณาลองใหม่หรือติดต่อทาง LINE");
    } finally {
      setLoading(false);
    }
  }

  const stepsLabel = [
    "สาขา",
    "บริการ",
    "ทันตแพทย์",
    "วันเวลา",
    "ข้อมูล",
    "เสร็จสิ้น",
  ];

  return (
    <div className="mx-auto max-w-xl">
      <ol
        className="mb-8 flex flex-wrap justify-center gap-1.5 text-[11px] text-ink-muted sm:justify-start sm:gap-2 sm:text-xs"
        aria-label="ขั้นตอน"
      >
        {stepsLabel.map((l, i) => (
          <li
            key={l}
            className={`rounded-full px-2 py-0.5 sm:py-1 ${i === step ? "bg-teal text-white" : "bg-sky-soft/80"}`}
          >
            {i + 1}. {l}
          </li>
        ))}
      </ol>

      {error && (
        <p className="mb-4 rounded-lg border border-danger/30 bg-red-50 px-3 py-2 text-sm text-danger" role="alert">
          {error}
        </p>
      )}

      {step === 0 && (
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-ink">เลือกสาขา</h2>
          {branches.map((b) => (
            <label
              key={b.id}
              className={`flex cursor-pointer flex-col rounded-xl border p-4 ${branchId === b.id ? "border-teal bg-sky-soft/40" : "border-line"}`}
            >
              <input
                type="radio"
                name="branch"
                className="sr-only"
                checked={branchId === b.id}
                onChange={() => setBranchId(b.id)}
              />
              <span className="font-medium text-ink">{b.nameTh}</span>
              <span className="text-sm text-ink-muted">{b.area}</span>
            </label>
          ))}
          <button
            type="button"
            className="mt-4 w-full rounded-full bg-teal py-3 text-sm font-semibold text-white hover:bg-teal-hover"
            onClick={() => setStep(1)}
          >
            ถัดไป
          </button>
        </div>
      )}

      {step === 1 && (
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-ink">เลือกบริการหลัก</h2>
          {services.map((s) => (
            <label
              key={s.id}
              className={`flex cursor-pointer justify-between rounded-xl border p-4 ${serviceId === s.id ? "border-teal bg-sky-soft/40" : "border-line"}`}
            >
              <span className="font-medium text-ink">{s.nameTh}</span>
              <input
                type="radio"
                name="service"
                checked={serviceId === s.id}
                onChange={() => setServiceId(s.id)}
              />
            </label>
          ))}
          <div className="flex gap-2">
            <button
              type="button"
              className="flex-1 rounded-full border border-line py-3 text-sm font-medium"
              onClick={() => setStep(0)}
            >
              ย้อนกลับ
            </button>
            <button
              type="button"
              className="flex-1 rounded-full bg-teal py-3 text-sm font-semibold text-white hover:bg-teal-hover"
              onClick={() => setStep(2)}
            >
              ถัดไป
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-ink">ความต้องการพบทันตแพทย์</h2>
          {providers.map((p) => (
            <label
              key={p.id}
              className={`flex cursor-pointer items-center justify-between rounded-xl border p-4 ${providerId === p.id ? "border-teal bg-sky-soft/40" : "border-line"}`}
            >
              <span className="text-ink">{p.labelTh}</span>
              <input
                type="radio"
                name="provider"
                checked={providerId === p.id}
                onChange={() => setProviderId(p.id)}
              />
            </label>
          ))}
          <div className="flex gap-2">
            <button
              type="button"
              className="flex-1 rounded-full border border-line py-3 text-sm font-medium"
              onClick={() => setStep(1)}
            >
              ย้อนกลับ
            </button>
            <button
              type="button"
              className="flex-1 rounded-full bg-teal py-3 text-sm font-semibold text-white hover:bg-teal-hover"
              onClick={() => setStep(3)}
            >
              ถัดไป
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-ink">เลือกวันและเวลา</h2>
          <p className="text-sm text-ink-muted">
            แสดงเฉพาะวันที่ทันตแพทย์และสาขาที่เลือกเข้างาน — โหมดสาธิต
          </p>
          <div className="grid max-h-72 grid-cols-1 gap-2 overflow-y-auto sm:grid-cols-2">
            {slots.map((s) => (
              <button
                key={s.iso}
                type="button"
                onClick={() => setSlotIso(s.iso)}
                className={`rounded-lg border px-3 py-2 text-left text-sm ${slotIso === s.iso ? "border-teal bg-sky-soft/50" : "border-line"}`}
              >
                {s.label}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              className="flex-1 rounded-full border border-line py-3 text-sm font-medium"
              onClick={() => setStep(2)}
            >
              ย้อนกลับ
            </button>
            <button
              type="button"
              className="flex-1 rounded-full bg-teal py-3 text-sm font-semibold text-white hover:bg-teal-hover"
              onClick={() => setStep(4)}
            >
              ถัดไป
            </button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-ink">ข้อมูลผู้จอง</h2>
          <div>
            <label className="text-sm font-medium text-ink-muted">ชื่อ-นามสกุล</label>
            <input
              className="mt-1 w-full rounded-lg border border-line bg-surface px-3 py-2 text-ink"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-ink-muted">เบอร์โทรศัพท์</label>
            <input
              className="mt-1 w-full rounded-lg border border-line bg-surface px-3 py-2 text-ink"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              inputMode="numeric"
              autoComplete="tel"
              placeholder="0812345678"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-ink-muted">อีเมล (ไม่บังคับ)</label>
            <input
              className="mt-1 w-full rounded-lg border border-line bg-surface px-3 py-2 text-ink"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-ink-muted">หมายเหตุ</label>
            <textarea
              className="mt-1 w-full rounded-lg border border-line bg-surface px-3 py-2 text-ink"
              rows={3}
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>
          <div className="flex items-start gap-2 text-sm text-ink-muted">
            <input
              id="booking-consent"
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-1 shrink-0"
            />
            <div className="leading-relaxed">
              <label htmlFor="booking-consent" className="cursor-pointer">
                ข้าพเจ้ายอมรับ
              </label>{" "}
              <PrivacyPolicyModalTrigger className="inline align-baseline text-teal underline hover:text-teal-hover">
                นโยบายความเป็นส่วนตัว
              </PrivacyPolicyModalTrigger>
              <label htmlFor="booking-consent" className="cursor-pointer">
                {" "}
                และเข้าใจว่าการจองเป็นการนัดหมายเบื้องต้น ไม่ใช่การวินิจฉัยทางการแพทย์
              </label>
            </div>
          </div>
          <p className="text-xs text-ink-faint">
            หากต้องการเลื่อนหรือยกเลิกนัด กรุณาแจ้งล่วงหน้าอย่างน้อย 24 ชั่วโมง ผ่าน LINE หรือโทรศัพท์สาขา
            (ข้อความตัวอย่าง)
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              className="flex-1 rounded-full border border-line py-3 text-sm font-medium"
              onClick={() => setStep(3)}
            >
              ย้อนกลับ
            </button>
            <button
              type="button"
              disabled={loading}
              className="flex-1 rounded-full bg-teal py-3 text-sm font-semibold text-white hover:bg-teal-hover disabled:opacity-60"
              onClick={() => void submit()}
            >
              {loading ? "กำลังส่ง…" : "ยืนยันการจอง"}
            </button>
          </div>
        </div>
      )}

      {step === 5 && doneRef && (
        <div className="rounded-2xl border border-line bg-surface p-8 text-center">
          <p className="text-sm font-medium text-teal">ได้รับคำขอแล้ว</p>
          <p className="mt-2 text-2xl font-semibold text-ink">รหัสอ้างอิง {doneRef}</p>
          <p className="mt-4 text-sm text-ink-muted">
            เจ้าหน้าที่จะติดต่อกลับเพื่อยืนยันนัด — ในโหมดสาธิต คำขอปรากฏที่แดชบอร์ดหน้าร้าน
          </p>
          <Link
            href="/"
            className="mt-6 inline-block rounded-full bg-teal px-6 py-2.5 text-sm font-semibold text-white"
          >
            กลับหน้าแรก
          </Link>
        </div>
      )}
    </div>
  );
}
