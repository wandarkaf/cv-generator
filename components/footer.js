// translations
import { withTranslation } from '../i18n'
import FooterStrips from './footerStrips'
import moment from 'moment'

class Footer extends React.Component {
  render() {
    const { t, show } = this.props

    return (
      <footer>
        <h5>{`© ${moment().year()} ${show.name}`}</h5>
        <a className="subtitle2" href={`mailto:${show.email}`}>{t('footer.email')}</a>
        <FooterStrips />
      </footer>
    )
  }
}

export default withTranslation('common')(Footer)
