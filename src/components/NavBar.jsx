

// import React from "react";
// import logo from "../images/innovex2.png"; // Ensure this path is correct
// import { Link as ScrollLink } from "react-scroll"; // Rename Link from react-scroll
// import { Link as RouterLink } from "react-router-dom"; // Rename Link from react-router-dom
// import { Helmet } from 'react-helmet';

// function NavBar() {
//   return (
//     <>
//     <Helmet>
//         <title>Innovex Resource Group | Expert Recruitment & Staffing UK</title>
//         <meta
//           name="description"
//           content="Innovex Resource Group offers expert recruitment and staffing solutions in the UK. Hire healthcare and other industry professionals with us."
//         />
//         <meta name="keywords" content="Recruitment UK, Staffing solutions, Healthcare jobs, Innovex" />
//         <meta name="author" content="Innovex Resource Group" />
//         <meta property="og:title" content="Innovex Resource Group | Expert Recruitment & Staffing UK" />
//         <meta property="og:description" content="Innovex Resource Group offers expert recruitment and staffing solutions in the UK." />
//         <meta property="og:image" content="/path-to-your-logo-or-image.png" />
//         <meta property="og:url" content="https://www.innovexresourcegroup.co.uk" />
//         <meta property="og:type" content="website" />
//       </Helmet>

//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
      
//       <div className="container-fluid">
//       <RouterLink to="/" className="navbar-brand">
//           <img src={logo} alt="logo" style={{ height: "60px" }} />
//         </RouterLink>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <ScrollLink
//                 to="hero"
//                 smooth={true}
//                 duration={500}
//                 className="nav-link"
//                 style={{ cursor: "pointer" }}
//               >
//                 Home
//               </ScrollLink>
//             </li>
//             <li className="nav-item">
//               <ScrollLink
//                 to="about"
//                 smooth={true}
//                 duration={500}
//                 className="nav-link"
//                 style={{ cursor: "pointer" }}
//               >
//                 About
//               </ScrollLink>
//             </li>
//             <li className="nav-item">
//               <ScrollLink
//                 to="services"
//                 smooth={true}
//                 duration={500}
//                 className="nav-link"
//                 style={{ cursor: "pointer" }}
//               >
//                 Services
//               </ScrollLink>
//             </li>
//             <li className="nav-item">
//               <ScrollLink
//                 to="process"
//                 smooth={true}
//                 duration={500}
//                 className="nav-link"
//                 style={{ cursor: "pointer" }}
//               >
//                 Our Process
//               </ScrollLink>
//             </li>
//             <li className="nav-item">
//               <RouterLink
//                 to="/contact"
//                 className="nav-link"
//                 style={{ cursor: "pointer" }}
//               >
//                 Contact
//               </RouterLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//     </>
//   );
// }

// export default NavBar;

import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import logo from "../images/innovex2.png"; 
import { Helmet } from 'react-helmet';

function NavBar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
     <Helmet>
        <title>Innovex Resource Group | Expert Recruitment & Staffing UK</title>
        <meta
          name="description"
          content="Innovex Resource Group offers expert recruitment and staffing solutions in the UK. Hire healthcare and other industry professionals with us."
        />
        <meta name="keywords" content="Recruitment UK, Staffing solutions, Healthcare jobs, Innovex" />
        <meta name="author" content="Innovex Resource Group" />
        <meta property="og:title" content="Innovex Resource Group | Expert Recruitment & Staffing UK" />
        <meta property="og:description" content="Innovex Resource Group offers expert recruitment and staffing solutions in the UK." />
        <meta property="og:image" content="/path-to-your-logo-or-image.png" />
        <meta property="og:url" content="https://www.innovexresourcegroup.co.uk" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="container-fluid">
        <RouterLink to="/" className="navbar-brand">
          <img src={logo} alt="logo" style={{ height: "60px" }} />
        </RouterLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {isHomePage ? (
              <>
                <li className="nav-item">
                  <ScrollLink
                    to="hero"
                    smooth={true}
                    duration={500}
                    className="nav-link"
                    style={{ cursor: "pointer" }}
                  >
                    Home
                  </ScrollLink>
                </li>
                <li className="nav-item">
                  <ScrollLink
                    to="about"
                    smooth={true}
                    duration={500}
                    className="nav-link"
                    style={{ cursor: "pointer" }}
                  >
                    About
                  </ScrollLink>
                </li>
                <li className="nav-item">
                  <ScrollLink
                    to="services"
                    smooth={true}
                    duration={500}
                    className="nav-link"
                    style={{ cursor: "pointer" }}
                  >
                    Services
                  </ScrollLink>
                </li>
                <li className="nav-item">
                  <ScrollLink
                    to="process"
                    smooth={true}
                    duration={500}
                    className="nav-link"
                    style={{ cursor: "pointer" }}
                  >
                    Our Process
                  </ScrollLink>
                </li>
              </>
            ) : (
              <>
                {/* Agar home page par nahi hain to scroll links ki jagah normal router links dikhayein */}
                <li className="nav-item">
                  <RouterLink to="/" className="nav-link" style={{ cursor: "pointer" }}>
                    Home
                  </RouterLink>
                </li>
                <li className="nav-item">
                  <RouterLink to="/" className="nav-link" style={{ cursor: "pointer" }}>
                    About
                  </RouterLink>
                </li>
                <li className="nav-item">
                  <RouterLink to="/" className="nav-link" style={{ cursor: "pointer" }}>
                    Services
                  </RouterLink>
                </li>
                <li className="nav-item">
                  <RouterLink to="/" className="nav-link" style={{ cursor: "pointer" }}>
                    Our Process
                  </RouterLink>
                </li>
              </>
            )}
            <li className="nav-item">
              <RouterLink to="/contact" className="nav-link" style={{ cursor: "pointer" }}>
                Contact
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
