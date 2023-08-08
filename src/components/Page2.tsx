import { useAppContext } from '~/store/AppContext';
import { StepType } from '~/types/step.types';

interface IProps {
  onNext: () => void;
}
const Page2: React.FC<IProps> = ({ onNext }) => {
  return (
    <>
      <div>Page B</div>
      <button onClick={onNext}>버튼</button>
    </>
  );
};

export default Page2;
