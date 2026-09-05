// Single source of truth for every fact that appears on the site.
// Everything here is taken from the App Store listing, the company's
// Terms of Use / Privacy Policy, or the studio's own About Us copy.

export const studio = {
  name: "URA MILAS",
  legalName: "URA MILAS d.o.o.",
  email: "marko@uramilas.store",
  address: {
    street: "Sarajevska cesta 27",
    city: "10000 Zagreb",
    country: "Croatia",
  },
  location: "Zagreb, Croatia",
  yearsActive: "10+",
  copyrightHolder: "Marko Milas",
} as const;

export const partner = {
  name: "Sonos",
  legalName: "Sonos, Inc.",
} as const;

export const app = {
  name: "Sonos｜S1 & S2 Controller",
  shortName: "S1 & S2 Controller",
  subtitle: "Connect Headphones & Speaker",
  appStoreId: "6760191648",
  appStoreUrl: "https://apps.apple.com/app/id6760191648",
  category: "Utilities",
  secondaryCategory: "Productivity",
  price: "Free",
  monetisation: "Free with In-App Purchases",
  minOs: "iOS 18.6",
  devices: "iPhone, iPad",
  languages: "English and 33 more",
  size: "14.3 MB",
  version: "1.1",
  ageRating: "4+",
  released: "21 July 2026",
} as const;

// Effective date carried over verbatim from the supplied legal documents.
export const legalEffectiveDate = "August 18, 2026";

/** The three feature blocks — one per app screenshot we actually have. */
export const features = [
  {
    n: "01",
    title: "Speaker control",
    body:
      "Discover compatible devices on your network and take control from one screen. " +
      "Playback, volume and sound settings sit where you expect them, with no manual pairing step.",
    image: "/images/screen1.jpg",
    alt: "Main control screen showing Stream and Identify tiles above a list of recent identifications",
  },
  {
    n: "02",
    title: "Song identification",
    body:
      "Tap once to identify whatever is playing in the room. Recognised tracks are kept in a " +
      "running list so you can come back to them later.",
    image: "/images/screen2.jpg",
    alt: "Identifier screen with a pulsing listening indicator",
  },
  {
    n: "03",
    title: "Playback you can reach",
    body:
      "Full transport controls with album art and track metadata — play, pause, skip and scrub " +
      "without unlocking anything else first.",
    image: "/images/screen3.jpg",
    alt: "Now playing screen with album artwork and transport controls",
  },
] as const;

/** Additional capabilities listed on the store that have no screenshot. */
export const capabilities = [
  "Stream music from files, apps and supported services",
  "Browse and select audio content",
  "Volume and sound settings",
  "AirPlay-compatible playback",
  "Interface tuned for music listening",
  "Works across a multi-device setup",
] as const;

/** The three-step onboarding, as described in the store listing. */
export const steps = [
  {
    n: "01",
    title: "Join the same network",
    body: "Put your iPhone and your compatible device on the same Wi-Fi network.",
  },
  {
    n: "02",
    title: "Open the app",
    body: "Compatible devices on the network are discovered automatically — there is no manual pairing step.",
  },
  {
    n: "03",
    title: "Take control",
    body: "Play music, adjust sound settings and manage playback from a single interface.",
  },
] as const;

/**
 * What the studio does. These are capabilities and stages of work described
 * in the company's own About Us copy — deliberately not a list of invented
 * products. Real shipped apps can be added here once their names are known.
 */
export const disciplines = [
  {
    n: "01",
    title: "Product design",
    body: "Turning an early concept into a defined product — flows, interface, and the decisions that make it worth shipping.",
  },
  {
    n: "02",
    title: "Development",
    body: "Building for modern mobile platforms, across the categories and technologies the team has worked in for over a decade.",
  },
  {
    n: "03",
    title: "Testing and release",
    body: "Preparing a build for distribution, taking it through store review, and getting it in front of users.",
  },
  {
    n: "04",
    title: "Updates and support",
    body: "Staying with a product after launch: compatibility work, fixes, and answering the people who write in.",
  },
] as const;

export const marqueeWords = [
  app.shortName,
  "Music playback",
  "Device control",
  "Song identification",
  "Free",
  "iOS 18.6+",
  "iPhone & iPad",
  "Zagreb, Croatia",
] as const;

/** Legally required distance from the hardware brand. */
export const disclaimer =
  `${studio.legalName} has entered into a written agreement with ${partner.legalName} covering the ` +
  `development and distribution of compatible applications and the authorized use of approved ` +
  `${partner.name} brand assets. The app is independently developed, published, operated and supported by ` +
  `${studio.legalName}. Except where ${partner.name} states otherwise in writing, this does not mean the app is ` +
  `developed, operated, certified, sponsored or supported by ${partner.name}. All ${partner.name} trademarks, ` +
  `product names and logos remain the property of ${partner.legalName}.`;
