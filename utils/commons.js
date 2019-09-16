import moment from 'moment'

const uppercase = (str) => str.charAt(0).toUpperCase() + str.slice(1)

const timeTransform = (lang, date) =>
  date === 'present'
    ? moment().locale(lang).format('MMMM, YYYY')
    : moment.unix(date).locale(lang).format('MMMM, YYYY')

export const time = (lang, date) => uppercase(timeTransform(lang, date))
