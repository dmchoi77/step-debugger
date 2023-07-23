import React, { createContext, ReactElement, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { StepEnum, StepType } from '~/types/step.types';

type AppContextType = {
  currentStep: StepType;
  handleNext: (step: StepType) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export const AppProvider: React.FC<{ children: ReactElement | ReactElement[] }> = ({
  children,
}) => {
  const [currentStep, setCurrentStep] = useState<StepType>('pageA');

  const router = useRouter();

  const handleNext = (step: StepType) => {
    setCurrentStep(step);
    router.push(`/${step}`, undefined, { shallow: true });
  };

  return <AppContext.Provider value={{ currentStep, handleNext }}>{children}</AppContext.Provider>;
};
