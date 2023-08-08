import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';

import { StepType } from '~/types/step.types';

type FunnelStepProps = {
  children: React.ReactNode;
  name: StepType;
};

type FunnelProps = {
  children: React.ReactNode;
};

type Funnel = React.FC<FunnelProps> & { step?: any };

const useFunnel = <T,>(steps: T[]) => {
  const [currentStep, setCurrentStep] = useState<T>(steps[0]);

  const router = useRouter();

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

  const handleNext = (step: T) => {
    router.push(`/?page=${step}`, undefined, { shallow: true });
  };

  Funnel.step = FunnelStep;

  return { Funnel, handleNext, setCurrentStep } as const;
};

export default useFunnel;
