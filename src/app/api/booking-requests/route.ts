import { NextResponse } from "next/server";
import {
  addBookingRequest,
  listBookingRequests,
  updateBookingRequestStatus,
} from "@/lib/booking-server-store";

export async function GET() {
  return NextResponse.json({ items: listBookingRequests() });
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Record<string, unknown>;
    const required = [
      "branchId",
      "branchName",
      "serviceId",
      "serviceName",
      "slotStart",
      "patientName",
      "phone",
    ];
    for (const k of required) {
      if (body[k] == null || String(body[k]).trim() === "") {
        return NextResponse.json({ error: `missing_${k}` }, { status: 400 });
      }
    }
    const row = addBookingRequest({
      branchId: String(body.branchId),
      branchName: String(body.branchName),
      serviceId: String(body.serviceId),
      serviceName: String(body.serviceName),
      providerPreference:
        body.providerPreference == null || body.providerPreference === ""
          ? null
          : String(body.providerPreference),
      slotStart: String(body.slotStart),
      patientName: String(body.patientName).trim(),
      phone: String(body.phone).trim(),
      email:
        body.email == null || String(body.email).trim() === ""
          ? null
          : String(body.email).trim(),
      note:
        body.note == null || String(body.note).trim() === ""
          ? null
          : String(body.note).trim(),
    });
    return NextResponse.json({ item: row });
  } catch {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }
}

export async function PATCH(req: Request) {
  try {
    const body = (await req.json()) as { id?: string; status?: string };
    if (!body.id || !body.status) {
      return NextResponse.json({ error: "missing_fields" }, { status: 400 });
    }
    const allowed = ["pending", "confirmed", "reschedule", "rejected"] as const;
    if (!allowed.includes(body.status as (typeof allowed)[number])) {
      return NextResponse.json({ error: "invalid_status" }, { status: 400 });
    }
    const updated = updateBookingRequestStatus(
      body.id,
      body.status as (typeof allowed)[number],
    );
    if (!updated) return NextResponse.json({ error: "not_found" }, { status: 404 });
    return NextResponse.json({ item: updated });
  } catch {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }
}
