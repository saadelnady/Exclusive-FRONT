import "./styles/OptionButton.css";
export const OptionButton = ({
  action = {},
  handleShowWarning = () => {},
  setAction = () => {},
  id = "",
  actionHandler = () => {},
  buttonStyle = "",
  styles = {},
} = {}) => {
  const { type, Icon } = action;

  return (
    <button
      className={`option ${buttonStyle}`}
      onClick={() => {
        handleShowWarning();
        setAction({ ...action, id, actionHandler });
      }}
      styles={styles}
    >
      {Icon}
      {type?.EN}
    </button>
  );
};
