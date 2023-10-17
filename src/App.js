import { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import Rodape from "./componentes/Rodape/Rodape";


function App() {
  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }
  const parentescos = [

    {
      nome: 'Mãe e Pai',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
    },

    {
      nome: 'Avô e Avó',
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
      nome: 'Genro',
      corPrimaria: '#E9967A',
      corSecundaria: '#FFA07A',
    }
  ]
  return (
    <div className="App">
      <Banner />
      

      <Formulario parentescos={parentescos.map(parentesco => parentesco.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      <div>
        <section>
          <h1 className="organização">Minha Organização</h1>
        </section>
      </div>
      {parentescos.map(parentesco => <Time
        key={parentesco.nome}
        nome={parentesco.nome}
        corPrimaria={parentesco.corPrimaria}
        corSecundaria={parentesco.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.parentesco === parentesco.nome)}

      />)}
      <footer className="rodape">
            <img src="./imagens/rodapé.svg" alt="O Rodapé principal da página do Organo"/>
      </footer>
    </div>
    
  );
}

export default App;
