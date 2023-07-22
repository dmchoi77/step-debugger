import { CommonPageProps, StepEnum } from '~/types/step.types';

const PageC: React.FC<CommonPageProps> = ({ onNext }) => {
  console.log('🚀 ~ file: index.tsx:4 ~ onNext:', onNext);
  return (
    <>
      <div>Page C</div>
      <button onClick={() => onNext(StepEnum.PageD)}>버튼</button>
    </>
  );
};

export default PageC;
