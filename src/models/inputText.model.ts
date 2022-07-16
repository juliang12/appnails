import { ChangeEvent } from "react";

export interface TextInputTypes {
    label?: string;
    type?: string;
    name?: string;
    placeholder?: string;
    value?: string;
    className?: string;
    onChange?: ChangeEvent | any;
  }