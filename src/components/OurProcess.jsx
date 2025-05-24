import React from 'react'
import Process from '../images/Process.png';
import webDev from '../images/development.png'
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";


function OurProcess(){
    return(
        <div>
        <div className='ProcessParent'>
        <Helmet>
        <title>Our Recruitment & Web Development Process | Innovex Resource Group</title>
        <meta name="description" content="Learn how Innovex Resource Group simplifies healthcare recruitment and web development. Trusted UK staffing and development agency." />
        <meta name="keywords" content="healthcare recruitment process UK, web development UK, care home staffing, nurse hiring process, software solutions" />
        <link rel="canonical" href="https://www.innovexresourcegroup.com/our-process" />
        <meta property="og:title" content="Our Process - Innovex Resource Group" />
        <meta property="og:description" content="Explore our step-by-step recruitment and web development processes designed to deliver quality and ease to clients across the UK." />
        <meta property="og:image" content="https://www.innovexresourcegroup.com/images/og-banner.png" />
        <meta property="og:url" content="https://www.innovexresourcegroup.com/our-process" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

<div className='ourProcess-left'>
    <h6 className='Heading'>Our Process</h6>
    <h2 className='ourProcessHeading'>Easy Guide to Securing Home Care Services</h2>
<p className='ourprocess-p'> <span className='services-span'>INNOVEX RESOURCE GROUP LIMITED</span> prides itself on its unwavering commitment to integrity and excellence, offering superior service to our clients and candidates alike, and establishing ourselves as a reliable enrollment agency.</p>

<div className='appointment-process-parent'>
    <div className='Appointment-process'>
       <i class="fa-solid fa-calendar-days" id="handi2"></i>
      <span id='access1'><Link  to="/contact" style={{ 
                    textDecoration: 'none', 
                    color: 'inherit', 
                    cursor: 'pointer'
                }}>Schedule Your Appointment</Link></span>
    </div>
    <div className='Appointment-process'>
    <i class="fa-regular fa-calendar-days" id="handi2"></i>
        <span id='access2'><Link  to="/contact" style={{ 
                    textDecoration: 'none', 
                    color: 'inherit', 
                    cursor: 'pointer'
                }}>Access Your Schedule</Link></span>
    </div>
    <div className='Appointment-process'>
    <i class="fa-solid fa-user-nurse" id="handi2"></i>
    <span id='access3'><Link  to="/contact" style={{ 
                    textDecoration: 'none', 
                    color: 'inherit', 
                    cursor: 'pointer'
                }}>Consult with Our Nurses</Link></span>
    </div>
    <div className='Appointment-process'>
    <i class="fa-solid fa-house" id="handi2"></i>
   <span id='access4'><Link   to="/contact" style={{ 
                    textDecoration: 'none', 
                    color: 'inherit', 
                    cursor: 'pointer'
                }} >Experience Exceptional Home Care</Link></span> 
    </div>
</div>
</div>


<div className='ourProcess-right'><img src={Process} alt="" id='processImg'/></div>
        </div>

        <div className='ProcessParent'>



<div className='ourProcess-right'><img src={webDev} alt="" id='devImg'/></div>
<div className='webDevProcess'>
    <h6 className='Heading'>Our Process</h6>
    <h2 className='ourProcessHeading'>Simple Steps to Obtain Web Development Solutions</h2>
<p className='ourprocess-p'> <span className='services-span'>INNOVEX RESOURCE GROUP LIMITED</span> prides itself on its unwavering dedication to innovation and quality in web development, delivering exceptional service to our clients and ensuring top-notch solutions, and establishing ourselves as a trusted partner in the industry.</p>

<div className='appointment-process-parent'>
    <div className='Appointment-process'>
       <i class="fa-solid fa-calendar-days" id="handi2"></i>
      <span id='webProcessIcon'><Link  to="/contact" style={{ 
                    textDecoration: 'none', 
                    color: 'inherit', 
                    cursor: 'pointer'
                }}>Schedule Your Appointment</Link></span>
    </div>
    <div className='Appointment-process'>
    <i class="fa-regular fa-calendar-days" id="handi2"></i>
        <span id='webProcessIcon2'><Link  to="/contact" style={{ 
                    textDecoration: 'none', 
                    color: 'inherit', 
                    cursor: 'pointer'
                }}>Access Your Schedule</Link></span>
    </div>
    <div className='Appointment-process'>
        
    <i class="fa-solid fa-laptop-code" id="handi2"></i>

    <span ><Link  to="/contact" style={{ 
                    textDecoration: 'none', 
                    color: 'inherit', 
                    cursor: 'pointer'
                }}>Consult with Our Web Development Experts</Link></span>
    </div>
    <div className='Appointment-process'>
    <i class="fa-solid fa-house" id="handi2"></i>
   <span id='webProcessIcon3'><Link  to="/contact" style={{ 
                    textDecoration: 'none', 
                    color: 'inherit', 
                    cursor: 'pointer'
                }}>Enjoy Superior Web Development Solutions</Link></span> 
    </div>
</div>
</div>
        </div>
        </div>
    )
}

export default OurProcess;