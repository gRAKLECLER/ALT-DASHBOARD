---
to: src/components/<%=name%>/<%=name%>.test.tsx
---
import { render } from '@testing-library/react';

import { <%= name %> } from './<%= name %>';

describe('<%= name %>', () => {
  it('should render <%= name %> component', () => {
    const renderComponent = render(<<%= name %> />);
    expect(renderComponent).toBeDefined();
  });
});
