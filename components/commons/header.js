import { withRouter } from 'next/router'
import Link from 'next/link'
// translations
import { Trans } from '@lingui/macro'
import LangSwitcher from '../languages/langSwitcher'

class Header extends React.Component {
  async componentDidMount() {
    console.log(this.props.router.asPath)
  }

  handleActivePathClass = (path, current) => 
    path === current ? 'active' : 'inactive'

  handleLangPath = (path, lang) => 
    lang ? `${path}?lang=${lang}` : path

  render() {
    const { router } = this.props
    const path = router.pathname.slice(1)

    return (
      <nav className="menu">
        <div className="row">
          <div className="col-xs-8">
            <div className="box">
              <p>
                <Link href={this.handleLangPath('/', router.query.lang)}>
                  <a className={`btn ${this.handleActivePathClass(path, '')}`}>
                    <Trans>Home</Trans>
                  </a>
                </Link>
                <Link href={this.handleLangPath('/experimental', router.query.lang)}>
                  <a className={`btn ${this.handleActivePathClass(path, 'experimental')}`}>
                    <Trans>Experimental</Trans>
                  </a>
                </Link>
              </p>
            </div>
          </div>
          <div className="col-xs-4">
            <div className="box">
              <LangSwitcher />
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(Header)
