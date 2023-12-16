import Colaborador from '../Colaborador/Colaborador';
import './Time.css';

const Time = ({ nome, corPrimaria, corSecundaria, colaboradores, aoDeletar }) => {
    const css = { backgroundColor: corSecundaria };

    return (
        <section className='time' style={css}>
            <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
            {colaboradores.length > 0 ? (
                <div className='colaboradores'>
                    {colaboradores.map((colaborador) => (
                        <Colaborador
                            corDeFundo={corPrimaria}
                            key={colaborador.nome}
                            nome={colaborador.nome}
                            sobrenome={colaborador.sobrenome}
                            imagem={colaborador.imagem}
                            aoDeletar={() => aoDeletar(colaborador.id)} // Certifique-se de que o id seja passado corretamente
                        />
                    ))}
                </div>
            ) : (
                <p>Sem colaboradores associados a este parentesco.</p>
            )}
        </section>
    );
};

export default Time;