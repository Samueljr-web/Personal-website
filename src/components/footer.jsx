import React from 'react';
import '../styles/footer.css'
import { FaCodepen, FaGithub, FaHeart, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return ( 
            <footer>
                <div className="social-icons">
                    <div className="icon">
                      <a href="/">
                         <i><FaCodepen /></i>
                      </a>
                    </div>
                    <div className="icon">
                          <a href="/">
                              <i><FaGithub /></i>
                           </a>
                    </div>
                    <div className="icon">
                        <a href="/">
                          <i><FaLinkedin /></i>
                        </a>
                    </div>
                </div>
                <div className="copyright">
                    <p>&copy; made with <i><FaHeart /></i> by me</p>
                </div>
            </footer>
     );
}
 
export default Footer;