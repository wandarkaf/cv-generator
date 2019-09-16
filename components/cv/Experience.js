import Markdown from 'react-markdown'
import Project from './Project'
import { time } from '../../utils/commons'

const Experience = ({ show, lang }) => (
  <article>
    <h5>
      <a target='_blank' href={show.company.url} rel='noopener noreferrer'>
        {show.company.name}
      </a>
    </h5>

    <p className='subtitle2'>{show[`name_${lang}`]}</p>
    <p className='subtitle2'>{time(lang, show.startDate)} - {time(lang, show.endDate)}</p>
    <p className='subtitle2'>{show.location[`name_${lang}`]}</p>
    <Markdown source={show[`description_${lang}`]} />
    <Project projects={show.projects} />
  </article>
)

export default Experience
