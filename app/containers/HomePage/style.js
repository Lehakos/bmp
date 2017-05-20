import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';

export const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 10px 30px 15px;
`;

export const StyledButton = styled(RaisedButton)`
  margin-bottom: 7px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;
