import fotos from './fotos.json'
import styled from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import Banner from "./componentes/Banner"
import Galeria from "./componentes/Galeria"
import { useState } from 'react'
import ModalZoom from './componentes/ModalZoom'

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
  margin-right: 60px;
`
const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`
const MainContaienr = styled.main`
  display: flex;
  gap: 24px;
`
const ConteudoGaleria = styled.section`
display: flex;
flex-direction: column;
flex-grow: 1;
`
function App() {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos)
  const [fotoSelecionada, setFotoSelecionada] = useState(null)
  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <MainContaienr>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner
              texto={'A galeria mais completa de fotos do espaço!'}
              backgroundImage={'./imagens/Banner.png'} />
            <Galeria 
              fotos={fotosDaGaleria}
              aoFotoSelecionada={foto => setFotoSelecionada(foto)}/>
          </ConteudoGaleria>
        </MainContaienr>
      </AppContainer>
      <ModalZoom foto={fotoSelecionada}/>
    </FundoGradiente>
  )
}

export default App
