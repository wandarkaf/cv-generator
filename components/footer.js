// translations
import { withTranslation } from '../i18n'
import FooterStrips from './footerStrips'
import moment from 'moment'

class Footer extends React.Component {
  render() {
    const { t } = this.props

    return (
      <footer>
        <h5>© {moment().year()} {'Alonso Lamas'}</h5>
        <a className="subtitle2" href={`mailto:${'lamas.alonso@gmail.com'}`}>{t('footer.email')}</a>
        <FooterStrips />
      </footer>
    )
  }
}

export default withTranslation('common')(Footer)
