import { Dispatch, SetStateAction } from 'react';
import { Register } from '~/shared/register';
import Button from './button/Button';
import BaseInput from './input/BaseInput';

interface IProps {
  onNext: () => void;
  register: Register;
  setRegister: Dispatch<SetStateAction<Register>>;
}

const Page1: React.FC<IProps> = ({ onNext, register, setRegister }) => {
  const handleInput = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    return setRegister((prev) => ({
      ...prev,
      [name]: value.trim(),
    }));
  };

  return (
    <>
      <div
        css={{
          display: 'flex',
          gap: '10px',
          flexDirection: 'column',
          padding: '20px',
        }}
      >
        <BaseInput
          name='name'
          value={register.name}
          onChange={handleInput}
          placeholder='이름을 입력하세요.'
        />
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
        <Button isDisabled={!register.name} onClick={onNext} text='다음' />
      </div>
    </>
  );
};

export default Page1;
