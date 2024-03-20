import { styled } from 'styled-components';

const RodapeEstilizado = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 100px;
    background-color: #04244F;
    padding: 22px;
    box-sizing: border-box;
`;

const IconeContainer = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    li {
        display: inline-block;
        margin-right: 32px;
    }
`;
const IconeEstilizado = styled.img`
width: 33px;    
height: 33px;
`

const RodapeTexto = styled.p`
    font-size: 16px;
    color: white;
    margin: 0;
`;

function Rodape() {
    return (
        <RodapeEstilizado>
            <IconeContainer>
                <li>
                    <a href="https://github.com/Ian-Alemida"target="_blank" rel="noreferrer noopener">
                        <IconeEstilizado src="/imagens/sociais/github.svg" alt="" />
                    </a>
                </li>
                <li>
                    <a href="www.linkedin.com/in/ian-almeida-3a707a240" target="_blank" rel="noreferrer noopener">
                        <IconeEstilizado src="/imagens/sociais/linkedin.svg" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/binary_jouney/?igshid=OGQ5ZDc2ODk2ZA%3D%3D%27" target="_blank" rel="noreferrer noopener">
                        <IconeEstilizado src="/imagens/sociais/instagram.svg" alt="" />
                    </a>
                </li>
            </IconeContainer>
            <RodapeTexto>Desenvolvido por Alura.</RodapeTexto>
        </RodapeEstilizado>
    );
}

export default Rodape;