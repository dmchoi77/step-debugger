import { useAppContext } from '~/store/AppContext';

const PageB: React.FC = () => {
  const { handleNext } = useAppContext();

  return (
    <>
      <div>Page B</div>
      <button onClick={() => handleNext('pageC')}>버튼</button>
    </>
  );
};

export default PageB;
