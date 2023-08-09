import Button from './button/Button';
import { Dispatch, SetStateAction, useCallback, useEffect, useRef, useState } from 'react';
import { Register } from '~/shared/register';
import BaseInput from './input/BaseInput';
import SelectBox from './selectBox/SelectBox';
import Dialog from './dialog/Dialog';
import useDialog from '~/hooks/useDialog';

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
  const { accountNo, bankName } = register;

  const { dialogRef, open, onClose, setDialog } = useDialog();

  const handleInput = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    const onlyNumberRegex = /[^0-9]/g;
    const parsingNumber = value.replace(onlyNumberRegex, '');

    return setRegister((prev) => ({
      ...prev,
      [name]: parsingNumber,
    }));
  };

  const onClickDialog = () => {
    setDialog((prev) => ({
      ...prev,
      open: true,
      handleConfirm: onNext,
      handleClose: onClose,
      mainText: `${register.name ?? '사용자'}님 제출하시렵니까?`,
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
        <Button onClick={onClickDialog} isDisabled={!accountNo || !bankName} text='다음' />
      </div>
      {open && <Dialog ref={dialogRef} />}
    </>
  );
};

export default Page3;
