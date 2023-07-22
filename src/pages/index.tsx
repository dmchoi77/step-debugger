import { useEffect, useState } from 'react';

import StepDebugger, { RoutePath } from '~/components/step/StepDebugger';

import { StepEnum, Register, registerDefaultState, StepType } from '~/types/step.types';
import PageA from './pageA';
import PageB from './pageB';
import PageC from './pageC';
import PageD from './pageD';
import { useRouter } from 'next/router';
import useFunnel from '~/hooks/useFunnel';

const isDev = process.env.NODE_ENV === 'development';

export default function Home() {
  const [register, setRegister] = useState<Register>(registerDefaultState);
  const router = useRouter();

  // const getGraph = (step: string, children: ReactElement[]) => {
  //   const result: string[] | ['graph TD'];

  //   children.map((stepElement) => {
  //     const stepName = stepElement.props.name;
  //     const children = stepElement.props.children;
  //   });
  // };

  const [setCurrentStep, Funnel] = useFunnel(['pageA', 'pageB', 'pageC', 'pageD'] as const);

  const onNext = (step: StepEnum) => {
    let url = '/';
    switch (step) {
      case StepEnum.PageA:
        url = RoutePath.PageA;
        break;
      case StepEnum.PageB:
        url = RoutePath.PageB;
        break;
      case StepEnum.PageC:
        url = RoutePath.PageC;
        break;
      case StepEnum.PageD:
        url = RoutePath.PageD;
    }
    router.push('/', url, { shallow: true });
    setCurrentStep(step);
  };

  return (
    <>
      <Funnel>
        <Funnel.step name={StepEnum.PageA}>
          <PageA onNext={() => onNext(StepEnum.PageB)} />
        </Funnel.step>
        <Funnel.step name={StepEnum.PageB}>
          <PageB onNext={() => onNext(StepEnum.PageC)} />
        </Funnel.step>
        <Funnel.step name={StepEnum.PageC}>
          <PageC onNext={() => onNext(StepEnum.PageD)} />
        </Funnel.step>
        <Funnel.step name={StepEnum.PageD}>
          <PageD />
        </Funnel.step>
      </Funnel>
      {isDev && <StepDebugger setStep={setCurrentStep} />}
    </>
  );
}
