import React from 'react'
import moment from 'moment'
import { FaGithub, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import FooterStrips from '../decorations/footerStrips'

class Footer extends React.Component {
  render () {
    const { show } = this.props

    return (
      <footer data-testid='footer'>
        <div className='social-wrapper'>
          <h5 data-testid='title'>
            {`© ${moment().year()} ${show.name}`} <br />
          </h5>
          <div className='social-box'>
            <span className='subtitle2'>
              <a href={`mailto:${show.email}`}>
                <MdEmail />
              </a>
            </span>
            <span className='subtitle2'>
              <a href={show.github} target='_blank' rel='noopener noreferrer'>
                <FaGithub />
              </a>
            </span>
            <span className='subtitle2'>
              <a href={show.twitter} target='_blank' rel='noopener noreferrer'>
                <FaTwitter />
              </a>
            </span>
            <span className='subtitle2'>
              <a href={`tel:${show.phone}`} target='_blank' rel='noopener noreferrer'>
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
