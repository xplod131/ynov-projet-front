import React from "react";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { label: string };

const CheckboxComponent: React.FC<Props> = (props) => {
  return (
    <div className="container-my-lib-ui-checkbox">
      <input type="checkbox" />
      <legend>J'atteste que je possède un permis de conduire valide</legend>
    </div>);
};

export default CheckboxComponent;
