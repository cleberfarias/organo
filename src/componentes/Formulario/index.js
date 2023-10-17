import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [imagem, setImagem] = useState('')
    const [parentesco, setParentesco] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            sobrenome,
            imagem,
            parentesco
        })
        setNome('')
        setSobrenome('')
        setImagem('')
        setParentesco('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do membro familiar</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)} />
                <CampoTexto
                    obrigatorio={true}
                    label="Sobrenome"
                    placeholder="Digite seu Sobrenome"
                    valor={sobrenome}
                    aoAlterado={valor => setSobrenome(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    placeholder="Qual é seu parentesco..."
                    obrigatorio={true}
                    label="Parentesco"
                    itens={props.parentescos}
                    valor={parentesco}
                    aoAlterado={valor => setParentesco(valor)}

                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
            
        </section>
    )
}
export default Formulario