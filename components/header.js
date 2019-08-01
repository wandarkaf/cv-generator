// import Link from 'next/link';
// translations
import { i18n, withTranslation, Link } from '../i18n'

class Header extends React.Component {
  state = {}

  handlelanguage = lang => e => {
    e.preventDefault()
    i18n.changeLanguage(lang)
  }

  render() {
    const { t } = this.props

    const language = (
      <p className="language">
        <span 
          className={`btn ${i18n.language === 'es' ? 'active' : 'inactive'}`}
          onClick={this.handlelanguage('es')}>
          {t('nav.header.langMenu.es')}
        </span>
        <span 
          className={`btn ${i18n.language === 'en' ? 'active' : 'inactive'}`}
          onClick={this.handlelanguage('en')}>
          {t('nav.header.langMenu.en')}
        </span>
      </p>)

    return (
      <nav className="menu">
        <div className="row">
          <div className="col-xs-8">
            <div className="box">
              <p>
                <Link href="/">
                  <a className="btn">{t('nav.header.home')}</a>
                </Link>
                <Link href="/experimental">
                  <a className="btn">{t('nav.header.experimental')}</a>
                </Link>
              </p>
            </div>
          </div>
          <div className="col-xs-4">
            <div className="box">
              {language}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

Header.getInitialProps = () => {
    namespacesRequired: ['common']
}

export default withTranslation('common')(Header)
