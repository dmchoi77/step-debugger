import { useEffect, useRef, useState } from 'react';
import Dialog from '~/components/dialog/Dialog';

interface IProps {
  onNext: () => void;
}

const Page1: React.FC<IProps> = ({ onNext }) => {
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  const dialogRef = useRef<HTMLDivElement>(null);

  const handleCloseDialog = (event: MouseEvent) => {
    if (isOpenDialog && dialogRef.current === event.target) {
      setIsOpenDialog(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', (e) => handleCloseDialog(e));

    return () => {
      window.removeEventListener('click', (e) => handleCloseDialog(e));
    };
  }, [isOpenDialog]);

  return (
    <>
      <div>Page A</div>
      <button onClick={onNext}>버튼</button>
      <button
        onClick={() => setIsOpenDialog((prev) => !prev)}
        css={{ width: '100%', height: '50px' }}
      >
        모달
      </button>
      {isOpenDialog && <Dialog ref={dialogRef} />}
    </>
  );
};

export default Page1;
