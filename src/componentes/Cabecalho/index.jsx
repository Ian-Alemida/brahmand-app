import { styled } from "styled-components"
import CampoTexto from "../CampoTexto"
import logo from '../../../public/imagens/logo.png'

const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img {
        max-width: 252px;
    }
`

const Cabecalho = ({setFiltroBusca}) => {
    return (<HeaderEstilizado>
        <img src={logo} alt="" />
        <CampoTexto setFiltroBusca={setFiltroBusca}/>
    </HeaderEstilizado>)
}

export default Cabecalho