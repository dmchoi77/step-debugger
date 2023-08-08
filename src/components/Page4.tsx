import { Dispatch, SetStateAction, useEffect } from 'react';
import { Register, registerDefaultState } from '~/shared/register';
import Button from './button/Button';

interface IProps {
  onNext: () => void;
  setRegister: Dispatch<SetStateAction<Register>>;
}

const Page4: React.FC<IProps> = ({ onNext, setRegister }) => {
  useEffect(() => {
    setRegister(registerDefaultState);
  }, [setRegister]);

  return (
    <>
      <div
        css={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        제출완료
      </div>
      <div
        css={{
          display: 'flex',
          gap: '10px',
          flexDirection: 'column',
          padding: '10px',
          position: 'fixed',
          width: '100%',
          bottom: 0,
        }}
      >
        <Button onClick={onNext} text='처음으로' />
      </div>
    </>
  );
};

export default Page4;
