export type SupportDesk = {
  title: string;
  numbers: string[];
};

export const supportDesks: SupportDesk[] = [
  { title: "PC COMPONENT", numbers: ["01673991833, 01322928229", "01322-928234"] },
  { title: "GADGET AND ACCESORIAS", numbers: ["01973167989, 01973167985"] },
  { title: "SERVICE CENTER", numbers: ["01322928228, 01322928226"] },
  { title: "LAPTOP", numbers: ["01973167984"] },
];

export type Branch = {
  title: string;
  address: string[];
  businessHour: string;
  hotline?: string;
  whatsapp?: string;
  weekend: string;
};

export const branches: Branch[] = [
  {
    title: "Retail Branch",
    address: [
      "Shop #248,249,250, Level-02, Multiplan Center, New Elephant Road,",
      "Dhaka-1205",
    ],
    businessHour: "10.00AM - 8.00PM",
    hotline: "01673991833, 01322928229, 01973167985, 01322-928234",
    weekend: "Tuesday",
  },
  {
    title: "Head Office",
    address: [
      "Shop 1414, Level-14, Elephant Road, Dhaka-1205",
    ],
    businessHour: "10.00AM - 8.00PM",
    hotline: "01973167989, 01973167983",
    weekend: "Tuesday",
  },
  {
    title: "Service Center & RMA",
    address: [
      "Shop 1418, Level-14, Multiplan Center, New Elephant Road,",
      "Dhaka-1205",
    ],
    businessHour: "10.00AM - 8.00PM",
    hotline: "01322928228",
    whatsapp: "01322928226",
    weekend: "Tuesday",
  },
];

export const paymentMethods = [
  "VISA",
  "Mastercard",
  "Amex",
  "UnionPay",
  "Diners",
  "DBBL Nexus",
  "bKash",
  "Nagad",
  "Rocket",
];
