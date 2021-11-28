import { render } from '@testing-library/react';
import { Form } from "..";

it('snapshot component Form', () => {
    const component = render(<Form />)
    expect(component).toMatchSnapshot();
})