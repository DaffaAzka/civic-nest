import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import type { HTMLInputTypeAttribute } from "react";

export default function InputField({
  name,
  type = "text",
  label,
  placeholder,
  description,
  onChange,
}: {
  name: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  label?: string;
  description?: string;
  onChange?: () => void;
}) {
  return (
    <Field>
      {label ?
        <FieldLabel htmlFor={`input-field-${name}`}>{label}</FieldLabel>
      : <></>}
      <Input
        id={`input-field-${name}`}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
      {description ?
        <FieldDescription>{description}</FieldDescription>
      : <></>}
    </Field>
  );
}
