import { forwardRef } from 'react';
import Button from '../button/Button';

interface IProps {
  onClose: () => void;
  handleConfirm: () => void;
  handleCancel?: () => void;
  mainText?: string;
  cancelText?: string;
}
const Dialog = forwardRef<HTMLDivElement, IProps>(
  ({ onClose, mainText, cancelText, handleConfirm, handleCancel }, ref) => {
    return (
      <div
        ref={ref}
        css={{
          width: '100%',
          height: '100%',
          padding: '20px',
          position: 'absolute',
          top: 0,
          backgroundColor: '#0000007a',
          display: 'flex',
          margin: '0 auto',
          zIndex: 999,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          css={{
            width: '300px',
            height: '300px',
            backgroundColor: '#ffffff',
            borderRadius: '15px',
            padding: '13px',
            boxSizing: 'border-box',
          }}
        >
          <div
            css={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <div css={{ fontWeight: 600 }}>알림</div>
            <div onClick={onClose} css={{ cursor: 'pointer', fontWeight: 600 }}>
              X
            </div>
          </div>
          <div
            css={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}
          >
            <div
              css={{
                height: '220px',
                paddingTop: '10px',
                paddingBottom: '10px',
              }}
            >
              {mainText ?? '모달입니다 모달'}
            </div>
            <div
              css={{
                display: 'flex',
                gap: '10px',
              }}
            >
              {cancelText && <Button text={cancelText} onClick={handleCancel ?? onClose} />}
              <Button text='확인' onClick={handleConfirm} />
            </div>
          </div>
        </div>
      </div>
    );
  },
);

export default Dialog;
