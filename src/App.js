// import './App.css';
// import NavBar from './components/NavBar';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HeroImg from './components/HeroImg';

// import Whyus from './components/Whyus';
// import Services from './components/Services';
// import OurProcess from './components/OurProcess';
// import TempRec from './components/TempRec';
// import Footer from './components/Footer';
// import ContactForm from './components/ContactForm';
// import NotFound from './components/NotFound';

// import { Helmet, HelmetProvider } from 'react-helmet-async';

// function App() {
//   return (
//     <HelmetProvider>
//       <Router>
//         <div className="App">
//         <Helmet>
//   <title>UK Healthcare & Recruitment Agency | Innovex Resource Group</title>
//   <meta 
//     name="description" 
//     content="Innovex Resource Group is a UK-based recruitment agency providing skilled staff for care homes, hospitals, and all sectors. Ready to fulfill your hiring needs swiftly and professionally." 
//   />
//   <meta name="robots" content="index, follow" />
  
//   {/* OpenGraph */}
//   <meta property="og:title" content="UK Healthcare & Recruitment Agency | Innovex Resource Group" />
//   <meta property="og:description" content="Innovex Resource Group is a UK-based recruitment agency..." />
//   <meta property="og:type" content="website" />
//   <meta property="og:url" content="https://innovexresourcegroup.co.uk/" />
//   <meta property="og:image" content="https://innovexresourcegroup.co.uk/images/logo.png" />
//   <meta property="og:image:alt" content="Innovex Resource Group Logo" />
  
//   {/* Twitter */}
//   <meta name="twitter:card" content="summary_large_image" />
//   <meta name="twitter:title" content="UK Healthcare & Recruitment Agency | Innovex Resource Group" />
//   <meta name="twitter:description" content="Innovex Resource Group is a UK-based recruitment agency..." />
//   <meta name="twitter:image" content="https://innovexresourcegroup.co.uk/images/logo.png" />
// </Helmet>
          
//           <NavBar />
//           <Routes>
//             <Route path="/" element={
//               <>
//                 <div id="hero"><HeroImg /></div>
//                 <div id="about"><Whyus /></div>
//                 <div id="services"><Services /></div>
//                 <div id="process"><OurProcess /></div>
//                 <div><TempRec /></div>
//                 <div><Footer /></div>
//               </>
//             } />
//             <Route path="/contact" element={<ContactForm />} />
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </div>
//       </Router>
//     </HelmetProvider>
//   );
// }

// export default App;

import React, { Suspense } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const HeroImg = React.lazy(() => import('./components/HeroImg'));
const Whyus = React.lazy(() => import('./components/Whyus'));
const Services = React.lazy(() => import('./components/Services'));
const OurProcess = React.lazy(() => import('./components/OurProcess'));
const TempRec = React.lazy(() => import('./components/TempRec'));
const Footer = React.lazy(() => import('./components/Footer'));
const ContactForm = React.lazy(() => import('./components/ContactForm'));
const NotFound = React.lazy(() => import('./components/NotFound'));

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <NavBar />
          <Suspense fallback={<div className="loading-spinner">Loading content, please wait...</div>}>
            <Routes>
              {/* Home Page */}
              <Route path="/" element={
                <>
                  <Helmet>
                    <title>Healthcare Recruitment Agency UK | Hire Nurses & Carers | Innovex Resource Group</title>
                    <meta name="description" content="Innovex - UK's fastest growing healthcare recruitment agency. Hire nurses, carers & hospital staff quickly and efficiently." />
                    <meta name="keywords" content="healthcare recruitment UK, nursing jobs UK, care home staffing agency, temporary healthcare recruitment, NHS staffing solutions" />
                    <meta name="robots" content="index, follow" />
                    <meta property="og:title" content="Healthcare Recruitment Agency UK | Innovex Resource Group" />
                    <meta property="og:description" content="24/7 staffing solutions for care homes & NHS trusts. Hire qualified nurses & carers." />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://innovexresourcegroup.co.uk/" />
                    <meta property="og:image" content="https://innovexresourcegroup.co.uk/images/logo.png" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="Healthcare Recruitment Agency UK | Innovex Resource Group" />
                    <meta name="twitter:description" content="24/7 staffing solutions for care homes & NHS trusts." />
                    <meta name="twitter:image" content="https://innovexresourcegroup.co.uk/images/logo.png" />
                  </Helmet>
                  <div id="hero"><HeroImg /></div>
                  <div id="about"><Whyus /></div>
                  <div id="services"><Services /></div>
                  <div id="process"><OurProcess /></div>
                  <div><TempRec /></div>
                  <Footer />
                </>
              } />

              {/* Contact Page */}
              <Route path="/contact" element={
                <>
                  <Helmet>
                    <title>Contact Us | Healthcare Staffing Solutions UK | Innovex Resource Group</title>
                    <meta name="description" content="Get in touch with Innovex Resource Group for expert healthcare staffing solutions in the UK." />
                    <meta name="keywords" content="contact healthcare recruitment, staffing solutions UK, healthcare agency contact" />
                    <meta name="robots" content="index, follow" />
                    <meta property="og:title" content="Contact Healthcare Staffing Solutions | Innovex Resource Group" />
                    <meta property="og:description" content="Reach out to Innovex for trusted healthcare staffing and recruitment services." />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://innovexresourcegroup.co.uk/contact" />
                    <meta property="og:image" content="https://innovexresourcegroup.co.uk/images/logo.png" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="Contact Healthcare Staffing Solutions | Innovex Resource Group" />
                    <meta name="twitter:description" content="Reach out to Innovex for trusted healthcare staffing and recruitment services." />
                    <meta name="twitter:image" content="https://innovexresourcegroup.co.uk/images/logo.png" />
                  </Helmet>
                  <ContactForm />
                  <Footer />
                </>
              } />

              {/* 404 Page */}
              <Route path="*" element={
                <>
                  <Helmet>
                    <title>Page Not Found | Innovex Resource Group</title>
                    <meta name="robots" content="noindex, nofollow" />
                  </Helmet>
                  <NotFound />
                </>
              } />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
