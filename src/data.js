import logoimg from "./assets/logo.svg";
import affordable from "./assets/icon-affordable-prices.svg";
import people from "./assets/icon-people-first.svg";
import snnapy from "./assets/icon-snappy-process.svg";
import facebook from "./assets/icon-facebook.svg";
import instagram from "./assets/icon-instagram.svg";
import pintrest from "./assets/icon-pinterest.svg";
import twitter from "./assets/icon-twitter.svg";
import desktopImg from "./assets/image-intro-desktop.jpg";
import mobileImg from "./assets/image-intro-mobile.jpg";

const data = {
  logo: [logoimg],
  nav: ["how we work", "blog", "account"],
  title: [
    "Humanizing your insurance.",
    "We’re different",
    " Find out more about how we work",
  ],
  subtitle: ["Snappy Process", "Affordable Prices", "People First"],
  paragraph: [
    " Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.",
  ],
  cardParagraph: [
    "Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.",
    "We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible. ",
    "Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.",
  ],
  cardIcons: [snnapy, affordable, people],
  iconsSocials: [facebook, twitter, pintrest, instagram],
  images: [desktopImg, mobileImg],
  footer: [
    {
      title: "our company",
      links: ["how we work", "whi insure?", "view plans", "reviews"],
    },
    {
      title: "help me",
      links: ["faq", "terms of use", "privacy policy", "cookies"],
    },
    {
      title: "contact",
      links: ["sales", "support", "live chat"],
    },
    {
      title: "others",
      links: ["carrers", "press", "licenses"],
    },
  ],
};

export default data;
