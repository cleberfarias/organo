import { AiFillCloseCircle } from "react-icons/ai";
import './Colaborador.css'



const Colaborador = ({ colaborador, nome, sobrenome, parentesco, imagem, corDeFundo, aoDeletar }) => {
    return (<div className='colaborador'>
        <AiFillCloseCircle
            size={25}
            className='deletar'
            onClick={() => aoDeletar(colaborador && colaborador.id)}
        />

        <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
            <img src={imagem} alt={nome} />
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{sobrenome}</h5>
            <h6>{parentesco}</h6>
        </div>
    </div>)
}

export default Colaborador