// Site copy and data, taken verbatim from the design handoff.
// Stats are the four approved figures in the brand guide; don't add new ones without a source.
import { photos, profiles } from "./assets.js";

export const stats = [
  { value: "98", caption: "of U-GO scholars advance to the next grade", profile: profiles.p05 },
  { value: "90", caption: "of a woman's income is invested back into her family", profile: profiles.p04 },
  { value: "96", caption: "of women in Cambodia do not attend university", profile: profiles.p01 },
];

export const countries = [
  ["Pakistan", "pink"], ["India", "lightTeal"], ["Bangladesh", "darkTeal"],
  ["Cambodia", "lime"], ["Vietnam", "pink"], ["Philippines", "orange"],
  ["Indonesia", "cornflower"], ["Nepal", "darkGreen"], ["Tanzania", "cornflower"],
];

// Portraits are abstract placeholders from the design system; swap in real photos.
const PHOTOS = [photos.teal, photos.orange, photos.blue];
const MASKS = [profiles.p01, profiles.p03, profiles.p05, profiles.p04, profiles.p02];
const TONES = ["lightTeal", "orange", "cornflower", "lime", "pink"];

export const scholars = [
  ["Evania Larasati", "Indonesia", "Agrotechnology"],
  ["Shimpi Yadav", "India", "Pharmacy"],
  ["Jahnavi A", "India", "Aeronautical Engineering"],
  ["Sokha Chan", "Cambodia", "Computer Science"],
  ["Aisha Rahman", "Bangladesh", "Public Health"],
  ["Nilima Gurung", "Nepal", "Civil Engineering"],
  ["Linh Tran", "Vietnam", "Environmental Science"],
  ["Maria Santos", "Philippines", "Nursing"],
].map(([name, country, field], i) => ({
  name, country, field,
  photo: PHOTOS[i % PHOTOS.length],
  mask: MASKS[i % MASKS.length],
  tone: TONES[i % TONES.length],
}));
