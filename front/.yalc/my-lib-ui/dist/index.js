function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

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

var InputPasswordComponent = function InputPasswordComponent(props) {
  var label = props.label;
  return React.createElement("div", {
    className: "my-lib-ui-form-field"
  }, React.createElement("label", {
    className: "my-lib-ui-label"
  }, label), React.createElement("svg", {
    className: "my-lib-ui-label-svg",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    preserveAspectRatio: "xMidYMid meet",
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3z"
  })), React.createElement("input", Object.assign({}, props, {
    className: "my-lib-ui-input"
  })));
};

exports.ButtonComponent = ButtonComponent;
exports.CheckboxComponent = CheckboxComponent;
exports.InputPasswordComponent = InputPasswordComponent;
exports.InputTextComponent = InputComponent;
exports.RadioButtonComponent = RadioButtonComponent;
exports.SelectComponent = SelectComponent;
//# sourceMappingURL=index.js.map
