import LogoStrips from '../decorations/LogoStrips'

const Logo = ({ profile, lang }) => (
  <div className='row'>
    <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 logo'>
      <div className='box'>
        <h2 className='capitalize negative holtwood titleshadow'>{profile.name}</h2>
        <a
          className='subtitle2 negative holtwood titleshadow'
          href={`mailto:${profile.email}`}
        >
          {profile[`role_${lang}`][0]}
        </a>
      </div>
    </div>
    <LogoStrips />
  </div>
)

export default Logo
