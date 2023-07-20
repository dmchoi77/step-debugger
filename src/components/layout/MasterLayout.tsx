import styled from '@emotion/styled';
import Footer from '../footer/Footer';
import Header from '../header/Header';

interface IProps {
  children: JSX.Element | JSX.Element[];
}

const MasterLayout: React.FC<IProps> = ({ children }) => {
  return (
    <MasterLayoutContainer>
      <Header />
      <PageArea>{children}</PageArea>
      <Footer />
    </MasterLayoutContainer>
  );
};

export default MasterLayout;

const MasterLayoutContainer = styled.div`
  width: 100%;
  max-width: 600px;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
`;

const PageArea = styled.main`
  padding: 10px 0;
  border: 1px solid #dadada87;
  width: 100%;
  height: calc(100% - 55px);

  @media (max-width: 320px) {
    height: calc(100% - 40px);
  }

  @media (max-height: 685px) {
    overflow-y: scroll;
  }
`;
