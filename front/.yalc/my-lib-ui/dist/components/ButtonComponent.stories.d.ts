import React from "react";
import { ComponentStory } from "@storybook/react";
import ButtonComponent from "./ButtonComponent";
import "../index.scss";
declare const _default: import("@storybook/csf").ComponentAnnotations<import("@storybook/react").ReactFramework, React.PropsWithChildren<{
    label: string;
    onClick: () => void;
}>>;
export default _default;
export declare const CheckboxComponentView: ComponentStory<typeof ButtonComponent>;
