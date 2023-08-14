import "../style/ErrorContainer.css";

const ErrorContainer = ({ msg }) => {
  return <div className='error--message'>{msg}</div>;
};

export default ErrorContainer;
