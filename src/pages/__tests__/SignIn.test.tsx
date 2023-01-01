import { render } from '@testing-library/react';
import SignIn from '../SignIn';

import { SignInPage } from 'fixtures/constants';

describe('SignIn', () => {
  it('renders title.', () => {
    const { getByText } = render(<SignIn />);

    expect(getByText(SignInPage.title)).not.toBeNull();
  });

  it('renders description.', () => {
    const { getByText } = render(<SignIn />);
    {
      SignInPage.description.forEach((text) => {
        expect(getByText(text)).not.toBeNull();
      })
    }
  })

  it('renders mandalart logo.', () => {
    //const { getByRole } = render(<SignIn />);
  })

  it('renders sign in buttons.', () => {
    //const { getByRole } = render(<SignIn />);
  })

  it('when platform sign in button is clicked, occurs handleClick.', () => {
    //const { getByRole } = render(<SignIn />);
  })
});