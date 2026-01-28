---
to: src/components/<%=name%>/<%=name%>.tsx
---
import { Container } from './<%= name %>.styles';

interface <%=name%>Props {}

export const <%= name %> = ({}: <%=name%>Props) => {
  return <Container></Container>;
};
