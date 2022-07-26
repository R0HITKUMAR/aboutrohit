// Sequence
// 1. Rohit Kumar Portfolio
// 2. Verify TECHWAMP
// 3. NSS Club
// 4. My AKTU Guide
// 5. PSG Electricals
// 6. Portfolios
// 7. Monuments of India

import R1 from "./report/Report-RKP.pdf";
import R2 from "./report/Report-VerifyTechwamp.pdf";
import R3 from "./report/Report-NSS.pdf";
import R4 from "./report/Report-MyAKTUGuide.pdf";
import R5 from "./report/Report-PSG.pdf";
import R6 from "./report/Report-Portfolios.pdf";
import R7 from "./report/Report-Monumentsofindia.pdf";

import V1 from "./view/view-RKP.png";
import V2 from "./view/view-VerifyTechwamp.png";
import V3 from "./view/view-NSS.png";
import V4 from "./view/view-MyAKTUGuide.png";
import V5 from "./view/view-PSG.png";
import V6 from "./view/view-Portfolios.png";
import V7 from "./view/view-Monumentsofindia.png";

const data = [
  {
    id:0,
    title:'Decentralized E Voting using Block Chain',
    technology:'Blockchain & Cyber Security',
    domain:"Web Development",
    img:"https://media.istockphoto.com/vectors/coming-soon-isolated-vector-icon-paper-style-promotion-sign-start-a-vector-id1273109788?k=20&m=1273109788&s=612x612&w=0&h=JStiZA3z_OG2FmCz5ZlV4axsxGWIy6-LrdOVTuZsyKg=",
    domain:'Web Development',
    duration:'Jan 2022 -  Present'
  },
  {
    id: 1,
    title: "Rohit Kumar Portfolio Website and Admin Dashboard",
    technology:
      "HTML, CSS, Bootstrap, JS, jQuery, ReactJS, Firebase Auth, Firebase Realtime Database, Firebase Storage etc",
    img: V1,
    domain: "Web Development",
    duration: "Jan 2020 - Present",
    learn1: "Learn about ReactJS, Hooks and Virtual DOM",
    learn2: "Setting up Firebase in ReactJS App by doing CRUD Operation",
    learn3: "Enable Hosting of ReactJS Website using Firebase Hosting",
    learn4: "Learning about Management DataBase in Firebase",
    des1: "The Portfolio Website that shows details about Me, My Work, My Skills, My Projects and My Certifications",
    des2: "Enable user interaction through Contact Forms",
    des3: "Data Addition and Management using Admin Login",
    report: R1,
    buttons: [
      { name: "Live Demo", url: "https://rohitkumar.ml" },
      { name: "Admin Login", url: "https://admin.rohitkumar.ml" },
      { name: "V3", url: "https://v3.rohitkumar.ml" },
      { name: "V2", url: "https://v2.rohitkumar.ml" },
      { name: "V1", url: "https://v1.rohitkumar.ml" },
    ],
  },
  {
    id: 2,
    title:
      "Verify TECHWAMP : Certificates Verification, Generation & Cloud Drive (CStore)",
    technology: "HTML, CSS, JS, Bootstrap, jQuery, Firebase etc",
    img: V2,
    domain: "Web Development",
    duration: "Jan 2022 - June 2022",
    learn1:
      "Learn about Firebase Database, Authentication, Cloud Storage and Hosting etc",
    learn2:
      "Learn About how to generate PDF using PDFLib and how to use it in your application",
    learn3: "Learn using various APIs like QR Code API etc",
    learn4:
      "Learn about setting user and Admin interaction with the help of Tickets etc",
    des1: "Verify TECHWAMP is a web based application that allows Admin to Generate Certificates, Manage Certificates and User to Verify, Download, Issue Ticket and Upload their Own Certificates.",
    des2: "Unique Link for Each Certificate as well as Unique User Profile Link.",
    des3: "Won 1st Prize in Innovate Infinity - Project Day organized by Dept. of Computer Science & Engg. (ABESEC) on this Project.",
    report: R2,
    buttons: [
      {
        name: "Live Demo",
        url: "https://verifytechwamp.ml",
      },
      {
        name: "Version 1",
        url: "https://v1.verifytechwamp.ml",
      },
    ],
  },
  {
    id: 3,
    title: "NSS Club (ABESEC) Official Website & Admin Portal",
    technology:
      "HTML, CSS, Bootstrap, JS, jQuery, Firebase Auth, Firebase Realtime Database, Firebase Storage etc",
    img: V3,
    domain: "Web Development",
    duration: "Nov 2021 - Feb 2022",
    learn1:
      "Learn about SMTP Mailer, Firebase Auth, Firebase Realtime Database etc",
    learn2: "Learn to Handle Bulk of Data",
    learn3:
      "Learn about using DataTables for Data Management, Sorting, Extraction and Pagination etc",
    learn4: "Learn how to use Rebrandly API for Shortening URLs",
    des1: "Official Website of NSS Club (ABES Engineering College) developed using HTML CSS Javascript and Bootstrap that Provides information about NSS ABESEC its Events Team etc",
    des2: "dmin Portal with Tools like Forms Data, Link Shortner, Mail Generation and Query Section.",
    des3: "Developed KalaKriti : 2K22 Portal  (Digital Poster Making Competion organized by NSS Club (ABES Engineering College) This Portal includes Registration, Management, Poster Uplodation and With Email Generation etc..) & Blood Donation Registration Portal",
    report: R3,
    buttons: [
      {
        name: "Live Demo",
        url: "https://nssabesec.in",
      },
      {
        name: "Admin",
        url: "https://admin.nssabesec.in",
      },
      {
        name: "KalaKriti 2K22",
        url: "https://kalakriti.nssabesec.in",
      },
    ],
  },
  {
    id: 4,
    title: "My AKTU Guide : An Educational Website for AKTU CSE Students",
    technology:
      "HTML, CSS, Bootstrap, JS, jQuery, Google API and Google Sheets",
    img: V4,
    domain: "Web Development",
    duration: "Feb 2020 - Dec 2021",
    learn1: "Learn how to Host website on Firebase using Firebase Hosting",
    learn2: "Learn to use DNS Management for Domains",
    learn3: "Learn to use Google Sheets for Data Management using Scripts",
    learn4: "Learn to implement Popup Modal using JS",
    des1: "An Educational Website that Provides Access to Notes, Latest Updates, Important Information and provided all assistance.",
    des2: "Latest Circulars using Inbuild Form that Stores data in Google Sheets",
    des3: "Proper Live Notes facilities using Adobe Scan and Adobe Acrobat Reader and Google Drive for storing Notes",
    report: R4,
    buttons: [
      { name: "Live Demo", url: "https://myaktuguide.ml" },
      { name: "v2", url: "https://v2.myaktuguide.ml" },
      { name: "v1", url: "https://v1.myaktuguide.ml" },
    ],
  },
  {
    id: 5,
    title: "PSG Electricals Pvt. Ltd. Website & Admin Dashboard",
    technology:
      "HTML, CSS, Bootstrap, JS, jQuery, ReactJS, Firebase Auth, Firebase Realtime Database, Firebase Storage etc",
    img: V5,
    domain: "Web Development",
    duration: "April 2022 - May 2022",
    learn1: "Learn to build an Industry Ready Application",
    learn2: "Learn to show query stepwise Resolution",
    learn3: "Learn to generate Reports with Bar Code using Data from Database",
    learn4: "Learn to use Adobe Reader API for Web",
    des1: "A Website that provides details about Products, Services, Contact Us, About Us, Gallery etc.",
    des2: "Admin Dashboard with Features like Data Management, Tracking, Reports, etc.",
    des3: "Complaint Resolution System to resolve Complaints using Inbuild Form",
    report: R5,
    buttons: [
      { name: "Live Demo", url: "https://psgelectricals.com" },
      { name: "Admin", url: "https://app.psgelectricals.com" },
    ],
  },
  {
    id: 6,
    title: "Portfolios Website of Many Peoples",
    technology:
      "HTML, CSS, Bootstrap, JS, jQuery, ReactJS, Firebase Auth, Firebase Realtime Database, Firebase Storage etc",
    img: V6,
    domain: "Web Development",
    duration: "Throught B.Tech",
    learn1: "Learn to create Responsive Website",
    learn2: "Learn using G Sheets",
    learn3: "Learn to use JavaScript DOM",
    learn4: "Learn using JS",
    des1: "Portfolio Website of Many Peoples that shows details about them with Resume, Projects, Skills, etc.",
    des2: "Data management using G Sheets and Database",
    des3: "With Proper Popup Modal using JS",
    report: R6,
    buttons: [
      { name: "Nishant Kumar", url: "https://aboutnishant.ml" },
      { name: "Nishu Kumar", url: "https://nkumar.ml" },
      { name: "Nayan Kumar", url: "https://aboutnayan.ml" },
      { name: "Priyanshu Kashyap", url: "https://priyanshukashyap.ml" },
    ],
  },
  {
    id: 7,
    title: "Monuments of India : A Travel Website",
    technology: "HTML, CSS & JavaScript",
    img: V7,
    domain: "Web Development",
    duration: "Dec 2019 - Jan 2020",
    learn1: "Learn about HTML, CSS & JavaScript",
    learn2: "Learn about Version Control Git & Github",
    learn3: "Learn about How to Host website on Github Pages",
    learn4: "Learn about Iframes tags",
    des1: "A Website that provides details about Top 10 Monuments of India and their Images",
    des2: "Each monuments with their details, 3D View, Map and Images",
    des3: "Reference Links of Each Monuments",
    report: R7,
    buttons: [
      {
        name: "Live Demo",
        url: "https://monumentsofindia.ml",
      },
    ],
  },
];

export default data;
