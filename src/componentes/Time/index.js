import Colaborador from '../Colaborador/Colaborador'
import './Time.css'

const Time = (time, colaboradores, aoDeletar,mudarCor) => {
    const css = { backgroundColor: time.corSecundaria }
    return (
        time.colaboradores.length > 0 && (
            <section className='time' style={css}>
                <h3 style={{ borderColor: time.corPrimaria }}>{time.nome}</h3>
                <div className='colaboradores'>
                    {time.colaboradores.map((colaborador) => (
                        <Colaborador
                            corDeFundo={time.corPrimaria}
                            key={colaborador.nome}
                            nome={colaborador.nome}
                            sobrenome={colaborador.sobrenome}
                            imagem={colaborador.imagem}
                            aoDeletar={aoDeletar}
                        />
                    ))}
                </div>
            </section>
        )
    );
};

export default Time;