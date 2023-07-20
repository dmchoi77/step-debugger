import styled from '@emotion/styled';

const HeaderContainer = styled.header`
  width: 100%;
  height: 50px;
  background-color: blanchedalmond;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <span>HEADER</span>
    </HeaderContainer>
  );
};

export default Header;
