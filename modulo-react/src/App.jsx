import React, { useState, useEffect } from "react";

function App() {
  const [repositorio, setRepositorio] = useState([]);

  useEffect(() => {
    async function carregaRepositorios() {
      const resposta = await fetch(
        "https://api.github.com/users/iuricode/repos"
      );

      const repositorios = await resposta.json();
      setRepositorio(repositorios);
    }

    carregaRepositorios();
  }, []);

  return (
    <ul>
      {repositorio.map((repositorio) => (
        <li key={repositorio.id}>{repositorio.name}</li>
      ))}
    </ul>
  );
}
export default App;
