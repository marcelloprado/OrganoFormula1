import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {

  const times = [
    {
      nome: 'Red Bull',
      corPrimaria: '#1f2c54',
      corSecundaria: '#536089',
    },
    {
      nome: 'Ferrari',
      corPrimaria: '#F80C08',
      corSecundaria: '#ef7775',
    },
    {
      nome: 'Mercedes',
      corPrimaria: '#0E0D12',
      corSecundaria: '#585c66',
    },
    {
      nome: 'McLaren',
      corPrimaria: '#FF8808',
      corSecundaria: '#d39b5f',
    },
    {
      nome: 'Alpine',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5',
    },
    {
      nome: 'Alfa Romeu',
      corPrimaria: '#931529',
      corSecundaria: '#913845',
    },
    {
      nome: 'Aston Martin',
      corPrimaria: '#083C3C',
      corSecundaria: '#1d6666',
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    debugger
    setColaboradores([...colaboradores, colaborador]);
  }

  return (
    <>
      <div className="App">
        <Banner />
        <Formulario times={times.map(time => time.nome)}
          aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />

        {times.map(time => <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        />)}
        <Rodape />
      </div>

    </>
  );
}

export default App;