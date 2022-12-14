import { render } from '@testing-library/react';
import Home from '../Home';

describe('Home', () => {
  it('renders Title and Description.', () => {
    const { getByText } = render(<Home />);

    expect(getByText('만다라트')).not.toBeNull();
    expect(getByText('나만의 목표를 만들어요')).not.toBeNull();
  })

  it('renders Logo.', () => {
    const { getByText } = render(<Home />);

    expect(getByText('왕멋진로고')).not.toBeNull();
  })

  it('renders Login Buttons', () => {
    const { getByRole } = render(<Home />);

    expect(getByRole('button', {
      name: "Google로 로그인",
    })).not.toBeNull();
    expect(getByRole('button', {
      name: "Kakao로 로그인",
    })).not.toBeNull();
    expect(getByRole('button', {
      name: "이메일로 로그인",
    })).not.toBeNull();
  })
})