// import React from "react";
// import Consultation from "../images/Consultations.png";
// import { Link } from "react-router-dom";
// function Whyus() {
//   return (
//     <div>
//       <div className="WhyUS-ParentDiv">
//         <div className="whyUS-left">
//           <img src={Consultation} alt="" id="consultationImg" className="img-thumbnail" />
//         </div>
//         <div className="whyUS-right">
//           <h6 className="Heading">About IRG</h6>
//           <h2 className="whyUs-right-h2">Why Choose Us?</h2>
//           <p className="whyUs-right-p">
//             INNOVEX RESOURCE GROUP LIMITED Recruitment are experts in Permanent
//             and Temporary Health and Social care Recruitment. We have experience
//             in developing healthcare recruitment solutions for a wide range of
//             clients including Residential Children Homes, Learning Disability
//             provisions, Nursing and Residential Homes, Supported Living Units,
//             Private Homecare Clients, hospitals, and many more.
//           </p>

//           <div>
//             <div id="fontIcons">
//               <div className="fontIcons-parent">
//                 <div>
//                   <i class="fa-solid fa-phone"></i>
//                 </div>
//                 <div>
//                   <p id="fontIcon-content">
//                     {" "}
//                     <Link
//                       to="/contact"
//                       style={{
//                         textDecoration: "none",
//                         color: "inherit",
//                         cursor: "pointer",
//                       }}
//                     >
//                       CareNow 24/7
//                     </Link>
//                   </p>
//                 </div>
//               </div>
//               <div className="fontIcons-parent">
//                 <div>
//                   <i class="fa-solid fa-globe"></i>
//                 </div>
//                 <div>
//                   <p id="fontIcon-content">
//                     <Link
//                       to="/contact"
//                       style={{
//                         textDecoration: "none",
//                         color: "inherit",
//                         cursor: "pointer",
//                       }}
//                     >
//                       ConsultEase Online
//                     </Link>
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div id="fontIcons">
//               <div className="fontIcons-parent">
//                 <div>
//                   <i class="fa-solid fa-notes-medical"></i>
//                 </div>
//                 <div>
//                   <p id="fontIcon-content">
//                     {" "}
//                     <Link
//                       to="/contact"
//                       style={{
//                         textDecoration: "none",
//                         color: "inherit",
//                         cursor: "pointer",
//                       }}
//                     >
//                       Assist Care
//                     </Link>
//                   </p>
//                 </div>
//               </div>
//               <div className="fontIcons-parent">
//                 <div>
//                   <i class="fa-solid fa-calendar-check"></i>
//                 </div>
//                 <div>
//                   <p id="fontIcon-content">
//                     <Link
//                       to="/contact"
//                       style={{
//                         textDecoration: "none",
//                         color: "inherit",
//                         cursor: "pointer",
//                       }}
//                     >
//                       Swift Appointment
//                     </Link>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Whyus;


import React from "react";
import Consultation from "../images/Consultations.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./Whyus.css"; // Make sure your styles are there or inline as below

function Whyus() {
  return (
    <>
     <Helmet>
        <title>Why Choose Innovex Resource Group | Leading UK Healthcare Recruiters</title>
        <meta
          name="description"
          content="Discover why Innovex Resource Group is a trusted UK healthcare recruitment agency offering temporary and permanent staffing solutions for care homes, hospitals, and private clients."
        />
        <meta
          name="keywords"
          content="healthcare recruitment UK, Innovex Resource Group, care home staffing, temporary healthcare jobs, permanent healthcare recruitment"
        />
        <link
          rel="canonical"
          href="https://www.innovexresourcegroup.com/why-choose-us"
        />
      </Helmet>
    <section className="whyus-container">
      <div className="whyus-wrapper">
        <div className="whyus-image">
          <img
            src={Consultation}
            alt="Healthcare recruitment consultation"
            className="img-thumbnail"
          />
        </div>

        <div className="whyus-content">
          <h6 className="Heading">About IRG</h6>
          <h2 className="whyUs-right-h2">Why Choose Innovex Resource Group?</h2>

          <p className="whyUs-right-p">
            <strong>Innovex Resource Group Limited (IRG)</strong> is a leading{" "}
            <strong>UK healthcare recruitment agency</strong> offering{" "}
            <strong>temporary and permanent staffing</strong> for:
          </p>

          <ul className="whyUs-right-p">
            <li>Residential Children Homes</li>
            <li>Learning Disability Provisions</li>
            <li>Nursing and Residential Homes</li>
            <li>Supported Living Units</li>
            <li>Private Homecare Clients</li>
            <li>Hospitals and more</li>
          </ul>

          <div className="icon-links">
            <div className="fontIcons-parent">
              <i className="fa-solid fa-phone"></i>
              <Link to="/contact">CareNow 24/7</Link>
            </div>
            <div className="fontIcons-parent">
              <i className="fa-solid fa-globe"></i>
              <Link to="/contact">ConsultEase Online</Link>
            </div>
            <div className="fontIcons-parent">
              <i className="fa-solid fa-notes-medical"></i>
              <Link to="/contact">Assist Care</Link>
            </div>
            <div className="fontIcons-parent">
              <i className="fa-solid fa-calendar-check"></i>
              <Link to="/contact">Swift Appointment</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Whyus;
