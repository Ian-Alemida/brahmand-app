import styled from 'styled-components'
import TagsJson from './tags.json'

const ContainerTags = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    position: relative;
    p{
        font-size: 24px;
        color: #d9d9d9;
        line-height: 28.4px;
    }
    button{
        font-size: 24px;
        color: #FFFFFF;
        background: rgba(217, 217, 217, 0.3);
        border-radius: 10px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        padding: 12px;
        box-sizing: border-box;
        border: 2px solid transparent;
        &:hover {
            border-color: #C98CF1;
        }
    }
`
function Tags() {
    return (
        <ContainerTags>
            <p>Busque por tags: </p>
            {TagsJson.map((tag) => <button key={tag.id}>{tag.titulo}</button>)}
        </ContainerTags>
    )
}

export default Tags