import React from "react";
import { useFormContext } from "react-hook-form";

const SelectField = ({ options, name }) => {
  const { register } = useFormContext();

  return (
    <select {...register(name)} defaultValue="default">
      <option key="default" value="default" disabled hidden>
        Escolha um plano
      </option>
      {options.map((op) => (
        <option key={op} value={op}>
          {op}
        </option>
      ))}
    </select>
  );
};

export default SelectField;
