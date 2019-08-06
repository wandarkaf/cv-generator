// translations
import { Trans } from '@lingui/macro'
import FooterStrips from '../decorations/footerStrips'
import moment from 'moment'
// Icons
import { FaGithub, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

class Footer extends React.Component {
  render() {
    const { show } = this.props

    return (
      <footer>
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
        
        <FooterStrips />
      </footer>
    )
  }
}

export default Footer

// <p className="subtitle2">
// <a href={`mailto:${show.email}`}>
//   <Trans id="footer.mail">email me!</Trans>
// </a>
// </p>

