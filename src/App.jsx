import styled from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import Banner from "./componentes/Banner"

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);;
  width: 100%;
  min-height: 100vh;
  margin-right: 60px;
`
const FlexContaienr = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 42px;
`

function App() {

  return (
    <FundoGradiente>
      <EstilosGlobais/>
      <Cabecalho/>
      <FlexContaienr>
        <BarraLateral/>
        <Banner 
          texto={'A galeria mais completa de fotos do espaço!'}
          backgroundImage={'./imagens/Banner.png'}
        />
      </FlexContaienr>
    </FundoGradiente>
  )
}

export default App
