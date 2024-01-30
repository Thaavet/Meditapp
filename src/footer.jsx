import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer id="footer">
        <div className="footer-div">
        <div className='footer-text'>
        <h3>Follow us:</h3>
        </div>

        <div className="social-button">
     
     <a
       className="btn text-white btn-floating m-1"
       style={{ backgroundColor: '#0082ca' }}
       href="https://www.linkedin.com/in/davidefinocchio/"
       role="button"
     >
       <FontAwesomeIcon icon={faLinkedinIn} />
     </a>
     <a
       className="btn text-white btn-floating m-1"
       style={{ backgroundColor: '#333333' }}
       href="https://github.com/Thaavet"
       role="button"
     >
       <FontAwesomeIcon icon={faGithub} />
     </a>
        </div>
        </div>
      </footer>
  )
}
export default Footer