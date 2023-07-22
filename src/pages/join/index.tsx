import { StepEnum } from '~/types/step.types';
import MasterLayout from '../../components/layout/MasterLayout';

interface IProps {
  onNext: any;
}

const Join: React.FC<IProps> = ({ onNext }) => {
  console.log('🚀 ~ file: index.tsx:9 ~ onNext:', onNext);
  return (
    <MasterLayout>
      <div
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        <div>가입하러 가기</div>
        <button onClick={() => onNext}>GO GO GO GO</button>
      </div>
    </MasterLayout>
  );
};

export default Join;
