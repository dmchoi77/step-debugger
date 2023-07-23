import { useAppContext } from '~/store/AppContext';
import { StepEnum } from '~/types/step.types';

const PageC: React.FC = () => {
  const { handleNext } = useAppContext();

  return (
    <>
      <div>Page C</div>
      <button onClick={() => handleNext('pageD')}>버튼</button>
    </>
  );
};

export default PageC;
