import React from "react";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { label: string };

const RadioButtonComponent: React.FC<Props> = (props) => {
  return (
    <div className="my-lib-ui-radio-container">
      <legend>Je suis : </legend><br />
      <div className="container-select-radio">
        <div>
          <input type="radio" id="entreprise" name="unique" value="Une entreprise" />
          <label htmlFor="entreprise">Une entreprise</label>
        </div>

        <div>
          <input type="radio" id="particulier" name="unique" value="Un particulier" />
          <label htmlFor="particulier">Un particulier</label>
        </div>
      </div>

    </div>);
};

export default RadioButtonComponent;
