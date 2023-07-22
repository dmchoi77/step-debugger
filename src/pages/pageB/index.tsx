import { useAppContext } from '~/store/AppContext';
import { StepEnum } from '~/types/step.types';

const PageB: React.FC = () => {
  const { handleNext } = useAppContext();

  return (
    <>
      <div>Page B</div>
      <button onClick={() => handleNext(StepEnum.PageC)}>버튼</button>
    </>
  );
};

export default PageB;
