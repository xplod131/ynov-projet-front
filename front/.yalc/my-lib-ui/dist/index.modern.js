import React from 'react';

var InputComponent = function InputComponent(props) {
  var label = props.label;
  return React.createElement("div", {
    className: "my-lib-ui-form-field"
  }, React.createElement("label", {
    className: "my-lib-ui-label"
  }, label), React.createElement("input", Object.assign({}, props, {
    className: "my-lib-ui-input"
  })));
};

var ButtonComponent = function ButtonComponent(_ref) {
  var label = _ref.label,
      onClick = _ref.onClick;
  return React.createElement("button", {
    onClick: onClick
  }, label);
};

var RadioButtonComponent = function RadioButtonComponent(props) {
  return React.createElement("div", {
    className: "my-lib-ui-radio-container"
  }, React.createElement("legend", null, "Je suis : "), React.createElement("br", null), React.createElement("div", {
    className: "container-select-radio"
  }, React.createElement("div", null, React.createElement("input", {
    type: "radio",
    id: "entreprise",
    name: "unique",
    value: "Une entreprise"
  }), React.createElement("label", {
    htmlFor: "entreprise"
  }, "Une entreprise")), React.createElement("div", null, React.createElement("input", {
    type: "radio",
    id: "particulier",
    name: "unique",
    value: "Un particulier"
  }), React.createElement("label", {
    htmlFor: "particulier"
  }, "Un particulier"))));
};

var SelectComponent = function SelectComponent(props) {
  return React.createElement("div", {
    className: "my-lib-ui-form-field"
  }, React.createElement("select", Object.assign({
    className: "my-lib-ui-select"
  }, props), props.children));
};

var CheckboxComponent = function CheckboxComponent(props) {
  return React.createElement("div", {
    className: "container-my-lib-ui-checkbox"
  }, React.createElement("input", {
    type: "checkbox"
  }), React.createElement("legend", null, "J'atteste que je poss\xE8de un permis de conduire valide"));
};

export { ButtonComponent, CheckboxComponent, InputComponent as InputTextComponent, RadioButtonComponent, SelectComponent };
//# sourceMappingURL=index.modern.js.map
