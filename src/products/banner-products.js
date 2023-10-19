import frontFace1 from "/src/images/House-front/1.jpg";
import frontFace2 from "/src/images/House-front/2.jpg";
import frontFace3 from "/src/images/House-front/3.jpg";
import frontFace4 from "/src/images/House-front/4.jpg";
import frontFace5 from "/src/images/House-front/5.jpg";
import frontFace6 from "/src/images/House-front/6.jpg";

import fullHouse1 from "/src/images/House-full/2.jpg";
import fullHouse2 from "/src/images/House-full/3.jpg";
import fullHouse3 from "/src/images/House-full/4.jpg";
import fullHouse4 from "/src/images/House-full/5.jpg";

import acc1 from "/src/images/accessoryImages/cardHolder/acc1.png";
import acc2 from "/src/images/accessoryImages/cardHolder/acc2.png";
import acc3 from "/src/images/accessoryImages/cardHolder/acc3.png";
import acc4 from "/src/images/accessoryImages/cardHolder/acc4.png";
import acc5 from "/src/images/accessoryImages/cardHolder/acc5.png";

import acc6 from "/src/images/accessoryImages/keychain/acc1.png";
import acc7 from "/src/images/accessoryImages/keychain/acc2.png";
import acc8 from "/src/images/accessoryImages/keychain/acc3.png";
import acc9 from "/src/images/accessoryImages/keychain/acc4.png";
import acc10 from "/src/images/accessoryImages/keychain/acc5.png";

import logo from "/src/images/logo.png";

const orderPlacement = [
  "HOW TO PLACE AN ORDER",
  "1. Select the product variation that you are purchasing.",
  "2. Upload your photo through the provided link or email address. Please make sure to follow any photo guidelines to ensure the best quality print.",
  "3. To personalize your house with text underneath 100-character limit.",
];

const orderProcessing = [
  "HOW YOUR ORDER IS PROCESSED",
  "1. Upload images of the house (see below for the guidelines).",
  "2. We'll review your photos and reach out to you if it's not sufficient for modeling. We may ask for a higher-quality photo or suggest an alternative image/angles that will work better.",
  "3. Once we've received a suitable image, we'll produce a rendering of how the finished product will come out for you to approve.",
  "4. Once the rendering is approved we will begin production of the final product to ship to you. This process typically takes several days to weeks, so be sure to check the estimated delivery date provided when you place the order.",
];

const photoGuidelines = [
  "1. Choose a high-resolution photo of all important angles.",
  "2. Ensure the subject is centered and in focus.",
];

const howToUploadPhoto = [
  "1. You can upload it through our Google form https://forms.gle/YVNVY2w3wCk7m8gD6",
  "2. You can also send us the photos by email (print3Dverse@gmail.com)",
  "3. Use the upload to the following link: https://www.print3dverse.com/upload-image",
];

const returnPolicy = [
  "RETURN POLICY",
  "Our custom houses are personalized to your preferences, so unfortunately, we are unable to accept returns or offer refunds. However, if there is a production defect, please contact us and we'll be happy to provide a free replacement.",
];

export const fullDetailedDetails = [
  orderPlacement,
  orderProcessing,
  photoGuidelines,
  howToUploadPhoto,
  returnPolicy,
];

