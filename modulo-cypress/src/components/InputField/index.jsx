import React from "react";
import { useFormContext } from "react-hook-form";
import styles from "./input.module.css";

const InputField = ({ name, placeholder = name, autocomplete }) => {
  const { register } = useFormContext();

  return (
    <React.Fragment>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          list={name}
          placeholder={placeholder}
          {...register(name, { required: true })}
        />
      </div>
      {autocomplete?.length ? (
        <datalist id={name}>
          {autocomplete.map((op) => (
            <option value={op} key={op}></option>
          ))}
        </datalist>
      ) : null}
    </React.Fragment>
  );
};

export default InputField;
