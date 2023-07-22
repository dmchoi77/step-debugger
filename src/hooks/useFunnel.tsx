import React from 'react';

import { useState } from 'react';

import { StepType } from '~/types/step.types';

// type StepType = readonly StepEnum[];

type FunnelProps = {
  children: React.ReactNode;
};

type FunnelStepProps = {
  children: React.ReactNode;
  name: StepType;
};

const useFunnel = (initialStep: any) => {
  const [currentStep, setCurrentStep] = useState<StepType>(initialStep[0]);

  const Funnel: React.FC<FunnelProps> & {
    step: React.FC<FunnelStepProps>;
  } = ({ children }) => {
    const currentStepIndex = React.Children.toArray(children).findIndex(
      (child) => (child as React.ReactElement).props.name === currentStep,
    );

    const currentPage =
      currentStepIndex !== -1 ? (children as React.ReactElement[])[currentStepIndex] : null;

    return <div>{currentPage}</div>;
  };

  const FunnelStep: React.FC<FunnelStepProps> = ({ children, name }) => {
    return <div name={name}>{children}</div>;
  };

  Funnel.step = FunnelStep;

  return [setCurrentStep, Funnel] as const;
};

export default useFunnel;
