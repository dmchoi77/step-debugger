export enum StepEnum {
  'pageA',
  'pageB',
  'pageC',
  'pageD',
}

export type StepType = keyof typeof StepEnum;

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
