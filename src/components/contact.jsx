import React from 'react';
import '../styles/contact.css';
import { GoLocation } from 'react-icons/go';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
    return ( 
        <div className="contact" id="contact">
             <h2>Contact me</h2>

             <div className="contact-info">
                  <div className="contact-in">
                  <div>
                       <div className="icon">
                          <i><GoLocation /></i>
                       </div>
                      
                       <div className="info"> 
                            <h3>location</h3>
                            <p>Abuja,Nigeria</p>
                       </div>
                  </div>
                  <div>
                       <div className="icon">
                          <i><FaEnvelope /></i>
                       </div>
                      
                       <div className="info"> 
                            <h3>Email</h3>
                            <p>samueladeyemi2006@gmail</p>
                       </div>
                  </div>
                  <div>
                       <div className="icon">
                          <i><FaPhoneAlt /></i>
                       </div>
                      
                       <div className="info"> 
                            <h3>Call</h3>
                            <p>+2347087588443</p>
                       </div>
                  </div>
                  </div>

             </div>
        </div>
     );
}
 
export default Contact;