import "./SwitchButton.css";

const SwitchButton = () => {
  return (
    <label className="switch">
      <input type="checkbox" />
      <span className="slider"></span>
    </label>
  );
};

export default SwitchButton;
