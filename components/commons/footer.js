// translations
import { Trans } from '@lingui/macro'
import FooterStrips from '../decorations/footerStrips'

class Footer extends React.Component {
  render() {
    const { show } = this.props

    return (
      <footer>
        <FooterStrips show={show}/>
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