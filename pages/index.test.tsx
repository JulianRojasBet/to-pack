import { render, screen } from '@testing-library/react'
import Index from './index'

test('renders index page', () => {
    render(<Index />)
    const text = screen.getByText(/hello next/i)
    expect(text).toBeInTheDocument()
})
