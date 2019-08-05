import Strips from './strips'
import { Trans } from '@lingui/macro'

const Logo = ({ profile }) => (
  <div className="row">
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 box-space-logo">
      <div className="box">
        <h2 className="title">{profile.name}</h2>
        <a className="subtitle2" href={`mailto:${profile.email}`}><Trans>Software Engineer</Trans></a>
      </div>
    </div>
    <Strips/>
  </div>
)

export default Logo