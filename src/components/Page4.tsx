interface IProps {
  onNext: () => void;
}

const Page4: React.FC<IProps> = ({ onNext }) => {
  return (
    <>
      <div>Page D</div>;<button onClick={onNext}>처음으로</button>
    </>
  );
};

export default Page4;
