export enum StepEnum {
  'A',
  'B',
  'C',
  'D',
}

export type StepType = keyof typeof StepEnum;
