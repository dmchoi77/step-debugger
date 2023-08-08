import { useRouter } from 'next/router';
import Button from './button/Button';
import { Dispatch, SetStateAction } from 'react';
import { Register } from '~/shared/register';
import BaseInput from './input/BaseInput';
import { phoneFormatter } from '~/utils/formatUtil';

interface IProps {
  onNext: () => void;
  register: Register;
  setRegister: Dispatch<SetStateAction<Register>>;
}

const Page2: React.FC<IProps> = ({ onNext, register, setRegister }) => {
  const { phoneNo, birth } = register;

  const handleInput = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    const onlyNumberRegex = /[^0-9]/g;
    const parsingNumber = value.replace(onlyNumberRegex, '');

    return setRegister((prev) => ({
      ...prev,
      [name]: parsingNumber,
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
          placeholder='생년월일(ex.19950318)을 입력하세요.'
          value={birth}
          name='birth'
          onChange={handleInput}
        />
        <BaseInput
          placeholder='연락처를 입력하세요.'
          value={phoneFormatter(phoneNo)}
          name='phoneNo'
          onChange={handleInput}
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
        <Button onClick={onNext} text='다음' isDisabled={!phoneNo || !birth} />
      </div>
    </>
  );
};

export default Page2;
