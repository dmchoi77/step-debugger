import { useAppContext } from '~/store/AppContext';

const PageA: React.FC = () => {
  const { handleNext } = useAppContext();

  return (
    <>
      <div>Page A</div>
      <button onClick={() => handleNext('pageB')}>버튼</button>
    </>
  );
};

export default PageA;
