import React, { useCallback, useState, Children } from 'react';

import { useAppContext } from '~/store/AppContext';
import { StepType } from '~/types/step.types';

type FunnelStepProps = {
  children: React.ReactNode;
  name: StepType;
};

type FunnelProps = {
  children: React.ReactNode;
};

type Funnel = React.FC<FunnelProps> & { step?: any };

const useFunnel = () => {
  const { currentStep, handleNext } = useAppContext();

  const Funnel: Funnel = useCallback(
    ({ children }) => {
      const currentStepIndex = React.Children.toArray(children).findIndex((child) => {
        return (child as React.ReactElement).props.name === currentStep;
      });

      const currentPage =
        currentStepIndex !== -1 ? (children as React.ReactElement[])[currentStepIndex] : null;

      return <div>{currentPage}</div>;
    },
    [currentStep],
  );

  const FunnelStep: React.FC<FunnelStepProps> = useCallback(({ children, name }) => {
    return <div data-name={name}>{children}</div>;
  }, []);

  Funnel.step = FunnelStep;

  return { handleNext, Funnel } as const;
};

export default useFunnel;
