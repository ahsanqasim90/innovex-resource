// import React from 'react';
// import VIDEO1 from '../images/VIDEO1.png'; // Ensure correct file extension
// import VIDEO2 from '../images/VIDEO2.png'; // Ensure correct file extension


// function HeroImg() {
//   return (
//     <div>
//       <div 
//         id="carouselExampleSlidesOnly" 
//         className="carousel slide" 
//         data-ride="carousel" 
//         data-interval="1000" // Change slide every 1 second
//       >
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img className="d-block w-100" src={VIDEO1} alt="Slide 1" />
//           </div>
//           <div className="carousel-item">
//             <img className="d-block w-100" src={VIDEO2} alt="Slide 2" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HeroImg;


import React from 'react';
import { Helmet } from 'react-helmet';  // Helmet import karo
import VIDEO1 from '../images/VIDEO1.png';
import VIDEO2 from '../images/VIDEO2.png';

function HeroImg() {
  return (
    <>
      <Helmet>
        <title>Innovex Resource Group | Expert Recruitment & Staffing UK</title>
        <meta name="description" content="Innovex Resource Group offers expert recruitment and staffing solutions in the UK. Hire healthcare and other industry professionals with us." />
        <meta name="keywords" content="Recruitment UK, Staffing solutions, Healthcare jobs, Innovex" />
        <meta name="author" content="Innovex Resource Group" />
        {/* Open Graph tags for social media sharing */}
        <meta property="og:title" content="Innovex Resource Group | Expert Recruitment & Staffing UK" />
        <meta property="og:description" content="Innovex Resource Group offers expert recruitment and staffing solutions in the UK. Hire healthcare and other industry professionals with us." />
        <meta property="og:image" content="/path-to-your-logo-or-image.png" /> {/* replace with actual image path */}
        <meta property="og:url" content="https://www.innovexresourcegroup.co.uk" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div>
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="1000"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={VIDEO1} alt="Innovex Recruitment Slide 1" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={VIDEO2} alt="Innovex Recruitment Slide 2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroImg;
