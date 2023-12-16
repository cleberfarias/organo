import { useState, useEffect } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Resizer from 'react-image-file-resizer'; // Importa a biblioteca de redimensionamento de imagem
import './Formulario.css';


const Formulario = (props) => {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [imagem, setImagem] = useState('');
    const [parentesco, setParentesco] = useState('');
    const [previewImagem, setPreviewImagem] = useState('');
    

    const redimensionarImagem = (file) => {
        Resizer.imageFileResizer(
            file,
            200, // Largura desejada
            200, // Altura desejada
            'JPEG', // Formato de saída
            100, // Qualidade
            0, // Rotação
            (uri) => {
                setPreviewImagem(uri);
            },
            'base64' // Tipo de saída (base64)
        );
    };

    const handleImagemChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            redimensionarImagem(file);
            setImagem(file);
        }
    };

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            sobrenome,
            imagem: previewImagem || imagem,
            parentesco,
        });
        setNome('');
        setSobrenome('');
        setImagem('');
        setParentesco('');
        setPreviewImagem('');
    };
    

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do membro familiar</h2>
                <CampoTexto
                    obrigatorio={true}
                    label='Nome'
                    placeholder='Digite seu nome'
                    valor={nome}
                    aoAlterado={(valor) => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label='Sobrenome'
                    placeholder='Digite seu Sobrenome'
                    valor={sobrenome}
                    aoAlterado={(valor) => setSobrenome(valor)}
                />
                <div className='campo-imagem'>
                    <label htmlFor='imagem'></label>
                    <div className='upload-btn-wrapper'>
                        <button className='btn'>Escolher Imagem</button>
                        <input
                            type='file'
                            name='imagem'
                            id='imagem'
                            accept='image/*'
                            onChange={handleImagemChange}
                        />
                    </div>
                </div>
                {previewImagem && (
                    <div className='preview-imagem'>
                        <img src={previewImagem} alt='Preview' />
                    </div>
                )}
                <ListaSuspensa
                    placeholder='Qual é seu parentesco...'
                    obrigatorio={true}
                    label='Parentesco'
                    itens={props.parentescos}
                    valor={parentesco}
                    aoAlterado={(valor) => setParentesco(valor)}
                />
                <Botao>Criar Card</Botao>
            </form>
            
        </section>
    );
};

export default Formulario;
