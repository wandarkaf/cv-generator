/* eslint-env jest */
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Footer from '../components/commons/footer'

const show = {
  name: 'alonso lamas',
  username: 'alonso',
  email: 'lamas.alonso@gmail.com',
  phone: '+34622210633',
  github: 'https://github.com/wandarkaf',
  twitter: 'https://twitter.com/AbstractCube',
  linkedin: 'https://www.linkedin.com/in/alonsolamas/'
}

test('Footer show proper values from props', () => {
  const { getByTestId } = render(<Footer show={show} />)
  expect(getByTestId('title').textContent).toContain('alonso lamas')
})

// test('Filter is been disabled properly', () => {
//   const { getByTestId } = render(<Footer disabled={false} filters={filters} />)
//   expect(getByTestId('filter').disabled).toBe(false)
// })

// test('Filter is been enabled properly', () => {
//   const disabled = true
//   const { getByTestId } = render(<Footer disabled={disabled} filters={filters} />)
//   expect(getByTestId('filter').disabled).toBe(true)
// })

// test('Filters options are set properly', () => {
//   const { getByText } = render(<Footer disabled={false} filters={filters} />)
//   expect(getByText('All')).toBeInTheDocument()
//   expect(getByText('org1')).toBeInTheDocument()
//   expect(getByText('org2')).toBeInTheDocument()
// })

// test('Filters selection works properly ', () => {
//   const { getByTestId } = render(<Footer disabled={false} filters={filters} />)
//   expect(getByTestId('filter').value).toBe('all')
//   fireEvent.change(getByTestId('filter'), { target: { value: '12345' } })
//   expect(getByTestId('filter').value).toBe('12345')
//   fireEvent.change(getByTestId('filter'), { target: { value: '67890' } })
//   expect(getByTestId('filter').value).toBe('67890')
// })
