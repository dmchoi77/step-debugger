import Head from 'next/head';

import { useState } from 'react';

import PageA from '../components/pageA/PageA';
import PageB from '~/components/pageB/PageB';
import PageC from '~/components/pageC/PageC';
import PageD from '~/components/pageD/PageD';

import Show from '~/components/step/Show';

import StepDebugger from '~/components/step/StepDebugger';

import { Step, Register, registerDefaultState, StepType } from '~/types/step.types';
import Join from '~/components/join/Join';

export default function Home() {
  const [step, setStep] = useState<StepType>(Step.Home);
  const [register, setRegister] = useState<Register>(registerDefaultState);

  return (
    <>
      <Head>
        <title>Step Debugger</title>
        <meta name='description' content='Step debugger using mermaid.js' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Show isShow={step === Step.Home}>
        <Join />
      </Show>
      <Show isShow={step === Step.PageA}>
        <PageA />
      </Show>
      <Show isShow={step === Step.PageB}>
        <PageB />
      </Show>
      <Show isShow={step === Step.PageC}>
        <PageC />
      </Show>
      <Show isShow={step === Step.PageD}>
        <PageD />
      </Show>
      {process.env.NODE_ENV === 'development' && <StepDebugger setStep={setStep} />}
    </>
  );
}
