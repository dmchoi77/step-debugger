import { useState } from 'react';

import { StepEnum, Register, registerDefaultState } from '~/types/step.types';
import PageA from './pageA';
import PageB from './pageB';
import PageC from './pageC';
import PageD from './pageD';
import useFunnel from '~/hooks/useFunnel';

export default function Home() {
  // const [register, setRegister] = useState<Register>(registerDefaultState);

  const [_, Funnel] = useFunnel();

  return (
    <>
      <Funnel>
        <Funnel.step name={StepEnum.PageA}>
          <PageA />
        </Funnel.step>
        <Funnel.step name={StepEnum.PageB}>
          <PageB />
        </Funnel.step>
        <Funnel.step name={StepEnum.PageC}>
          <PageC />
        </Funnel.step>
        <Funnel.step name={StepEnum.PageD}>
          <PageD />
        </Funnel.step>
      </Funnel>
    </>
  );
}
