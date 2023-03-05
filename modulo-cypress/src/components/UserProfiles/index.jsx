import { useFieldArray } from "react-hook-form";
import InputField from "../InputField";
import styles from "./UserProfiles.module.css";

const UserProfiles = () => {
  const { fields, append, remove } = useFieldArray({
    name: "userProfiles",
  });

  const addProfile = () => append({ value: "" });

  const removeProfile = (index) => remove(index);

  return (
    <div>
      <div className="containerPerfil">
        <h3>Crie um perfil:</h3>

        <button
          id="add-profile-btn"
          type="button"
          onClick={addProfile}
          className={styles.addButton}
        >
          +
        </button>
      </div>

      {fields.map((field, index) => (
        <div className={styles.profilesContainer} key={field.id}>
          <InputField
            name={`userProfiles.${index}.value`}
            placeholder="Nome do perfil"
            data-testid="add-profile-input"
          />

          <button
            type="button"
            className={styles.removeButton}
            onClick={() => removeProfile(index)}
          >
            x
          </button>
        </div>
      ))}
    </div>
  );
};

export default UserProfiles;
