import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe('Header component', ()=> {
  test('renders header title', ()=> {
    render(<Header  />)
    const textElement = screen.getByText(/contact app manager/i, {exact: false})
    expect(textElement).toBeInTheDocument()
  })
})