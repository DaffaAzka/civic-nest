import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import type { HTMLInputTypeAttribute } from "react";

export default function InputField({
  name,
  type = "text",
  label,
  placeholder,
  description,
  error,
  onChange,
}: {
  name: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  label?: string;
  description?: string;
  error?: string;
  onChange?: () => void;
}) {
  return (
    <Field data-invalid={error ? true : undefined}>
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
      {error ?
        <FieldDescription>{error}</FieldDescription>
      : <></>}
    </Field>
  );
}
