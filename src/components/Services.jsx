import React from "react";
import { Link } from 'react-router-dom';
function Services() {
  return (
    <div id="services">
      <div className="ServicesParent" >
        <h2 className="Services-heading">Our Services</h2>
        <p className="services-p">
          Our expertise lies in creating{" "}
          <span className="services-span"> 
          healthcare recruitment</span>{" "}
          strategies for a broad spectrum of clients, such as:
        </p>
      </div>
      <div className="servicesgrid-parent">
        <div className="servicesgrid">
          <h2>
          <Link  to="/contact" style={{ 
                    textDecoration: 'none', 
                    color: 'inherit', 
                    cursor: 'pointer'
                }}>
            <div>
              {" "}
              <i class="fa-solid fa-globe" id="handi"></i>
            </div>
            
            Web Development
            </Link>
          </h2>
        </div>
        <div className="servicesgrid">
        <i class="fa-solid fa-user-nurse" id="handi"></i>
          <h2><Link  to="/contact" style={{ 
                    textDecoration: 'none', 
                    color: 'inherit', 
                    cursor: 'pointer'
                }}>
            <div></div>
            Nursing Care and Residential Facilities</Link>
          </h2>
        </div>
       
        <div className="servicesgrid">
          <div>
            {" "}
            <i class="fa-brands fa-accessible-icon" id="handi"></i>
          </div>
          <h2><Link  to="/contact" style={{ 
                    textDecoration: 'none', 
                    color: 'inherit', 
                    cursor: 'pointer'
                }}>
            Learning Disability Care Programs
            </Link></h2>
        </div>
      </div>
      <div className="servicesgrid-parent">
        <div className="servicesgrid">
          <h2>
          <Link  to="/contact" style={{ 
                    textDecoration: 'none', 
                    color: 'inherit', 
                    cursor: 'pointer'
                }}>
            <div>
              {" "}
              <i class="fa-regular fa-life-ring" id="handi"></i>
            </div>
            Assisted Living Units
</Link>
          </h2>
        </div>
        <div className="servicesgrid">
          <i class="fa-solid fa-house-circle-check" id="handi"></i>
          <h2>
          <Link  to="/contact" style={{ 
                    textDecoration: 'none', 
                    color: 'inherit', 
                    cursor: 'pointer'
                }}>
            <div></div>
            Residential Care for Children
          </Link>
          </h2>
        </div>
        <div className="servicesgrid">
          <div>
            {" "}
            <i class="fa-regular fa-hospital" id="handi"></i>
          </div>
          <h2>
          <Link  to="/contact" style={{ 
                    textDecoration: 'none', 
                    color: 'inherit', 
                    cursor: 'pointer'
                }}>
            Medical Institutions
            </Link>
            </h2>
        </div>
      </div>
    </div>
  );
}
export default Services;
