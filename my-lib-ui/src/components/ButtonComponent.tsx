import React from "react";

type ButtonComponentProps = {
  label: string,
  onClick: () => void
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({label, onClick}) => {
  return <button onClick={onClick}>{label}</button>;
};

export default ButtonComponent;
