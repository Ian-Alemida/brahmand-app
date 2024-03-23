import { styled } from "styled-components"
import CampoTexto from "../CampoTexto"

const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img {
        width: 252px;
    }
`

const Cabecalho = ({setFiltroBusca}) => {
    return (<HeaderEstilizado>
        <img src='/imagens/logo.png' alt="" />
        <CampoTexto setFiltroBusca={setFiltroBusca}/>
    </HeaderEstilizado>)
}

export default Cabecalho