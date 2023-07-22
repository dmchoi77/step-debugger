import { ReactElement } from 'react';
import { StepType } from '~/types/step.types';

const Step = ({ children, name }: { children: ReactElement; name: StepType }) => {
  if (typeof children.type === 'function' && name === children.type.name) {
    return children;
  }
  return null;
};

export default Step;
