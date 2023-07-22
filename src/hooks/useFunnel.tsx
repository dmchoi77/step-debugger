import React from 'react';

import { useAppContext } from '~/store/AppContext';

import { StepType } from '~/types/step.types';

type FunnelProps = {
  children: React.ReactNode;
};

type FunnelStepProps = {
  children: React.ReactNode;
  name: StepType;
};

const useFunnel = () => {
  const { currentStep, handleNext } = useAppContext();

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
    return <div data-name={name}>{children}</div>;
  };

  Funnel.step = FunnelStep;

  return [handleNext, Funnel] as const;
};

export default useFunnel;
