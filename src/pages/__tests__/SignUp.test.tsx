import { render } from '@testing-library/react';

import { fireEvent } from '@testing-library/react';

import SignUp from '../SignUp';

import { SignUpPage } from '../../fixtures/constants';

describe('Sign Up Page', () => {
  it('renders title.', () => {
    const { getByText } = render(<SignUp />);

    expect(getByText('회원가입')).not.toBeNull();
  });

  describe('renders inputs.', () => {
    it('renders nickname and email', () => {
      const { getByText } = render(<SignUp />);

      expect(getByText(SignUpPage.inputs.nickName)).not.toBeNull();
      expect(getByText(SignUpPage.inputs.email)).not.toBeNull();
    });
  });

  describe('Agreements.', () => {
    describe('Agree All', () => {
      it('when agree all is checked, other agrees have to be checked.', () => {
        const { getByLabelText } = render(<SignUp />);
      })
    });

    describe('Agree Age and Agree Usage', () => {
      it('each agreement renders checkbox and text.', () => {
        const { getByText } = render(<SignUp />);

        expect(getByText(SignUpPage.buttons.agreeAge.title)).not.toBeNull();
        expect(getByText(SignUpPage.buttons.agreeUsage.title)).not.toBeNull();
      })

      describe('when agreement text is clicked, shows agreement description modal.', () => {
        it('Agree Age', () => {
          const { getByText } = render(<SignUp />);

          fireEvent.click(getByText(SignUpPage.buttons.agreeAge.title));

          //check modal is showed
        });

        it('Agree Age', () => {
          const { getByText } = render(<SignUp />);

          fireEvent.click(getByText(SignUpPage.buttons.agreeAge.title));
          getByText(SignUpPage.buttons.agreeUsage.title);

          //check modal is showed
        })
      });
    });
  });

  describe('SignUp Button', () => {
    const text = SignUpPage.buttons.submit;

    it('renders Sign Up text.', () => {
      const { getByText } = render(<SignUp />);

      expect(getByText(text)).not.toBeNull();
    });

    it('when form is not valid, doesn\'t occur handleSubmit.', () => {
      const { getByText } = render(<SignUp />);

      fireEvent.click(getByText(text));

      //nothing occurs
    });


    it('when form is valid, occurs handleSubmit.', () => {
      const { getByText } = render(<SignUp />);

      fireEvent.click(getByText(text));

      //handleSubmit
    });
  });
});