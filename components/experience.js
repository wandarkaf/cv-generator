import Markdown from 'react-markdown'
import { time } from '../utils/utils'

const Experience = ({show, lang}) => (
  <div className="box-space">
    <h5><a href={show.company.url}>{show.company.name}</a></h5>

    <div className="box-space-square">
      <p className="subtitle1">{show[`name_${lang}`]}</p>
      <p className="subtitle2">{time(lang, show.startDate)} - {time(lang, show.endDate)}</p>
      <p>{show.location[`name_${lang}`]}</p>
    </div>

    <Markdown source={show[`description_${lang}`]}/>

    {show.projects.map(project => (
      <p className="subtitle2" key={project.url}><a href={project.url}>{project.name}</a></p>
    ))}
  </div>
)

export default Experience
