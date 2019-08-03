import Layout from '../components/layout'
import fetch from 'isomorphic-unfetch'
import { Trans } from '@lingui/macro'
import withLang from '../components/withLang'
// import LangSwitcher from '../components/LangSwitcher'
import Education from '../components/education'
import Experience from '../components/experience'
import Logo from '../components/logo'

import {
  API_ROOT_URL
} from '../constants'

class Index extends React.Component {
  render() {
    const { studies, jobs, language } = this.props
    // const lang = language.toUpperCase()
    const lang = 'EN'

    return (
      <Layout>
        <Logo/>
        <div className="row">
          <div className="col-xs-12 col-sm-7 col-md-8 col-lg-8">
              <div className="box">             
                <h3><Trans>Experience</Trans></h3>
                {jobs.map(exp => (
                  <Experience key={exp.id} show={exp} lang={lang} />
                ))}
              </div>
          </div>

          <div className="col-xs-12 col-sm-5 col-md-4 col-lg-4">
            <div className="box">  
              <h3><Trans>Studies</Trans></h3>
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
    jobs
  }
}

export default withLang(Index)

// <Link href="/post/[id]" as={`/post/${show.id}`}>
// <a>{show.id}</a>
// </Link>