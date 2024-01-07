import css from './notification.module.css';

const Notification = ({ message }) => {
  return (<p className={css.message}>{message}</p>);
};

export { Notification };
