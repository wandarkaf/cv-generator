import React from 'react'
import '../stylesheets/error.scss'

function Error ({ statusCode }) {
  return (
    <div className='error-container'>
      <h1 className='error'>
        {statusCode
          ? `${statusCode}`
          : 'Client Error'}
      </h1>
    </div>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null
  return { statusCode }
}

export default Error
