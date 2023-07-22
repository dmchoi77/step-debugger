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
      <span>F12 개발자 도구를 열어보세요</span>
    </HeaderContainer>
  );
};

export default Header;
