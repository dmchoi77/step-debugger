import { forwardRef } from 'react';

const Dialog = forwardRef<HTMLDivElement, any>((props, ref) => {
  return (
    <div
      ref={ref}
      css={{
        width: '100%',
        height: '100%',

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
          padding: '15px',
        }}
      >
        <div>모달입니다 모달</div>
      </div>
    </div>
  );
});

export default Dialog;
