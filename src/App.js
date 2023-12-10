import { useState, useEffect } from "react";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import Rodape from "./componentes/Rodape/Rodape";

function App() {
  // Carrega dados do localStorage no montar do componente
  const [colaboradores, setColaboradores] = useState(
    JSON.parse(localStorage.getItem("colaboradores")) || []
  );

  const aoNovoColaboradorAdicionado = (colaborador) => {
    const newColaboradores = [...colaboradores, colaborador];
    setColaboradores(newColaboradores);
    // Salva dados no localStorage quando um novo colaborador é adicionado
    localStorage.setItem("colaboradores", JSON.stringify(newColaboradores));
  };

  const [parentescos, setParentesco] = useState([
    {
      nome: 'Avô e Avó',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
    },

    {
      nome: 'Mãe e Pai',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },

    {
      nome: 'Filhos',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5',
    },
    {
      nome: 'Netos',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      nome: 'Bisnetos',
      corPrimaria: '#008000',
      corSecundaria: '#228B22',
    },

    {
      nome: 'Nora',
      corPrimaria: '#CD5C5C',
      corSecundaria: '#F08080',
    },
    {
      nome: 'Genro/Nora',
      corPrimaria: '#E9967A',
      corSecundaria: '#FFA07A',
    }
  
  ]);

  function deletarColaborador() {
    console.log("deletando colaborador");
  }

  useEffect(() => {
    // Salva dados de parentescos no localStorage quando eles mudam
    localStorage.setItem("parentescos", JSON.stringify(parentescos));
  }, [parentescos]);

  return (
    <div className="App">
      <Banner />
      <Formulario
        parentescos={parentescos.map((parentesco) => parentesco.nome)}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
      <div>
        <section>
          <h1 className="organização">Minha Organização</h1>
        </section>
      </div>
      {parentescos.map((parentesco) => (
        <Time
          key={parentesco.nome}
          nome={parentesco.nome}
          corPrimaria={parentesco.corPrimaria}
          corSecundaria={parentesco.corSecundaria}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.parentesco === parentesco.nome
          )}
          aoDeletar={deletarColaborador}
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;
