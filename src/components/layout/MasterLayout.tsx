import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
// import Footer from '../footer/Footer';
import Header from '../header/Header';
import StepDebugger from '../step/StepDebugger';
import { addListener, removeListener, launch } from 'devtools-detector';

interface IProps {
  children: JSX.Element | JSX.Element[];
}

const MasterLayout: React.FC<IProps> = ({ children }) => {
  const [isOpenDebugger, setIsOpenDebugger] = useState(false);

  const isDetected = (isOpen: boolean) =>
    isOpen ? setIsOpenDebugger(true) : setIsOpenDebugger(false);

  useEffect(() => {
    addListener(isDetected);

    launch();

    return () => {
      removeListener(isDetected);
    };
  }, []);

  return (
    <MasterLayoutContainer>
      <Header />
      <PageArea>{children}</PageArea>
      {/* <Footer /> */}
      {isOpenDebugger && <StepDebugger />}
    </MasterLayoutContainer>
  );
};

export default MasterLayout;

const MasterLayoutContainer = styled.div`
  width: 100%;
  max-width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

const PageArea = styled.main`
  display: flex;
  flex-direction: column;
  /* padding: 10px 0; */
  /* border: 1px solid #dadada87; */
  width: 100%;
  height: calc(100% - 55px);
  overflow: hidden;

  @media (max-width: 320px) {
    height: calc(100% - 40px);
  }
`;
