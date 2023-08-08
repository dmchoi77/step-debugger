import styled from '@emotion/styled';
import { LeftChevron } from '../svgs';
import { useRouter } from 'next/router';

const HeaderContainer = styled.header`
  width: 100%;
  height: 50px;
  background-color: blanchedalmond;

  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Header: React.FC = () => {
  const router = useRouter();
  return (
    <HeaderContainer>
      <LeftChevron css={{ cursor: 'pointer', margin: '10px' }} onClick={() => router.back()} />
      {/* <span>F12 개발자 도구를 열어보세요</span> */}
    </HeaderContainer>
  );
};

export default Header;
