import { GetStaticProps } from 'next';
import { CommonPageProps, StepEnum, StepType } from '~/types/step.types';

const PageA: React.FC<CommonPageProps> = ({ onNext }) => {
  return (
    <>
      <div>Page A</div>
      <button onClick={() => onNext(StepEnum.PageB)}>버튼</button>
    </>
  );
};

export default PageA;
