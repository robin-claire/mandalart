import { render } from '@testing-library/react';
import Home from '../Home';

describe('Home', () => {
  it('renders text.', () => {
    const { getByText } = render(<Home />);

    expect(getByText('Home')).not.toBeNull();
  })
})