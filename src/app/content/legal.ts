// Terms of Use and Privacy Policy, reproduced verbatim from the documents
// supplied by URA MILAS d.o.o. Do not paraphrase or "improve" this copy —
// it is the company's legal text.

export type Block =
  | { p: string }
  | { ul: string[] }
  | { address: string[] };

export type Section = { n: number; title: string; blocks: Block[] };

const CONTACT: Block = {
  address: [
    "URA MILAS d.o.o.",
    "Sarajevska cesta 27",
    "10000 Zagreb, Croatia",
    "Email: marko@uramilas.store",
  ],
};

export const terms: Section[] = [
  {
    n: 1,
    title: "Agreement",
    blocks: [
      { p: "These Terms of Use (“Terms”) govern your access to and use of the mobile application (the “App”)." },
      { p: "The App is provided and operated by:" },
      CONTACT,
      { p: "By downloading, accessing, purchasing, or using the App, you agree to these Terms and acknowledge the Privacy Policy." },
      { p: "If you do not agree to these Terms, you should not use the App." },
    ],
  },
  {
    n: 2,
    title: "Sonos License and Relationship",
    blocks: [
      { p: "URA MILAS d.o.o. has entered into a written agreement with Sonos, Inc. authorizing, subject to the terms and limitations of that agreement:" },
      {
        ul: [
          "development and commercial distribution of compatible applications;",
          "use of approved Sonos brand assets in connection with those applications; and",
          "development of functionality intended to interact with compatible Sonos products and services.",
        ],
      },
      { p: "Sonos trademarks, trade names, product names, logos, software, documentation, and other proprietary materials remain owned by Sonos, Inc." },
      { p: "The App is independently developed, published, operated, maintained, and supported by URA MILAS d.o.o." },
      { p: "Except where Sonos expressly states otherwise in writing, the license granted to URA MILAS d.o.o. does not mean that the App is developed, operated, certified, sponsored, or supported by Sonos." },
      { p: "Sonos is not responsible for subscriptions, billing, customer support, maintenance, errors, interruptions, or other obligations arising from the operation of the App by URA MILAS d.o.o." },
    ],
  },
  {
    n: 3,
    title: "Eligibility",
    blocks: [
      { p: "You may use the App only if you are legally permitted to do so under the laws applicable to you." },
      { p: "If you are below the age at which you may independently agree to these Terms in your jurisdiction, you may use the App only with the involvement and authorization of a parent or legal guardian." },
      { p: "Purchases and subscriptions may be made only by a person legally authorized to make such transactions." },
    ],
  },
  {
    n: 4,
    title: "License to Use the App",
    blocks: [
      { p: "Subject to these Terms, URA MILAS d.o.o. grants you a limited, personal, non-exclusive, non-transferable, non-sublicensable, and revocable license to use the App for lawful personal purposes." },
      { p: "The App is licensed, not sold." },
      { p: "Your use of an App obtained through the Apple App Store is also subject to applicable Apple usage rules, terms, and license conditions." },
      { p: "No ownership rights in the App or its intellectual property are transferred to you." },
    ],
  },
  {
    n: 5,
    title: "App Functionality and Compatible Products",
    blocks: [
      { p: "The App may provide functionality designed to discover, connect to, manage, or control compatible products and related functions." },
      { p: "Compatibility may depend on factors outside our control, including:" },
      {
        ul: [
          "product model;",
          "firmware version;",
          "operating system;",
          "local network configuration;",
          "third-party service availability;",
          "changes made by product manufacturers;",
          "changes to technical interfaces or protocols.",
        ],
      },
      { p: "We do not guarantee permanent compatibility with every product, firmware version, feature, network, or third-party service." },
      { p: "Features may be modified, added, suspended, or discontinued when reasonably necessary to maintain compatibility, security, legal compliance, or operation of the App." },
    ],
  },
  {
    n: 6,
    title: "Acceptable Use",
    blocks: [
      { p: "You must use the App lawfully and in accordance with these Terms." },
      { p: "You may not:" },
      {
        ul: [
          "copy, reproduce, redistribute, sell, rent, lease, or sublicense the App except where expressly permitted by law;",
          "modify or create unauthorized derivative works based on the App;",
          "reverse engineer, decompile, or attempt to extract source code except where applicable law expressly permits such activity;",
          "circumvent security or access controls;",
          "interfere with the normal operation of the App, compatible products, networks, or third-party services;",
          "use the App to obtain unauthorized access to another person's devices or accounts;",
          "introduce malware or harmful code;",
          "remove copyright, trademark, attribution, or other proprietary notices;",
          "use Sonos trademarks or other protected materials independently of the rights expressly granted through the App;",
          "use the App for unlawful, fraudulent, deceptive, or harmful purposes.",
        ],
      },
    ],
  },
  {
    n: 7,
    title: "Purchases and Subscriptions",
    blocks: [
      { p: "Certain features may require an in-app purchase or subscription." },
      { p: "Where purchases are made through the Apple App Store:" },
      {
        ul: [
          "payment is charged through the user's Apple account;",
          "applicable pricing is displayed before purchase;",
          "subscription periods and available offers are displayed in the App or applicable App Store interface;",
          "recurring subscriptions may automatically renew unless cancelled in accordance with Apple's applicable subscription rules;",
          "subscriptions can be managed through the user's Apple account;",
          "deleting the App does not by itself cancel an active subscription;",
          "refunds and payment disputes relating to App Store transactions are administered subject to Apple's applicable policies.",
        ],
      },
      { p: "We do not independently receive or store complete payment card details for transactions processed by Apple." },
    ],
  },
  {
    n: 8,
    title: "Apple App Store",
    blocks: [
      { p: "Apple is not a party to these Terms between you and URA MILAS d.o.o." },
      { p: "URA MILAS d.o.o., and not Apple, is responsible for the App and for maintenance and support provided directly in relation to the App, except to the extent otherwise required under applicable Apple terms or applicable law." },
      { p: "Use of the App may also be subject to the Apple Media Services Terms and Apple's applicable end-user license agreement." },
      { p: "Nothing in these Terms is intended to override mandatory rights or obligations arising under applicable Apple terms." },
    ],
  },
  {
    n: 9,
    title: "Third-Party Products and Services",
    blocks: [
      { p: "The App may communicate or interact with third-party products, platforms, networks, websites, software, or services." },
      { p: "Such products and services may be governed by separate terms and privacy policies." },
      { p: "We are not responsible for the independent operation, availability, security, content, or privacy practices of third-party services that are outside our control." },
      { p: "Nothing in these Terms grants you any ownership or license rights in third-party intellectual property." },
    ],
  },
  {
    n: 10,
    title: "Intellectual Property",
    blocks: [
      { p: "Except for intellectual property owned by Sonos or other third parties, all rights, title, and interest in the App, including its software, source code, interfaces, original designs, graphics, documentation, and other original materials, belong to URA MILAS d.o.o. or its licensors." },
      { p: "Sonos, Sonos product names, Sonos logos, and other Sonos brand assets are trademarks or proprietary materials of Sonos, Inc." },
      { p: "URA MILAS d.o.o.'s use of approved Sonos brand assets is made pursuant to written authorization from Sonos, Inc. and does not transfer ownership of those assets to URA MILAS d.o.o." },
      { p: "All goodwill arising from authorized use of Sonos trademarks belongs to Sonos, Inc." },
    ],
  },
  {
    n: 11,
    title: "Maintenance and Availability",
    blocks: [
      { p: "We may release updates, corrections, improvements, or modifications to the App." },
      { p: "We may also temporarily suspend features where reasonably necessary for:" },
      {
        ul: [
          "maintenance;",
          "security;",
          "technical changes;",
          "third-party service changes;",
          "legal or regulatory compliance;",
          "compatibility updates.",
        ],
      },
      { p: "We do not guarantee uninterrupted or error-free availability of every function." },
    ],
  },
  {
    n: 12,
    title: "Disclaimer of Warranties",
    blocks: [
      { p: "To the maximum extent permitted by applicable law, the App is provided “AS IS” and “AS AVAILABLE.”" },
      { p: "We make no guarantee that:" },
      {
        ul: [
          "every compatible product will be discovered or controlled successfully;",
          "every feature will remain continuously available;",
          "the App will be uninterrupted or free from errors;",
          "third-party products or services will remain compatible;",
          "network-dependent functions will always operate successfully.",
        ],
      },
      { p: "Nothing in these Terms excludes statutory warranties or consumer rights that cannot lawfully be excluded." },
    ],
  },
  {
    n: 13,
    title: "Limitation of Liability",
    blocks: [
      { p: "To the maximum extent permitted by applicable law, URA MILAS d.o.o. shall not be liable for indirect, incidental, special, exemplary, or consequential damages arising from use of or inability to use the App." },
      { p: "This may include loss resulting from:" },
      {
        ul: [
          "network interruptions;",
          "unavailable compatible devices;",
          "changes to third-party products or services;",
          "interruption of playback or device operation;",
          "loss of settings or locally stored information;",
          "unauthorized use resulting from circumstances outside our reasonable control.",
        ],
      },
      { p: "Where liability cannot lawfully be excluded, our liability will be limited only to the extent permitted by applicable law." },
      { p: "Nothing in these Terms limits liability that cannot legally be limited or excluded." },
    ],
  },
  {
    n: 14,
    title: "Suspension and Termination",
    blocks: [
      { p: "We may restrict or terminate access to the App where reasonably necessary if:" },
      {
        ul: [
          "you materially violate these Terms;",
          "your use creates a security or legal risk;",
          "the App or relevant functionality is discontinued;",
          "continued operation becomes unlawful;",
          "continued access would infringe third-party rights.",
        ],
      },
      { p: "Upon termination of your right to use the App, the license granted under these Terms ends." },
      { p: "Provisions that by their nature should survive termination, including provisions concerning intellectual property, disclaimers, and liability, will continue to apply." },
    ],
  },
  {
    n: 15,
    title: "Changes to the App or Terms",
    blocks: [
      { p: "We may update these Terms when reasonably necessary to reflect changes in:" },
      {
        ul: [
          "App functionality;",
          "applicable laws or regulatory requirements;",
          "third-party services;",
          "commercial arrangements;",
          "security or technical requirements.",
        ],
      },
      { p: "The updated Terms will identify their applicable effective date." },
      { p: "Where required by applicable law, material changes will be communicated to users." },
    ],
  },
  {
    n: 16,
    title: "Governing Law and Consumer Rights",
    blocks: [
      { p: "These Terms are governed by the laws applicable to URA MILAS d.o.o. in Croatia, subject to any mandatory consumer protections that apply in your country of residence." },
      { p: "If you are a consumer, nothing in these Terms removes rights granted to you by mandatory consumer protection law." },
    ],
  },
  {
    n: 17,
    title: "Entire Agreement",
    blocks: [
      { p: "These Terms, together with the Privacy Policy and any applicable purchase or subscription terms presented to you, constitute the agreement between you and URA MILAS d.o.o. concerning your use of the App." },
      { p: "If any provision is held invalid or unenforceable, the remaining provisions will remain effective to the extent permitted by law." },
    ],
  },
  {
    n: 18,
    title: "Contact",
    blocks: [{ p: "For questions concerning these Terms or the App:" }, CONTACT],
  },
];

