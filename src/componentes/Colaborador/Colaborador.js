import './Colaborador.css'

const Colaborador = ({nome, sobrenome, parentesco, imagem, corDeFundo}) => {
    return (<div className='colaborador'> 
        <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
            <img src={imagem}  alt={nome}/>
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{sobrenome}</h5>
            <h6>{parentesco}</h6>
        </div>
    </div>)
}

export default Colaborador