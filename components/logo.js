import Strips from './strips'
import { withTranslation } from '../i18n'

const Logo = ({ profile, t }) => (
  <div className="row">
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 box-space-logo">
      <div className="box">
        <h2 className="title">{profile.name}</h2>
        <a className="subtitle2" href={`mailto:${profile.email}`}>{t('profession')}</a>
      </div>
    </div>
    <Strips/>
  </div>
)

Logo.getInitialProps = () => {
  namespacesRequired: ['common']
}

export default withTranslation('common')(Logo)