export const privacy: Section[] = [
  {
    n: 1,
    title: "Scope and Operator",
    blocks: [
      { p: "This Privacy Policy explains how URA MILAS d.o.o. (“we”, “us”, or “our”) processes information in connection with the mobile application (the “App”) and its related functionality and services." },
      { p: "The App is operated by:" },
      CONTACT,
      { p: "By using the App, you acknowledge that you have read this Privacy Policy." },
    ],
  },
  {
    n: 2,
    title: "Sonos Authorization",
    blocks: [
      { p: "URA MILAS d.o.o. has entered into a written license agreement with Sonos, Inc. authorizing, subject to the terms of that agreement, the development and commercial distribution of compatible applications and the use of approved Sonos brand assets in connection with such applications." },
      { p: "All Sonos trademarks, product names, logos, brand elements, software, and other proprietary materials remain the property of Sonos, Inc." },
      { p: "The App is independently developed and operated by URA MILAS d.o.o. The authorization does not mean that Sonos develops, operates, maintains, or provides customer support for the App unless expressly stated otherwise by Sonos in writing." },
      { p: "The licensing relationship itself does not require URA MILAS d.o.o. to provide personal information collected through the App to Sonos." },
    ],
  },
  {
    n: 3,
    title: "Information We Process",
    blocks: [
      { p: "3.1 Information You Provide" },
      { p: "We may receive information that you voluntarily provide when contacting us, including:" },
      {
        ul: [
          "your email address or other contact details;",
          "information contained in support requests;",
          "feedback and other communications you send to us.",
        ],
      },
      { p: "The App does not require a separate user account with URA MILAS d.o.o." },
      { p: "3.2 Connected Device and Local Network Information" },
      { p: "To discover, connect to, and control compatible products, the App may process information available through your device or local network, such as:" },
      {
        ul: [
          "compatible devices detected on the local network;",
          "device names and identifiers;",
          "local network addresses and connection information;",
          "room, group, or device configuration information;",
          "playback status;",
          "volume and control state;",
          "connection and availability status.",
        ],
      },
      { p: "This information is used to provide the functionality requested by you." },
      { p: "Where possible, information relating to connected devices and local network operation is processed directly on your device or within your local network." },
      { p: "3.3 Device, Usage, and Diagnostic Information" },
      { p: "Depending on the functionality and services enabled in the App, limited technical information may be processed, including:" },
      {
        ul: [
          "device model;",
          "operating system and version;",
          "language and time zone;",
          "App version;",
          "feature interactions;",
          "session and performance information;",
          "crash reports;",
          "technical errors and diagnostic information.",
        ],
      },
      { p: "Where applicable, an approximate geographic area may be inferred from an IP address by infrastructure or service providers. The App does not use this information to determine your precise physical location." },
      { p: "3.4 Purchases and Subscriptions" },
      { p: "Purchases and subscriptions offered through the App Store are processed by Apple." },
      { p: "We do not receive or store your complete payment card information." },
      { p: "We or service providers assisting with subscription management may receive limited transaction information necessary to determine purchase status, such as:" },
      {
        ul: [
          "subscription status;",
          "product or subscription type;",
          "transaction identifier;",
          "purchase confirmation;",
          "expiration or renewal status.",
        ],
      },
      { p: "Payment information maintained by Apple is subject to Apple's own privacy practices." },
    ],
  },
  {
    n: 4,
    title: "Purposes of Processing",
    blocks: [
      { p: "We use information where necessary to:" },
      {
        ul: [
          "provide the App and its functionality;",
          "discover and communicate with compatible devices;",
          "maintain device connections and control functions;",
          "process and verify purchases and subscriptions;",
          "maintain security and prevent misuse;",
          "diagnose errors and improve stability;",
          "understand and improve App functionality;",
          "respond to support requests;",
          "comply with applicable legal obligations.",
        ],
      },
      { p: "We do not use information obtained through the App to build advertising profiles." },
    ],
  },
  {
    n: 5,
    title: "Legal Bases for Processing",
    blocks: [
      { p: "For users in the European Economic Area, United Kingdom, and other jurisdictions requiring a lawful basis, information may be processed based on:" },
      {
        ul: [
          "performance of a contract, where processing is necessary to provide functionality requested by you;",
          "legitimate interests, including maintaining, securing, and improving the App;",
          "consent, where consent is required by applicable law;",
          "compliance with legal obligations.",
        ],
      },
      { p: "Where processing is based on consent, you may withdraw that consent at any time, subject to applicable law." },
    ],
  },
  {
    n: 6,
    title: "Sharing and Disclosure",
    blocks: [
      { p: "We may disclose limited information only where reasonably necessary to:" },
      { p: "Apple" },
      { p: "Apple processes App Store purchases, subscriptions, downloads, and related transaction information under its own terms and privacy policies." },
      { p: "Service Providers" },
      { p: "We may use service providers for functions such as subscription validation, technical infrastructure, diagnostics, or application support." },
      { p: "Such providers may process information only to the extent necessary to provide their respective services." },
      { p: "Compatible Products and Services" },
      { p: "When you request functionality involving compatible Sonos products or services, technical information necessary to perform the requested interaction may be communicated with those products or services." },
      { p: "Sonos independently determines its own privacy practices for Sonos products, accounts, and services." },
      { p: "Legal Requirements" },
      { p: "Information may be disclosed where reasonably necessary to comply with applicable law, legal process, court orders, regulatory requirements, or valid governmental requests, or to protect our legal rights and the security of users or the App." },
    ],
  },
  {
    n: 7,
    title: "No Sale of Personal Information",
    blocks: [
      { p: "We do not sell personal information." },
      { p: "We do not disclose personal information to third parties for their own targeted advertising purposes." },
    ],
  },
  {
    n: 8,
    title: "Data Retention",
    blocks: [
      { p: "We retain personal information only for as long as reasonably necessary for the purposes described in this Privacy Policy or as required by applicable law." },
      { p: "Information processed temporarily for local device discovery or control may exist only for the duration necessary to provide the requested functionality." },
      { p: "App preferences or configuration information may remain stored on your device until you remove it, reset the App, or delete the App." },
      { p: "Support communications may be retained for a reasonable period to resolve requests, maintain appropriate business records, and comply with legal obligations." },
      { p: "When information is no longer required, we take reasonable steps to delete, anonymize, or otherwise securely dispose of it." },
    ],
  },
  {
    n: 9,
    title: "International Data Processing",
    blocks: [
      { p: "Some service providers may process information in countries other than the country in which you reside." },
      { p: "Where required, we use appropriate legal and organizational safeguards for international transfers of personal information." },
    ],
  },
  {
    n: 10,
    title: "Security",
    blocks: [
      { p: "We use reasonable administrative, organizational, and technical measures designed to protect information against unauthorized access, alteration, disclosure, loss, or misuse." },
      { p: "However, no electronic system, network, or method of storage can guarantee absolute security." },
    ],
  },
  {
    n: 11,
    title: "Your Privacy Rights",
    blocks: [
      { p: "Depending on your jurisdiction, you may have rights regarding your personal information, including the right to:" },
      {
        ul: [
          "request access;",
          "request correction;",
          "request deletion;",
          "restrict certain processing;",
          "object to certain processing;",
          "request data portability;",
          "withdraw consent where processing is based on consent.",
        ],
      },
      { p: "To make a privacy request, contact: marko@uramilas.store" },
      { p: "We may need to verify your request before responding." },
      { p: "You may also have the right to lodge a complaint with the competent data protection authority in your jurisdiction." },
    ],
  },
  {
    n: 12,
    title: "Children's Privacy",
    blocks: [
      { p: "The App is not directed specifically to children under the age of 13 or any higher minimum age required by applicable law." },
      { p: "We do not knowingly collect personal information from children in violation of applicable law." },
      { p: "If we become aware that personal information has been collected from a child in circumstances requiring parental consent and such consent was not provided, we will take reasonable steps to delete that information." },
    ],
  },
  {
    n: 13,
    title: "Third-Party Privacy Practices",
    blocks: [
      { p: "The App may interact with third-party products, platforms, or services." },
      { p: "Their processing of information is governed by their respective privacy policies and terms. This Privacy Policy applies only to information processed under the responsibility of URA MILAS d.o.o." },
    ],
  },
  {
    n: 14,
    title: "Changes to This Privacy Policy",
    blocks: [
      { p: "We may update this Privacy Policy when necessary to reflect changes to the App, our practices, legal requirements, or services we use." },
      { p: "The updated version will indicate its applicable effective date." },
      { p: "Material changes will be communicated where required by applicable law." },
    ],
  },
  {
    n: 15,
    title: "Contact",
    blocks: [{ p: "For privacy questions, requests, or concerns:" }, CONTACT],
  },
];
