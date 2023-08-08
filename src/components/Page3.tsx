import { useAppContext } from '~/store/AppContext';
import { StepEnum } from '~/types/step.types';

const Page3: React.FC = () => {
  const { handleNext } = useAppContext();

  return (
    <>
      <div>Page C</div>
      <button onClick={() => handleNext('D')}>버튼</button>
    </>
  );
};

export default Page3;
