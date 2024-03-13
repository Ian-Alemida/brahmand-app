import styled from "styled-components"
import BotaoIcone from "../../BotaoIcone"

const FlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 33px;
`
const Figure = styled.figure`
    width: ${(props) => (props.$expandida ? '90%' : '460px')};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
    }
    figcaption {
        background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 0 18px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 80px;
        h3 {
            font-family: 'GandhiSansBold';
            margin: 0;
            font-size: 20px;
        }
        footer{
            display: flex;
        }
    }
`
function Imagem({ fotos }) {
    return (
        <FlexContainer>
            {fotos.map(foto => 
                <Figure >
                    <img src={foto.path} alt="" />
                    <figcaption>
                        <h3>{foto.titulo}</h3>
                        <footer>
                            <BotaoIcone><img src={'/icones/favorito.png'} alt="" /></BotaoIcone>
                            <BotaoIcone><img src={'/icones/expandir.png'} alt="" /></BotaoIcone>
                        </footer>
                    </figcaption>
                </Figure>)}
        </FlexContainer>
    )
}

export default Imagem