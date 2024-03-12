import styled from "styled-components"

const ItemNavegacaoEstilizado = styled.li`
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 22px;
    color: ${ props => props.$ativo ? '#7B78E5' : '#D9D9D9'};
`

function ItemNavegacao({children, iconeAtivo, iconeInativo, ativo = false}) {
    return (
        <ItemNavegacaoEstilizado $ativo={ativo}>
            <img src={ativo ? iconeAtivo : iconeInativo} alt="" />
            {children}
        </ItemNavegacaoEstilizado>
    )
}

export default ItemNavegacao