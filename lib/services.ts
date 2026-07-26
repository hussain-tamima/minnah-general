export type ServiceId =
  | "cooker"
  | "mixi"
  | "mixi-jar"
  | "fry-pan"
  | "gas-stove"
  | "pipe-install";

export type ServiceGroup = "appliance" | "gas";

export type Service = {
  id: ServiceId;
  title: string;
  shortDescription: string;
  detailDescription: string;
  image: string;
  group: ServiceGroup;
  whatsappMessage: string;
};

export const SERVICES: Service[] = [
  {
    id: "cooker",
    title: "Pressure Cooker Repairing",
    shortDescription:
      "Repair for pressure cookers — gaskets, safety valves, handles, and lid locking issues.",
    detailDescription:
      "We repair household pressure cookers: gasket replacement, safety valve checks, handle fixes, and lid alignment. On-site home service available near Kodungallur.",
    image: "/images/services/service-cooker.png",
    group: "appliance",
    whatsappMessage: "Hello, I need pressure cooker repairing service.",
  },
  {
    id: "mixi",
    title: "Mixi Repairing",
    shortDescription:
      "Motor, blade, and electrical repairs for mixers and kitchen blenders.",
    detailDescription:
      "Mixer motor rewinding, blade replacement, wiring repairs, and full safety testing so your kitchen mixer runs smoothly again.",
    image: "/images/services/service-mixi.png",
    group: "appliance",
    whatsappMessage: "Hello, I need mixi repairing service.",
  },
  {
    id: "mixi-jar",
    title: "Mixi Jar Repairing",
    shortDescription:
      "Jar replacement, coupling fixes, and leak repairs for mixer jars.",
    detailDescription:
      "Fix cracked jars, leaking couplings, and worn gaskets. We match common jar sizes and restore a tight, safe seal.",
    image: "/images/services/service-mixi-jar.png",
    group: "appliance",
    whatsappMessage: "Hello, I need mixi jar repairing service.",
  },
  {
    id: "fry-pan",
    title: "Fry Pan Handle Repairing",
    shortDescription:
      "Secure handle reattachment and replacement for fry pans and cookware.",
    detailDescription:
      "Rivet repair, handle replacement, and tightening for fry pans and kadais — safe for daily cooking heat.",
    image: "/images/services/service-fry-pan.png",
    group: "appliance",
    whatsappMessage: "Hello, I need fry pan handle repairing service.",
  },
  {
    id: "gas-stove",
    title: "Gas Stove Repairing",
    shortDescription:
      "Complete gas stove repair — valves, burners, regulators, and ignition systems.",
    detailDescription:
      "Repairs for home stoves, hotel kitchens, and commercial burners. All brands and heavy-duty kitchen lines.",
    image: "/images/services/service-gas-stove.png",
    group: "gas",
    whatsappMessage: "Hello, I need gas stove repairing service.",
  },
  {
    id: "pipe-install",
    title: "Gas Stove Pipe Installation",
    shortDescription:
      "Safe, leak-tested gas pipe installation and connection for stoves and cylinders.",
    detailDescription:
      "New hose and regulator installation, secure connections, and leak checks for cylinders and built-in lines.",
    image: "/images/services/service-pipe-install.png",
    group: "gas",
    whatsappMessage: "Hello, I need gas stove pipe installation service.",
  },
];

export function getServiceById(id: string): Service | undefined {
  return SERVICES.find((s) => s.id === id);
}
