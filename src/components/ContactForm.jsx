import React from 'react';


export default function ContactForm() {
  return (
    <div className='parent-div-c-form'>
      <div className='object-fit-contain'>
        {/* Responsive Google Maps iframe */}
        <div className="ratio ratio-16x9">
          <iframe
            className='border rounded'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55894405.1918553!2d-7.473266920229358!3d31.23392125876041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e1c51dccef5b1%3A0x2bfa1fbb0bd948ff!2s33%20Forsythia%20Dr%2C%20Cardiff%20CF23%207HP%2C%20UK!5e0!3m2!1sen!2s!4v1727536207319!5m2!1sen!2s"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <div className='c_form'>
        <form className='Width 50%' action="https://formspree.io/f/mwpegbez" method="POST">
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">Full Name</label>
            <input type="text" name="fullName" className="form-control" id="fullName" placeholder='John Smith' />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" name="email" className="form-control" placeholder='abc@gmail.com' id="email" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input type="tel" name="phone" className="form-control" placeholder='0000000000' id="phone" aria-describedby="numHelp" />
            <div id="numHelp" className="form-text">We'll never share your phone number with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea name="message" className="form-control" id="message" rows="3" placeholder='Type your message'></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}
