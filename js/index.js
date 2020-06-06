const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// NAV-BAR-SECTION
const navBarArea = document.querySelector("div.container header nav");
const navItemFirst = document.createElement("a");
const navItemLast = document.createElement("a");

//appendchild and prepend
navItemFirst.href = "#";
navItemLast.href = "#";
navItemFirst.textContent = "firstItem";
navItemLast.textContent = "lastItem";

navBarArea.prepend(navItemFirst);
navBarArea.appendChild(navItemLast);
const navBar = navBarArea.querySelectorAll("a");
// adding the nav items onto the nav bar

navBar.forEach((element, i) => {
  if (i !== 0 && i !== 7)
    element.textContent = siteContent.nav[`nav-item-${i}`];
  element.style.color = "green";
});

// for (let i = 0; i < navBar.length; i++) {
//   navBar[i].style.color = "green";
//   navBar[i].textContent = siteContent.nav[`nav-item-${i + 1}`];
// }

//  TOP-SECTION

// How I select the Nodes/tags
const title = document.querySelector(".cta-text h1");
const codeSnip = document.getElementById("cta-img");
const button = document.querySelector("button");

button.textContent = "Get Started";

// How I add the attributes
codeSnip.setAttribute("src", "img/header-img.png");

//how to insert text
title.innerHTML = "DOM <br/> IS <br/> AWESOME";

// MID-SECTION

const midImg = document.getElementById("middle-img");
const midFeatTitle = document.querySelectorAll(".text-content h4");
const midFeatInfo = document.querySelectorAll(".text-content p");

// titles
midFeatTitle[0].textContent = siteContent["main-content"]["features-h4"];
midFeatTitle[1].textContent = siteContent["main-content"]["about-h4"];
midFeatTitle[2].textContent = siteContent["main-content"]["services-h4"];
midFeatTitle[3].textContent = siteContent["main-content"]["product-h4"];
midFeatTitle[4].textContent = siteContent["main-content"]["vision-h4"];

//info
midFeatInfo[0].textContent = siteContent["main-content"]["features-content"];
midFeatInfo[1].textContent = siteContent["main-content"]["about-content"];
midFeatInfo[2].textContent = siteContent["main-content"]["services-content"];
midFeatInfo[3].textContent = siteContent["main-content"]["product-content"];
midFeatInfo[4].textContent = siteContent["main-content"]["vision-content"];

midImg.setAttribute("src", "img/mid-page-accent.jpg");

// FOOTER-SECTION

//had to be specific so that i can get the css to work
const contactSectionTitle = document.querySelector("section.contact h4");
const contactSectionInfo = document.querySelectorAll(".contact p");

contactSectionTitle.textContent = siteContent.contact["contact-h4"];

contactSectionInfo[0].innerHTML = "123 Way 456 Street <br/> Somewhere, USA";
contactSectionInfo[1].textContent = siteContent.contact["phone"];
contactSectionInfo[2].textContent = siteContent.contact["email"];

const copyRight = document.querySelector("footer p");

// Adding text straight from an object
copyRight.textContent = siteContent.footer.copyright;
