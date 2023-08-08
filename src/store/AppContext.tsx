import React, { createContext, ReactElement, useContext, useState, Dispatch } from 'react';
import { StepType } from '~/types/step.types';

type AppContextType = {
  currentStep: StepType;
  setCurrentStep: Dispatch<React.SetStateAction<StepType>>;
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
  const [currentStep, setCurrentStep] = useState<StepType>('A');

  return (
    <AppContext.Provider value={{ currentStep, setCurrentStep }}>{children}</AppContext.Provider>
  );
};
