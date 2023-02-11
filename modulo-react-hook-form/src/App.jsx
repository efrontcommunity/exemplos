import { useForm, FormProvider, useFormContext } from "react-hook-form";

function Senha() {
  const { register } = useFormContext();
  return <input {...register("senha")} />;
}

const onSubmit = (data) => console.log(data);

function App() {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <input {...methods.register("nome")} />
        <Senha />
        <input type="submit" />
      </form>
    </FormProvider>
  );
}

export default App;
