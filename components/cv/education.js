import { time } from '../../utils/utils'

const Education = ({show, lang}) => (
  <div className="box-space">
    <h5>
      <a href={show.school_url} target="_blank">
        {show[`school_${lang}`]}
      </a>
    </h5>
    <div className="box-space-square">
      <p className="subtitle1">{show[`title_${lang}`]}</p>
      <p className="subtitle1">{show[`subject_${lang}`]}</p>
      <p>{time(lang, show.startDate)} - {time(lang, show.endDate)}</p>
    </div>
  </div>
)

export default Education