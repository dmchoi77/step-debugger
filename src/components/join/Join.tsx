import MasterLayout from '../layout/MasterLayout';

interface IProps {}

const Join: React.FC = ({}) => {
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
        <button onClick={() => console.log('click')}>GO GO GO GO</button>
      </div>
    </MasterLayout>
  );
};

export default Join;
