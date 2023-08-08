import Button from './button/Button';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { Register } from '~/shared/register';
import BaseInput from './input/BaseInput';
import SelectBox from './selectBox/SelectBox';
import Dialog from './dialog/Dialog';

interface IProps {
  onNext: () => void;
  register: Register;
  setRegister: Dispatch<SetStateAction<Register>>;
}

const BankList = [
  {
    label: '하나은행',
    code: '02',
  },
  {
    label: '국민은행',
    code: '03',
  },
  {
    label: '외환은행',
    code: '04',
  },
  {
    label: '어쩌고은행',
    code: '05',
  },
];

const Page3: React.FC<IProps> = ({ onNext, register, setRegister }) => {
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  const dialogRef = useRef<HTMLDivElement>(null);

  const { accountNo, bankName } = register;

  const handleInput = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    const onlyNumberRegex = /[^0-9]/g;
    const parsingNumber = value.replace(onlyNumberRegex, '');

    return setRegister((prev) => ({
      ...prev,
      [name]: parsingNumber,
    }));
  };

  const handleCloseDialog = (event: MouseEvent) => {
    if (isOpenDialog && dialogRef.current === event.target) {
      setIsOpenDialog(false);
    }
  };

  const handleSubmit = () => setIsOpenDialog(true);

  useEffect(() => {
    window.addEventListener('click', (e) => handleCloseDialog(e));

    return () => {
      window.removeEventListener('click', (e) => handleCloseDialog(e));
    };
  }, [isOpenDialog]);

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
        <SelectBox
          placeholder='은행을 선택해주세요.'
          options={BankList}
          onChange={(e) => setRegister((prev) => ({ ...prev, bankName: e.target.value }))}
        />
        <BaseInput
          placeholder='계좌번호를 입력해주세요.'
          value={register.accountNo}
          name='accountNo'
          onChange={handleInput}
          autoFocus={true}
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
        <Button
          onClick={handleSubmit}
          isDisabled={!accountNo || !bankName}
          text='다음'
          color='#810707'
        />
      </div>
      {isOpenDialog && (
        <Dialog
          ref={dialogRef}
          mainText='제출하시겠습니까????'
          cancelText='취소'
          onClose={() => setIsOpenDialog(false)}
          handleConfirm={onNext}
          handleCancel={() => setIsOpenDialog(false)}
        />
      )}
    </>
  );
};

export default Page3;
