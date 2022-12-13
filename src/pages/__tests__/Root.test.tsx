import { render } from '@testing-library/react';
import Root from '../Root';

describe('Root', () => {
  it('renders text.', () => {
    const { getByText } = render(<Root />);

    expect(getByText('root')).not.toBeNull();
  })
})