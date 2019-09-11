import React from 'react'
import { FaGithub, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import FooterStrips from '../decorations/FooterStrips'

class Footer extends React.Component {
  render () {
    const { show } = this.props
    const links = [
      { url: `mailto:${show.email}`, icon: <MdEmail /> },
      { url: show.github, icon: <FaGithub /> },
      { url: show.twitter, icon: <FaTwitter /> },
      { url: `tel:${show.phone}`, icon: <FaWhatsapp /> }
    ]

    return (
      <footer data-testid='footer'>
        <h5 data-testid='title' className='negative holtwood'>
          {`© ${new Date().getFullYear()} ${show.name}`}
        </h5>
        {links.map((link, i) => (
          <a
            href={link.url}
            key={i}
            className='negative holtwood'
            target='_blank'
            rel='noopener noreferrer'
          >
            {link.icon}
          </a>
        ))}
        <FooterStrips />
      </footer>
    )
  }
}

export default Footer