export const bannerProducts = [
  {
    name: "3D Printed Replica of Your House - Front Facade",
    price: 75,
    shortDetails: [
      "This product is solely the front facade of your house. If you would like your full house printed please see our product named 3D Printed Your House - Full House!",
      "After purchasing, you will be redirected to link where you can include any images and personalizations you would like",
    ],
    details: [
      "This is a 3D Printed Custom House model service.",
      "This product is solely the front facade of your house. If you would like your full house printed please see our product named 3D Printed Your House - Full House!",
      "After purchasing, you will be redirected to link where you can include any images and personalizations you would like",
      "Calling all HOME OWNERS, REALTORS, AND LOAN OFFICERS.",
      "This is the perfect opportunity to gift a 3D-printed version of a house just sold or bought. This unique gift will help you stand out from your competition and which makes you more likely to attract and retain customers.",
      "PRODUCT SPECIFICS",
      "- Model size varies. 10in. maximum in all directions. (If you would like something larger, please contact us for a quote)",
      "- This is a completely custom service, so you are paying for modeling of the structure, printing, regular updates, and excellent communication.",
      "- The printed houses are in color. However, colors are limited. We will send you the renderings of the house with the exact tone of colors that will be used. You can approve the colors at this step in the process.",
    ],
    images: [
      frontFace1,
      frontFace2,
      frontFace3,
      frontFace4,
      frontFace5,
      frontFace6,
    ],
    desc: "3D Printed Custom House (Front Facade) model service",
    quantity: 1,
    id: 1,
    type: "front facade rendering",
    learnMoreLink: "/front-facade",
  },
  {
    name: "3D Printed Custom House",
    price: 250,
    shortDetails: [
      "This is a 3D Printed Custom House model service. Model size varies. 10in maximum in all directions.",
      "After purchasing, you will be redirected to link where you can include any images and personalizations you would like",
      "If the model includes a higher level of detail, we will message you a quote with a final price. Prices vary from $250 - $350.",
    ],
    details: [
      "This is a 3D Printed Custom House model service.",
      "FULL 3D-PRINTED REPLICA OF YOUR HOUSE - this product is for the entirety of the shell of your house.",
      "Calling all HOME OWNERS, REALTORS, AND LOAN OFFICERS.",
      "This is the perfect opportunity to gift a 3D-printed version of a house just sold or bought. This unique gift will help you stand out from your competition and which makes you more likely to attract and retain customers.",
      "PRODUCT SPECIFICS",
      "- Model size varies. 10in. maximum in all directions. (If you would like something larger, please contact us for a quote)",
      "- If the model includes a higher level of detail, we will message you a quote with a final price. Prices vary from $250 - $350.",
      "- This is a completely custom service, so you are paying for modeling of the structure, printing, regular updates, and excellent communication.",
      "- The printed houses are in color. However, colors are limited. We will send you the renderings of the house with the exact tone of colors that will be used. You can approve the colors at this step in the process.",
    ],
    images: [fullHouse1, fullHouse2, fullHouse3, fullHouse4],
    desc: "3D Printed Custom House (full) model service",
    quantity: 1,
    id: 2,
    type: "full house rendering",
    learnMoreLink: "/full-house",
  },
  {
    name: "3D Printed Business Card Holder - With your Logo",
    price: 15,
    shortDetails: [
      "1. Please specify in the personalization section which Primary Color (base) you would like!",
      "2. After purchasing, you will be redirected to link where you can include any images and personalizations you would like and we will send you the mock-up of the design to confirm your approval.",
    ],
    details: [
      "Personalize your Business card holder.",
      "Customizing is simple!",
      "1. Please specify in the personalization section which Primary Color (base) you would like!",
      "2a. After purchasing, you will be redirected to link where you can include any images and personalizations you would like and we will send you the mock-up of the design to confirm your approval.",
      "2b. Alternatively, email us (print3Dverse@gmail.com) with the personalization/logo you want and we will send you the mock-up of the design to confirm your approval.",
      "Holds about 25 business cards.",
      "2 piece stand, PLA Material, 4in x 5in x 2in",
      "Lead time for custom orders is around 7-10 days for manufacturing",
      "Plastic has natural imperfections",
    ],
    images: [acc1, acc2, acc3, acc4, acc5],
    desc: "Your Personalized Business Card holder",
    quantity: 1,
    id: 3,
    type: "accessory",
    learnMoreLink: "/accessories",
  },
  {
    name: "Unique Custom Signature Keychain - With your Logo",
    price: 10,
    shortDetails: [
      "Custom Keychains are small, circular accessories made from a durable piece that is commonly used to hold keys.",
      "Unique Backpack Keychain is a popular item due to its simplicity and versatility, and Aesthetic Safety Keychain can be used for personal use or given to your friends.",
    ],
    details: [
      "Custom Keychains are small, circular accessories made from a durable piece that is commonly used to hold keys.",
      "Unique Backpack Keychain is a popular item due to its simplicity and versatility, and Aesthetic Safety Keychain can be used for personal use or given to your friends.",
      "Custom Keychains with a message, date, name or coordinate for a gift that is both sweet and practical.",
      "Personalize Keychain, it is sure to be a special charm they will treasure for many moments to come. Double-sided engravings are also available for double the sweet sentiments.",
      "Send these out as giveaways to your subscribers/customers to show off and advertise your brand. It's like a walking advertisement! Or just gain style points walking around with your logo on your keychain or backpack! Our design team will work with you to come up with the perfect unique design that you want to show off!",
      "This Custom Keychains is designed exactly how you want it!",
      "Material: PLA (Polylactic acid)",
      "Size: Typically 1.5in. x 1.5in. (varies on customization)",
      "After placing your order:",
      "- Send us your logo and we will send you a mock-up of how the keychains will come out.",
      "- You comment or approve the rendering",
      "- We go into production and ship out ASAP!",
    ],
    images: [acc6, acc7, acc8, acc9, acc10],
    desc: "Your Personalized Keychain",
    quantity: 1,
    id: 4,
    type: "accessory",
    learnMoreLink: "/accessories",
  },
  {
    name: "Custom 3D Creation!",
    price: 1,
    shortDetails: [
      "This is a listing for custom orders only. Choosing this option will be set between buyer and seller for details.",
      "Once we agree on your request you will receive the design via email within 24 hours.",
      "Please DO NOT purchase unless your request was already approved by me, thank you.",
    ],
    details: [
      "This is a listing for custom orders only. Choosing this option will be set between buyer and seller for details.",
      "Once we agree on your request you will receive the design via email within 24 hours.",
      "Please DO NOT purchase unless your request was already approved by me, thank you.",
      "PLEASE NOTE",
      "This is a digital file, NO printed materials will be mailed or shipped to your address.",
      "Refunds cannot be provided after the delivery of digital images due to the nature of the product.",
      "This printable is for PERSONAL USE ONLY. Under no circumstances can these files be resold, altered, or given away. By purchasing this listing you agree to our Terms of Use.",
    ],
    images: [logo],
    desc: "Custom 3D Creation!",
    quantity: 1,
    id: 5,
    type: "Custom Listing",
    learnMoreLink: "/contact-us",
  },
];
