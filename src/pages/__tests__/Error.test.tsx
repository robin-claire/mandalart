import { render } from '@testing-library/react';
import Error from '../Error';

describe('Error', () => {
  it('renders text.', () => {
    const { getByText } = render(<Error />);

    expect(getByText('Error')).not.toBeNull();
  })
})