// translations
import { Trans } from '@lingui/macro'
import moment from 'moment'
import { FaGithub, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import FooterStrips from '../decorations/footerStrips'

class Footer extends React.Component {
  render() {
    const { show } = this.props

    return (
      <footer>
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