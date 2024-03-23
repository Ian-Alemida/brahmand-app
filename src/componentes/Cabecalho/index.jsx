import { styled } from "styled-components"
import CampoTexto from "../CampoTexto"

const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
`
const ImgCabecalho = styled.img`
width: 252px;
height: 108px;
`
const Cabecalho = ({setFiltroBusca}) => {
    return (<HeaderEstilizado>
        <ImgCabecalho src='/imagens/logo.png' alt="" />
        <CampoTexto setFiltroBusca={setFiltroBusca}/>
    </HeaderEstilizado>)
}

export default Cabecalho