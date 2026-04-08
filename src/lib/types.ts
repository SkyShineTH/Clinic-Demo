export type BookingRequestStatus = "pending" | "confirmed" | "reschedule" | "rejected";

export type BookingRequest = {
  id: string;
  createdAt: string;
  branchId: string;
  branchName: string;
  serviceId: string;
  serviceName: string;
  providerPreference: string | null;
  slotStart: string;
  patientName: string;
  phone: string;
  email: string | null;
  note: string | null;
  status: BookingRequestStatus;
};

export type AppointmentStatus =
  | "scheduled"
  | "checked_in"
  | "in_progress"
  | "completed"
  | "no_show"
  | "cancelled";

export type Appointment = {
  id: string;
  time: string;
  patientName: string;
  service: string;
  room: string;
  provider: string;
  status: AppointmentStatus;
  /** Branch id — matches `branches[].id` */
  branchId: string;
  /** Service category id — matches `services[].id` */
  categoryId: string;
  /** Local calendar date YYYY-MM-DD */
  slotDate: string;
};

/** Seed before `slotDate` is resolved from `relativeDay` */
export type DemoAppointmentSeed = Omit<Appointment, "slotDate"> & { relativeDay: number };

export type Branch = {
  id: string;
  nameTh: string;
  nameEn: string;
  area: string;
  hours: string;
  phone: string;
  /** Demo coordinates near the named BTS area — used for map embeds */
  map: { lat: number; lng: number };
};

export type ServiceOption = {
  id: string;
  nameTh: string;
  nameEn: string;
  durationMin: number;
};
