import styled from "styled-components"
import BotaoIcone from "../../BotaoIcone"

const FigureContainer = styled.figure`
width: 448px;
height: 336px;
color: #fff;
font-size: 20px;
font-weight: 700;
img{
    width: 100%;
    max-height: 256px;
    border-radius: 20px 20px 0 0;
    margin: 0;
}
figcaption{
    background: #001634;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0 0 20px 20px;
    height: 80px;
    padding: 0 24px;
    footer{
        display: flex;
    }
}
`

function Imagem({ fotos }) {
    return (
        <>
            {fotos.map(foto => 
                <FigureContainer>
                    <img src={foto.path} alt="" />
                    <figcaption>
                        <h3>{foto.titulo}</h3>
                        <footer>
                            <BotaoIcone><img src={'/icones/favorito.png'} alt="" srcset="" /></BotaoIcone>
                            <BotaoIcone><img src={'/icones/expandir.png'} alt="" srcset="" /></BotaoIcone>
                        </footer>
                    </figcaption>
                </FigureContainer>)}
        </>
    )
}

export default Imagem