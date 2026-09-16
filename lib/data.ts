export type Customer = {
  id: string;
  name: string;
  phone: string;
  email: string;
  lastVisit: string;
  nextDue: string;
  totalSpent: number;
  preferredArtist: string;
  notes: string;
  status: "Active" | "Due" | "Overdue";
};

export const customers: Customer[] = [
  {
    id: "C-1042",
    name: "Ananya Kapoor",
    phone: "+91 98200 11223",
    email: "ananya.k@gmail.com",
    lastVisit: "10 Sep 2026",
    nextDue: "24 Sep 2026",
    totalSpent: 18400,
    preferredArtist: "Riya",
    notes: "Allergic to acrylic primer. Prefers almond shape.",
    status: "Due",
  },
  {
    id: "C-1041",
    name: "Priya Sharma",
    phone: "+91 90040 55667",
    email: "priya.sharma@yahoo.com",
    lastVisit: "02 Sep 2026",
    nextDue: "16 Sep 2026",
    totalSpent: 9200,
    preferredArtist: "Meera",
    notes: "Regular gel polish, likes French tips.",
    status: "Overdue",
  },
  {
    id: "C-1040",
    name: "Sneha Rao",
    phone: "+91 88888 44321",
    email: "sneha.rao@outlook.com",
    lastVisit: "12 Sep 2026",
    nextDue: "27 Sep 2026",
    totalSpent: 26750,
    preferredArtist: "Riya",
    notes: "VIP — books extensions every cycle.",
    status: "Active",
  },
  {
    id: "C-1039",
    name: "Fatima Sheikh",
    phone: "+91 77009 12234",
    email: "fatima.sheikh@gmail.com",
    lastVisit: "05 Sep 2026",
    nextDue: "19 Sep 2026",
    totalSpent: 5400,
    preferredArtist: "Meera",
    notes: "New customer, sensitive skin around cuticles.",
    status: "Due",
  },
  {
    id: "C-1038",
    name: "Kavya Nair",
    phone: "+91 99887 66554",
    email: "kavya.nair@gmail.com",
    lastVisit: "30 Aug 2026",
    nextDue: "13 Sep 2026",
    totalSpent: 14300,
    preferredArtist: "Zara",
    notes: "Eyelash extensions, classic set.",
    status: "Overdue",
  },
];

export type Invoice = {
  inv: string;
  tx: string;
  client: string;
  services: string;
  time: string;
  cost: number;
  discount: number;
  mode: "Cash" | "Card" | "UPI" | "Split";
  net: number;
  balance: number;
  status: "Paid" | "Balance due" | "Advance paid";
};

export const invoices: Invoice[] = [
  {
    inv: "2026/Sep/118",
    tx: "TX-88231",
    client: "Sneha Rao",
    services: "Nail Extensions, Gel Polish",
    time: "11:20 AM",
    cost: 3800,
    discount: 200,
    mode: "UPI",
    net: 3600,
    balance: 0,
    status: "Paid",
  },
  {
    inv: "2026/Sep/117",
    tx: "TX-88227",
    client: "Ananya Kapoor",
    services: "Manicure, Pedicure",
    time: "1:05 PM",
    cost: 1600,
    discount: 0,
    mode: "Cash",
    net: 1600,
    balance: 0,
    status: "Paid",
  },
  {
    inv: "2026/Sep/116",
    tx: "TX-88219",
    client: "Fatima Sheikh",
    services: "Eyelash Extensions",
    time: "3:40 PM",
    cost: 2800,
    discount: 100,
    mode: "Split",
    net: 2700,
    balance: 900,
    status: "Balance due",
  },
  {
    inv: "2026/Sep/115",
    tx: "TX-88204",
    client: "Priya Sharma",
    services: "Gel Polish, Nail Art",
    time: "5:15 PM",
    cost: 2200,
    discount: 0,
    mode: "Card",
    net: 2200,
    balance: 0,
    status: "Paid",
  },
  {
    inv: "2026/Sep/114",
    tx: "TX-88190",
    client: "Kavya Nair",
    services: "Nail Extensions (fill)",
    time: "6:30 PM",
    cost: 1900,
    discount: 0,
    mode: "UPI",
    net: 1900,
    balance: 1900,
    status: "Advance paid",
  },
];

export type Appointment = {
  id: string;
  time: string;
  durationMins: number;
  client: string;
  service: string;
  staff: "Riya" | "Meera" | "Zara";
  status: "Booked" | "Completed" | "Billed" | "Cancelled";
};

