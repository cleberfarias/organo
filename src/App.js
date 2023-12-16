import { useState, useEffect } from "react";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import Rodape from "./componentes/Rodape/Rodape";
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [colaboradores, setColaboradores] = useState(
    JSON.parse(localStorage.getItem("colaboradores")) || []
  );

  useEffect(() => {
    localStorage.setItem("colaboradores", JSON.stringify(colaboradores));
  }, [colaboradores]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    // Adicione um id único ao colaborador usando uuidv4()
    const novoColaborador = { ...colaborador, id: uuidv4() };
    setColaboradores([...colaboradores, novoColaborador]);
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
      nome: 'Genros e Nora',
      corPrimaria: '#E9967A',
      corSecundaria: '#FFA07A',
    }
  ]);

  const deletarColaborador = (colaboradorId) => {
    const novosColaboradores = colaboradores.filter(
      (colaborador) => colaborador.id !== colaboradorId
    );
    setColaboradores(novosColaboradores);
  };


  return (
    <div className="App">
      <Banner />
      <Formulario
      
      />
      <div>
        <section>
          <h1 className="organização">Minha Organização</h1>
        </section>
      </div>
      {parentescos.map((parentesco) => {
        const colaboradoresAssociados = colaboradores.filter(
          (colaborador) => colaborador.parentesco === parentesco.nome
        );

        if (colaboradoresAssociados.length > 0) {
          return (
            <Time
              key={parentesco.nome}
              nome={parentesco.nome}
              corPrimaria={parentesco.corPrimaria}
              corSecundaria={parentesco.corSecundaria}
              colaboradores={colaboradoresAssociados}
              aoDeletar={deletarColaborador} // Não precisa da função anônima aqui
            />
          );
        }

        return null;
      })}
      <Rodape />
    </div>
  );
}

export default App;