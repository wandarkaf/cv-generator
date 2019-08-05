// translations
import { Trans } from '@lingui/macro'
import FooterStrips from '../decorations/footerStrips'
import moment from 'moment'

class Footer extends React.Component {
  render() {
    const { show } = this.props

    return (
      <footer>
        <h5>{`© ${moment().year()} ${show.name}`}</h5>
        <a className="subtitle2" href={`mailto:${show.email}`}>
          <Trans id="footer.mail">email me!</Trans>
        </a>
        <FooterStrips />
      </footer>
    )
  }
}

export default Footer

