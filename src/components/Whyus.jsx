import React from "react";
import Consultation from "../images/Consultations.png";
import { Link } from "react-router-dom";
function Whyus() {
  return (
    <div>
      <div className="WhyUS-ParentDiv">
        <div className="whyUS-left">
          <img src={Consultation} alt="" id="consultationImg" className="img-thumbnail" />
        </div>
        <div className="whyUS-right">
          <h6 className="Heading">About IRG</h6>
          <h2 className="whyUs-right-h2">Why Choose Us?</h2>
          <p className="whyUs-right-p">
            INNOVEX RESOURCE GROUP LIMITED Recruitment are experts in Permanent
            and Temporary Health and Social care Recruitment. We have experience
            in developing healthcare recruitment solutions for a wide range of
            clients including Residential Children Homes, Learning Disability
            provisions, Nursing and Residential Homes, Supported Living Units,
            Private Homecare Clients, hospitals, and many more.
          </p>

          <div>
            <div id="fontIcons">
              <div className="fontIcons-parent">
                <div>
                  <i class="fa-solid fa-phone"></i>
                </div>
                <div>
                  <p id="fontIcon-content">
                    {" "}
                    <Link
                      to="/contact"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        cursor: "pointer",
                      }}
                    >
                      CareNow 24/7
                    </Link>
                  </p>
                </div>
              </div>
              <div className="fontIcons-parent">
                <div>
                  <i class="fa-solid fa-globe"></i>
                </div>
                <div>
                  <p id="fontIcon-content">
                    <Link
                      to="/contact"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        cursor: "pointer",
                      }}
                    >
                      ConsultEase Online
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div id="fontIcons">
              <div className="fontIcons-parent">
                <div>
                  <i class="fa-solid fa-notes-medical"></i>
                </div>
                <div>
                  <p id="fontIcon-content">
                    {" "}
                    <Link
                      to="/contact"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        cursor: "pointer",
                      }}
                    >
                      Assist Care
                    </Link>
                  </p>
                </div>
              </div>
              <div className="fontIcons-parent">
                <div>
                  <i class="fa-solid fa-calendar-check"></i>
                </div>
                <div>
                  <p id="fontIcon-content">
                    <Link
                      to="/contact"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        cursor: "pointer",
                      }}
                    >
                      Swift Appointment
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Whyus;
