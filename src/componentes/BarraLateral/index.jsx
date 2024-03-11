import styled from "styled-components"
import ItemNavegacao from "./ItemNavegação"

const ListaEstilizada = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`

function BarraLateral() {
    return (
        <aside>
            <nav>
                <ListaEstilizada>
                    <ItemNavegacao>
                        Home
                    </ItemNavegacao>
                    <ItemNavegacao>
                        Mais Vistos
                    </ItemNavegacao>
                </ListaEstilizada>
            </nav>
        </aside>
    )
}

export default BarraLateral