import { render } from '@testing-library/react';
import SignUp from '../SignUp';

describe('SignUp', () => {
  it('renders text.', () => {
    const { getByText } = render(<SignUp />);

    expect(getByText('SignUp')).not.toBeNull();
  })
})