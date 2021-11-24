import { render, screen } from '@testing-library/react';
import { Main } from "../Main";

it('Exists - Home Page', () => {
    render(<Main />);
    const linkElement = screen.getByText(/Home Page/i);
    expect(linkElement).toBeInTheDocument();
})