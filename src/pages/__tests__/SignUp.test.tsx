import { render, fireEvent } from '@testing-library/react';

import { vi } from 'vitest';;

import SignUp from '../SignUp';

import { SignUpPage } from '../../fixtures/constants';

vi.mock('../../fixtures/constants.tsx');

describe('Sign Up Page', () => {
  it('renders title.', () => {
    const { getByText } = render(<SignUp />);

    expect(getByText('회원가입')).not.toBeNull();
  });

  describe('renders inputs.', () => {
    it('of nickname and email.', () => {
      const { getByText } = render(<SignUp />);

      expect(getByText(SignUpPage.inputs.nickName.title)).not.toBeNull();
      expect(getByText(SignUpPage.inputs.email.title)).not.toBeNull();
    });

    it('enter nicknames.')

    it('email is optional.')

    it('email is optional.')
  });

  describe('Agreements.', () => {
    describe('Agree All', () => {
      it('when agree all is checked, other agrees have to be checked.', () => {
        const { getByText } = render(<SignUp />);

        expect(getByText(SignUpPage.buttons.agreeAll.title));
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

        it('Agree Usage', () => {
          const { getByText } = render(<SignUp />);

          fireEvent.click(getByText(SignUpPage.buttons.agreeAge.title));
          getByText(SignUpPage.buttons.agreeUsage.title);

          //check modal is showed
        })
      });
    });
  });

  describe('submit button', () => {
    const text = SignUpPage.buttons.submit.title;

    it('renders submit button.', () => {
      const { getByText } = render(<SignUp />);

      expect(getByText(text)).not.toBeNull();
    });

    describe('when button is clicked, ', () => {
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
    })
  });
});