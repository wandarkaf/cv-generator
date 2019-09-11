import { time } from '../../utils/commons'

const Education = ({ show, lang }) => (
  <article>
    <h5>
      <a href={show.school_url} target='_blank' rel='noopener noreferrer'>
        {show[`school_${lang}`]}
      </a>
    </h5>
    <p className='subtitle2'>{show[`title_${lang}`]}</p>
    <p className='subtitle2'>{show[`subject_${lang}`]}</p>
    <p className='subtitle2'>{time(lang, show.startDate)} - {time(lang, show.endDate)}</p>
  </article>
)

export default Education