export const appointments: Appointment[] = [
  { id: "A1", time: "11:00", durationMins: 60, client: "Sneha Rao", service: "Nail Extensions", staff: "Riya", status: "Completed" },
  { id: "A2", time: "11:30", durationMins: 45, client: "Priya Sharma", service: "Gel Polish", staff: "Meera", status: "Billed" },
  { id: "A3", time: "12:15", durationMins: 60, client: "Kavya Nair", service: "Eyelash Extensions", staff: "Zara", status: "Booked" },
  { id: "A4", time: "13:00", durationMins: 90, client: "Ananya Kapoor", service: "Nail Extensions (fill)", staff: "Riya", status: "Booked" },
  { id: "A5", time: "14:30", durationMins: 45, client: "Fatima Sheikh", service: "Manicure", staff: "Meera", status: "Booked" },
  { id: "A6", time: "15:30", durationMins: 60, client: "Walk-in", service: "Pedicure", staff: "Zara", status: "Booked" },
  { id: "A7", time: "16:45", durationMins: 90, client: "Riya Malhotra", service: "Nail Art + Extensions", staff: "Riya", status: "Booked" },
  { id: "A8", time: "18:00", durationMins: 45, client: "Walk-in", service: "Gel Polish", staff: "Meera", status: "Booked" },
];

export const staffHours = ["11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"];
export const staffList = ["Riya", "Meera", "Zara"] as const;

export type FollowUp = {
  customer: string;
  phone: string;
  lastVisit: string;
  dueBucket: "30 days" | "60 days" | "90 days";
  service: string;
  outcome: "Not called" | "Call later" | "Not interested" | "Booked";
};

export const followUps: FollowUp[] = [
  { customer: "Priya Sharma", phone: "+91 90040 55667", lastVisit: "02 Sep 2026", dueBucket: "30 days", service: "Gel Polish", outcome: "Not called" },
  { customer: "Kavya Nair", phone: "+91 99887 66554", lastVisit: "30 Aug 2026", dueBucket: "30 days", service: "Eyelash Extensions", outcome: "Call later" },
  { customer: "Meher Chaudhary", phone: "+91 91234 55110", lastVisit: "18 Jul 2026", dueBucket: "60 days", service: "Nail Extensions", outcome: "Not called" },
  { customer: "Ishita Verma", phone: "+91 98765 22110", lastVisit: "20 Jun 2026", dueBucket: "90 days", service: "Manicure + Pedicure", outcome: "Not interested" },
  { customer: "Ananya Kapoor", phone: "+91 98200 11223", lastVisit: "10 Sep 2026", dueBucket: "30 days", service: "Manicure", outcome: "Booked" },
];

export type Staff = {
  name: string;
  role: string;
  phone: string;
  joined: string;
  servicesThisMonth: number;
  revenueThisMonth: number;
  active: boolean;
};

export const staff: Staff[] = [
  { name: "Riya Menon", role: "Senior Nail Artist", phone: "+91 90011 22334", joined: "12 Jan 2024", servicesThisMonth: 96, revenueThisMonth: 142000, active: true },
  { name: "Meera Iyer", role: "Nail Artist", phone: "+91 90022 33445", joined: "03 Jun 2024", servicesThisMonth: 81, revenueThisMonth: 108500, active: true },
  { name: "Zara Khan", role: "Lash & Nail Artist", phone: "+91 90033 44556", joined: "20 Nov 2025", servicesThisMonth: 64, revenueThisMonth: 91200, active: true },
  { name: "Ovais Sheikh", role: "Nail Artist", phone: "+91 90044 55667", joined: "08 Feb 2024", servicesThisMonth: 0, revenueThisMonth: 0, active: false },
];

export const revenueByDay = [
  { day: "Mon", cash: 8200, card: 5400, upi: 11200 },
  { day: "Tue", cash: 6100, card: 4200, upi: 9800 },
  { day: "Wed", cash: 9400, card: 6800, upi: 12600 },
  { day: "Thu", cash: 7200, card: 5100, upi: 10400 },
  { day: "Fri", cash: 11800, card: 8600, upi: 15200 },
  { day: "Sat", cash: 15200, card: 11400, upi: 19800 },
  { day: "Sun", cash: 13100, card: 9200, upi: 16700 },
];
