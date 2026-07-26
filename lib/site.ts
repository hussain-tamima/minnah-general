export const SITE = {
  name: "Minna Stove Repair",
  tagline: "Parts & Home Service",
  phone: "+91 94978 63442",
  phoneTel: "+919497863442",
  whatsapp: "919497863442",
  address: "Minna stove repair & cooker home service centre, Near Kodungallur",
  mapsUrl:
    "https://www.google.com/maps/place/Minna+stove+repair+%26+cooker+home+service+centre+Near+Kodungallur/@10.2437023,76.1893598,17z/data=!3m1!4b1!4m6!3m5!1s0x3b081d0a8ab00d03:0xf2af062317f4f119!8m2!3d10.2437023!4d76.1893598!16s%2Fg%2F11mk_919x9?entry=ttu",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.886!2d76.1893598!3d10.2437023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b081d0a8ab00d03%3A0xf2af062317f4f119!2sMinna%20stove%20repair%20%26%20cooker%20home%20service%20centre%20Near%20Kodungallur!5e0!3m2!1sen!2sin!4v1717180800000!5m2!1sen!2sin",
} as const;

export function whatsAppUrl(text: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
}

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hello, I would like to request a repair service.";
