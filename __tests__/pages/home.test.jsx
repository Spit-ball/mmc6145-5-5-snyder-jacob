import Home from '../../pages'
import { render, screen } from '@testing-library/react'

describe('Home page', () => {
  describe('getServerSideProps', () => {
    it('should not be called', async () => {
      const { getServerSideProps } = await import('../../pages')
      expect(getServerSideProps).not.toBeDefined()
    })
  })
  describe('Component', () => {
    it('should render title', () => {
      render(<Home />)
      expect(screen.getByText(/Hey there, Welcome to Yummy!/i)).toBeInTheDocument()
    })
  })
})