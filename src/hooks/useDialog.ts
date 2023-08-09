import { useCallback, useEffect, useRef, useState } from 'react';

const useDialog = () => {
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  const dialogRef = useRef<HTMLDivElement>(null);

  const onOpen = () => setIsOpenDialog(true);
  const onClose = () => setIsOpenDialog(false);

  const handleCloseDialog = useCallback(
    (event: MouseEvent) => {
      if (isOpenDialog && dialogRef.current === event.target) {
        setIsOpenDialog(false);
      }
    },
    [isOpenDialog],
  );

  useEffect(() => {
    window.addEventListener('click', (e) => handleCloseDialog(e));

    return () => {
      window.removeEventListener('click', (e) => handleCloseDialog(e));
    };
  }, [isOpenDialog, handleCloseDialog]);

  return {
    isOpenDialog,
    dialogRef,
    onOpen,
    onClose,
  };
};

export default useDialog;
