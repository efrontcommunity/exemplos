import { FormProvider, useForm } from "react-hook-form";
import InputField from "./components/InputField";
import SelectField from "./components/SelectField";
import UserProfiles from "./components/UserProfiles";

const App = () => {
  const methods = useForm({ mode: "onChange" });
  const onSubmit = methods.handleSubmit(() => {
    alert("Conta registrada com sucesso!");
  });

  return (
    <div className="container">
      <h1>Crie sua conta</h1>
      <FormProvider {...methods}>
        <form onSubmit={onSubmit}>
          <InputField name="Nome" />
          <InputField name="Sobrenome" />
          <InputField name="Email" />
          <SelectField name="Plano" options={["Básico", "Padrão", "Premium"]} />
          <UserProfiles />
          <button disabled={!methods.formState.isValid}>Confirmar</button>
        </form>
      </FormProvider>
    </div>
  );
};

export default App;
