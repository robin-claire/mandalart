import { render } from '@testing-library/react';
import SignUp from '../SignUp';

describe('SignUp', () => {
  it('renders title.', () => {
    const { getByText } = render(<SignUp />);

    expect(getByText('Sign Up Page')).not.toBeNull();
  })


  it('renders name, e-mail and password inputs.', () => {
    const { getByLabelText } = render(<SignUp />);

    expect(getByLabelText('Name'))
    expect(getByLabelText('Email Address'));
    expect(getByLabelText('Password'));
  })

  it('renders SignUp button.', () => {
    const { getByRole } = render(<SignUp />);

    expect(getByRole('button', {
      name: "Sign Up",
    })).not.toBeNull();
  })

  describe('when sign in button clicks,', () => {
    it('when inputs are not valid, shows error.', () => {
      const { getByText } = render(<SignUp />);



      // expect(getByText('Sign Up')).not.toBeNull();
    })

    it('when inputs are valid, occurs handleSubmit', () => {
      const { getByText } = render(<SignUp />);

      // expect(getByText('Sign In')).not.toBeNull();
    })
  })
})