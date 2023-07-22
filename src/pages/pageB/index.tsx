import { CommonPageProps, StepEnum } from '~/types/step.types';

const PageB: React.FC<CommonPageProps> = ({ onNext }) => {
  console.log('🚀 ~ file: index.tsx:4 ~ onNext:', onNext);
  return (
    <>
      <div>Page B</div>
      <button onClick={() => onNext(StepEnum.PageC)}>버튼</button>
    </>
  );
};

export default PageB;
