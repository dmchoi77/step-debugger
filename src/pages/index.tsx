import useFunnel from '~/hooks/useFunnel';
import Page1 from '~/components/Page1';
import Page2 from '~/components/Page2';
import Page3 from '~/components/Page3';
import Page4 from '~/components/Page4';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { StepType } from '~/types/step.types';
import { Register, registerDefaultState } from '~/shared/register';

export default function Home() {
  const [register, setRegister] = useState<Register>(registerDefaultState);

  const { Funnel, handleNext, setCurrentStep } = useFunnel<StepType>(['A', 'B', 'C', 'D']);

  const router = useRouter();
  const pageQueryParams = router.query.page;

  useEffect(() => {
    if (pageQueryParams) return setCurrentStep(pageQueryParams as StepType);
    setCurrentStep('A');
  }, [pageQueryParams]);

  return (
    <>
      <Funnel>
        <Funnel.step name='A'>
          <Page1 onNext={() => handleNext('B')} register={register} setRegister={setRegister} />
        </Funnel.step>
        <Funnel.step name='B'>
          <Page2 onNext={() => handleNext('C')} register={register} setRegister={setRegister} />
        </Funnel.step>
        <Funnel.step name='C'>
          <Page3 onNext={() => handleNext('D')} register={register} setRegister={setRegister} />
        </Funnel.step>
        <Funnel.step name='D'>
          <Page4 onNext={() => handleNext('A')} setRegister={setRegister} />
        </Funnel.step>
      </Funnel>
    </>
  );
}
