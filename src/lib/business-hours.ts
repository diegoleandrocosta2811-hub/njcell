export type SchemaDayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

export type OpeningHoursSlot = {
  dayOfWeek: SchemaDayOfWeek | SchemaDayOfWeek[];
  opens: string;
  closes: string;
};

/** Fonte única de horários — usada no site, schema JSON-LD e arquivos para IA. */
export const OPENING_HOURS: OpeningHoursSlot[] = [
  {
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "10:00",
    closes: "17:00",
  },
];

const DAY_RANGE_LABELS: Record<string, string> = {
  "Monday-Friday": "Segunda a sexta",
  Monday: "segunda-feira",
  Tuesday: "terça-feira",
  Wednesday: "quarta-feira",
  Thursday: "quinta-feira",
  Friday: "sexta-feira",
  Saturday: "sábado",
  Sunday: "domingo",
};

function formatTime(isoTime: string): string {
  const [hour, minute] = isoTime.split(":");
  return minute === "00" ? `${Number(hour)}h` : `${Number(hour)}h${minute}`;
}

function labelForDays(days: SchemaDayOfWeek[]): string {
  const weekdays: SchemaDayOfWeek[] = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];

  if (
    days.length === weekdays.length &&
    weekdays.every((day, index) => days[index] === day)
  ) {
    return DAY_RANGE_LABELS["Monday-Friday"];
  }

  if (days.length === 1) {
    return DAY_RANGE_LABELS[days[0]];
  }

  return days.map((day) => DAY_RANGE_LABELS[day]).join(", ");
}

export function formatOpeningHoursLabel(slots: OpeningHoursSlot[]): string {
  return slots
    .map((slot) => {
      const days = Array.isArray(slot.dayOfWeek) ? slot.dayOfWeek : [slot.dayOfWeek];
      return `${labelForDays(days)}: ${formatTime(slot.opens)} às ${formatTime(slot.closes)}`;
    })
    .join(" | ");
}

export const BUSINESS_HOURS = formatOpeningHoursLabel(OPENING_HOURS);

export function openingHoursSpecificationForSchema(): Array<{
  "@type": "OpeningHoursSpecification";
  dayOfWeek: SchemaDayOfWeek | SchemaDayOfWeek[];
  opens: string;
  closes: string;
}> {
  return OPENING_HOURS.map((slot) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: slot.dayOfWeek,
    opens: slot.opens,
    closes: slot.closes,
  }));
}
