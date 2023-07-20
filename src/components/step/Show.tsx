import { ReactElement } from 'react';

const Show = ({ isShow, children }: { isShow: boolean; children: ReactElement }) => {
  if (isShow) return children;
  return null;
};

export default Show;
