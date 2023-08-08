import { StepEnum } from '~/types/step.types';

interface IProps {
  onNext: () => void;
}

const Page3: React.FC<IProps> = ({ onNext }) => {
  return (
    <>
      <div>Page C</div>
      <button onClick={onNext}>버튼</button>
    </>
  );
};

export default Page3;
