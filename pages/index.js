import Layout from '../components/layout'
import fetch from 'isomorphic-unfetch';
import { i18n, withTranslation } from '../i18n'
import Education from '../components/education'
import Experience from '../components/experience'
import Logo from '../components/logo'

import {
  API_ROOT_URL
} from '../constants'

class Index extends React.Component {
  render() {
    const { studies, jobs, t } = this.props
    const lang = i18n.language === undefined ? 'EN' : i18n.language.toUpperCase()

    return (
      <Layout>
        <Logo/>

        <div className="row">
          <div className="col-xs-12 col-sm-7 col-md-8 col-lg-8">
              <div className="box">             
                <h3>{t('experience')}</h3>
                {jobs.map(exp => (
                  <Experience key={exp.id} show={exp} lang={lang} />
                ))}
              </div>
          </div>

          <div className="col-xs-12 col-sm-5 col-md-4 col-lg-4">
            <div className="box">  
              <h3>{t('studies')}</h3>
              {studies.map(education => (
                <Education key={education.id} show={education} lang={lang} />
              ))}
            </div>
          </div>
        </div>
        
      </Layout>
    )
  }
}

Index.getInitialProps = async function() {
  const profileId = 1
  const searchProfile = `?profileId=${profileId}&_sort=startDate&_order=desc`
  
  // fake API call

  const resStudies = await fetch(`${API_ROOT_URL}studies${searchProfile}`)
  const studies = await resStudies.json()

  const resJobs = await fetch(`${API_ROOT_URL}jobs${searchProfile}`)
  const jobs = await resJobs.json()

  return {
    studies,
    jobs,
    namespacesRequired: ['common']
  }
}

export default withTranslation('common')(Index)

// <Link href="/post/[id]" as={`/post/${show.id}`}>
// <a>{show.id}</a>
// </Link>