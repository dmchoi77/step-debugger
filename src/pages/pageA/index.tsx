import { useAppContext } from '~/store/AppContext';
import { StepEnum } from '~/types/step.types';

const PageA: React.FC = () => {
  const { handleNext } = useAppContext();

  return (
    <>
      <div>Page A</div>
      <button onClick={() => handleNext(StepEnum.PageB)}>버튼</button>
    </>
  );
};

export default PageA;
