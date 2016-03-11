import * as React from 'react';
import classNames from 'classnames';

const statusClasses = {
  info: 'bg-blue white',
  warning: 'bg-yellow black',
  success: 'bg-green black',
  error: 'bg-red white',
};

interface IAlertProps extends React.Props<any> {
  isVisible: boolean;
  status?: string;
};

const Alert = ({
  children = null,
  isVisible,
  status = 'info',
}: IAlertProps) => {
  const alertClasses = classNames(['p2', 'bold'], {
    block: isVisible,
    hide: !isVisible,
    [statusClasses[status]]: true,
  });

  return (
    <div
      className={ alertClasses }>
      { children }
    </div>
  );
};

export default Alert;
