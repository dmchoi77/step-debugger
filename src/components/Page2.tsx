import { useAppContext } from '~/store/AppContext';

const Page2: React.FC = () => {
  const { handleNext } = useAppContext();

  return (
    <>
      <div>Page B</div>
      <button onClick={() => handleNext('C')}>버튼</button>
    </>
  );
};

export default Page2;
