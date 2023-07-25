import PageA from './pageA';
import PageB from './pageB';
import PageC from './pageC';
import PageD from './pageD';
import useFunnel from '~/hooks/useFunnel';

export default function Home() {
  // const [register, setRegister] = useState<Register>(registerDefaultState);

  const { Funnel } = useFunnel();

  return (
    <>
      <Funnel>
        <Funnel.step name='pageA'>
          <PageA />
        </Funnel.step>
        <Funnel.step name='pageB'>
          <PageB />
        </Funnel.step>
        <Funnel.step name='pageC'>
          <PageC />
        </Funnel.step>
        <Funnel.step name='pageD'>
          <PageD />
        </Funnel.step>
      </Funnel>
    </>
  );
}
