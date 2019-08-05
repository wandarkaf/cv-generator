import { Trans } from '@lingui/macro'

const List = ({children, title, measure}) => (
  <div className={measure}>
      <div className="box">             
        <h3><Trans id={title}></Trans></h3>
        {children}
      </div>
  </div>
)

export default List
