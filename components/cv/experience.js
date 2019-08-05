import Markdown from 'react-markdown'
import Project from '../cv/project'
import BulletPoint from '../decorations/bulletPoint'
import { time } from '../../utils/utils'

const Experience = ({show, lang}) => (
  <div className="box-space">
    <h5>
      <a target="_blank" href={show.company.url}>
        {show.company.name}
      </a>
    </h5>

    <div className="box-space-square">
      <p className="subtitle2">{show[`name_${lang}`]}</p>
      <p className="subtitle2">{time(lang, show.startDate)} - {time(lang, show.endDate)}</p>
      <p className="subtitle2">{show.location[`name_${lang}`]}</p>
    </div>

    <Markdown source={show[`description_${lang}`]}/>
    
    <Project projects={show.projects} />
  </div>
)

export default Experience
