import { Dispatch, SetStateAction } from 'react';

export type StepType = (typeof StepEnum)[keyof typeof StepEnum];

export enum StepEnum {
  Home = '시작',
  PageA = 'pageA',
  PageB = 'pageB',
  PageC = 'pageC',
  PageD = 'pageD',
}

export const registerDefaultState = {
  name: '',
  birth: '',
  phoneNo: '',
  accountNo: '',
  autoNo: '',
};

export type Register = {
  name: string;
  birth: string;
  phoneNo: string;
  accountNo: string;
  autoNo: string;
};

export interface CommonPageProps {
  onNext: Dispatch<SetStateAction<StepType>>;
}
