import styled from "styled-components"

const ItemNavegacaoEstilizado = styled.li`

`

function ItemNavegacao({children, iconeAtivo, iconeInativo, ativo = false}) {
    return (
        <ItemNavegacaoEstilizado>
            <img src={ativo ? iconeAtivo : iconeInativo} alt="" />
            {children}
        </ItemNavegacaoEstilizado>
    )
}

export default ItemNavegacao