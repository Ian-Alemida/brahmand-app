import { styled } from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import Banner from "./componentes/Banner"
import bannerBackground from './assets/banner.png'
import Galeria from "./componentes/Galeria"
import fotos from './fotos.json'
import { useEffect, useState } from "react"
import ModalZoom from "./componentes/ModalZoom"
import Rodape from "./componentes/Rodape"
import NextConjunto from "./componentes/NextConjunto"

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const App = () => {
  //-------- Estados da aplicação
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos.sort(() => Math.random() - 0.5))//ordena as fotos de maneira aleatória
  const [fotoSelecionada, setFotoSelecionada] = useState(null)
  const [filtroBusca, setFiltroBusca] = useState('')
  const [tag, setTag] = useState(0)

  //Dividindo fotos em conjuntos
  const primeiroConjunto = fotosDaGaleria.slice(0, 8);
  const segundoConjunto = fotosDaGaleria.slice(8, 16);
  const [conjunto, setConjunto] = useState(primeiroConjunto)

  //Função que ignora acentos das palavras
  const removeAcentos = (string) => {
    return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  //Utilizando o useEffect para filtrar a busca
  useEffect(() => {
    const fotosFiltradas = fotos.filter(foto => {
      const tituloSemAcento = removeAcentos(foto.titulo.toLowerCase())
      const filtroPorTitulo = !filtroBusca || tituloSemAcento.includes(filtroBusca.toLowerCase());
      const filtroPorTags = !tag || foto.tagId === tag
      return filtroPorTitulo && filtroPorTags
    })
    setFotosDaGaleria(fotosFiltradas)
  }, [filtroBusca, tag]);

  //Função que favorita as fotos
  const aoFavoritar = (foto) => {
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita
      })
    }
    setFotosDaGaleria(fotosDaGaleria.map(fotoDaGaleria => {
      return {
        ...fotoDaGaleria,
        favorita: fotoDaGaleria.id === foto.id ? !foto.favorita : fotoDaGaleria.favorita
      }
    }))
  }

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho setFiltroBusca={setFiltroBusca} />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner
              texto="A galeria mais completa de fotos misticas!"
              backgroundImage={bannerBackground} />
            <Galeria
              aoFavoritar={aoFavoritar}
              aoFotoSelecionada={foto => setFotoSelecionada(foto)}
              setTag={setTag}
              fotos={tag !== 0 || filtroBusca !== '' ? fotosDaGaleria : conjunto} />
          </ConteudoGaleria>
        </MainContainer>
        <NextConjunto conjunto1={primeiroConjunto} conjunto2={segundoConjunto} setConjunto={setConjunto}/>
      </AppContainer>
      <Rodape />
      <ModalZoom
        foto={fotoSelecionada}
        aoFechar={() => setFotoSelecionada(null)}
        aoFavoritar={aoFavoritar} />
    </FundoGradiente>
  )
}

export default App