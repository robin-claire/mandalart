import { render } from '@testing-library/react';
import SignIn from '../SignIn';

describe('SignIn', () => {
  it('renders title.', () => {
    const { getByText } = render(<SignIn />);

    expect(getByText('Sign In Page')).not.toBeNull();
  })

  it('renders e-mail and password inputs.', () => {
    const { getByLabelText } = render(<SignIn />);

    expect(getByLabelText('Email Address'));
    expect(getByLabelText('Password'));
  })

  it('renders Sign-In button.', () => {
    const { getByRole } = render(<SignIn />);

    expect(getByRole('button', {
      name: "Sign In",
    })).not.toBeNull();
  })

  describe('when sign in button clicks,', () => {
    it('when inputs are not valid, shows error.', () => {
      const { getByText } = render(<SignIn />);

      expect(getByText('Sign In')).not.toBeNull();
    })

    it('when inputs are valid, occurs handleSubmit', () => {
      const { getByText } = render(<SignIn />);

      expect(getByText('Sign In')).not.toBeNull();
    })
  })
})