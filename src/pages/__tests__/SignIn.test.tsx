import { render } from '@testing-library/react';
import SignIn from '../SignIn';

describe('SignIn', () => {
  it('renders text.', () => {
    const { getByText } = render(<SignIn />);

    expect(getByText('SignIn')).not.toBeNull();
  })
})