import { render } from '@testing-library/react';

import { InputField } from './InputField';

describe('InputField', () => {
  it('should render InputField component', () => {
    const renderComponent = render(<InputField />);
    expect(renderComponent).toBeDefined();
  });
});
