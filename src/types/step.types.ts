export type StepType = (typeof Step)[keyof typeof Step];

export enum Step {
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
