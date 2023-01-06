import React from "react";

type ButtonTabComponent = {
    label: string,
}

const ButtonTabComponent: React.FC<ButtonTabComponent> = ({ label }) => {
    return <button className="buttonTab">{label}</button>;
};

export default ButtonTabComponent;