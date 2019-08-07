import moment from 'moment'
import { FaGithub, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const FooterStrips = ({ show }) => (
  <div className="footer-stripe-box">
    <div className="footer-stripe footer-stripe-1"></div>
    <div className="footer-stripe footer-stripe-2"></div>
    <div className="footer-stripe footer-stripe-3"></div>
    <div className="footer-stripe footer-stripe-4"></div>
    <div className="footer-stripe footer-stripe-5"></div>
    <div className="footer-stripe footer-stripe-6"></div>
    <div className="social-wrapper">
        <h5>
          {`© ${moment().year()} ${show.name}`} <br/>
        </h5>
        <div className="social-box">
          <span className="subtitle2">
            <a href={`mailto:${show.email}`}>
              <MdEmail />
            </a>
          </span>
          <span className="subtitle2">
            <a href={show.github} target="_blank">
              <FaGithub />
            </a>
          </span>
          <span className="subtitle2">
            <a href={show.twitter} target="_blank">
              <FaTwitter />
            </a>
          </span>
          <span className="subtitle2">
            <a href={`tel:${show.phone}`} target="_blank">
              <FaWhatsapp />
            </a>
          </span>
        </div>
      </div>
  </div>
)

export default FooterStrips