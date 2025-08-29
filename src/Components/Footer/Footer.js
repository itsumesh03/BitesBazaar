// // Footer.js
// // import { FaWhatsapp } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="bg-[#0e1215] text-white ">
    //   <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    //     {/* Brand Name */}
    //     <div>
    //       <h2 className="text-2xl font-bold">The BiteBazaar</h2>
    //     </div>

//         {/* Contacts */}
//         <div>
//           <h3 className="font-semibold mb-4">CONTACTS</h3>
//           <ul className="space-y-2 text-gray-300">
//             <li>(732) 262-3141</li>
//             <li>example@gmail.com</li>
//             <li>
//               380 Birch Bark Dr <br />
//               Brick, New Jersey(NJ), 08723
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="bg-black py-4 px-6 flex items-center justify-between">
//         <p className="text-sm text-gray-400">
//           Copyright © {new Date().getFullYear()} The Bite Bazaar |{" "}
//           <span className="text-green-500">Designed by The Website Makers</span>
//         </p>
//         {/* WhatsApp floating icon */}
//         <a
//           href="https://wa.me/17322623141"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="fixed bottom-6 right-6 bg-green-500 rounded-full p-4 shadow-lg hover:bg-green-600 transition"
//         >
//           {/* <FaWhatsapp className="text-white text-2xl" /> */}
//         </a>
//       </div>
//     </footer>
//   );
// }



import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <h2>BitesBazaar</h2>
      </div>
      <div className={styles.container}>
        
        {/* Contact Section */}
        <div className={styles.contact}>
          <h3>Contact Us</h3>
          <ul>
            <li>
              <a href="tel:+918059265332">📞 +91 8059265332</a>
            </li>
            <li>
              <a href="mailto:umeshsaini060@gmail.com">📧 umeshsaini060@gmail.com</a>
            </li>
            <li>
              <a
                href="https://maps.google.com/?q=Chandigarh"
                target="_blank"
                rel="noopener noreferrer"
              >
                📍 Chandigarh, India
              </a>
            </li>
          </ul>
        </div>

        {/* Links Section */}
        <div className={styles.links}>
          <h3>Links</h3>
          <ul>
            <li>
              <a href="/terms">Terms and Conditions</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/refund">Refund and Return Policy</a>
            </li>
            <li>
              <a href="/shipping">Shipping Policy</a>
            </li>
          </ul>
        </div>
      </div>
      <p className={styles.copy}>
           Copyright © {new Date().getFullYear()} BitesBazaar
        </p>
    </footer>
  );
}
