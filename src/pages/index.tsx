import useFunnel from '~/hooks/useFunnel';
import Page1 from '~/components/Page1';
import Page2 from '~/components/Page2';
import Page3 from '~/components/Page3';
import Page4 from '~/components/Page4';
import { useAppContext } from '~/store/AppContext';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { StepType } from '~/types/step.types';

export default function Home() {
  // const [register, setRegister] = useState<Register>(registerDefaultState);
  const { setCurrentStep } = useAppContext();

  const { Funnel } = useFunnel();

  const router = useRouter();
  const pageQueryParams = router.query.page;

  useEffect(() => {
    if (router.query.page) return setCurrentStep(pageQueryParams as StepType);
    setCurrentStep('A');
  }, [pageQueryParams]);
  return (
    <>
      <Funnel>
        <Funnel.step name='A'>
          <Page1 />
        </Funnel.step>
        <Funnel.step name='B'>
          <Page2 />
        </Funnel.step>
        <Funnel.step name='C'>
          <Page3 />
        </Funnel.step>
        <Funnel.step name='D'>
          <Page4 />
        </Funnel.step>
      </Funnel>
    </>
  );
}
