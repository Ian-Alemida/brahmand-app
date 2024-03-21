import { styled } from 'styled-components';
import tags from './tags.json'
import { useState } from 'react';

const TagsContainer = styled.section`
    display: flex;
    align-items: center;
    gap: 64px;
    margin-top: 56px;
`

const TagTitulo = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
`;

const Tag = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid ${props => props.$ativo ? '#C98CF1' : 'transparent'};
    &:hover {
        border-color: #C98CF1;
    }
`

const Div = styled.div`
    display: flex;
    gap: 24px;
    justify-content: end;
`

const Tags = ({setTag}) => {

    const [tagAtiva, setTagAtiva] = useState(0)
    const handleTagClick = (tagId) => {
        setTag(tagId);
        setTagAtiva(tagId);
    };
    return <TagsContainer>
        <TagTitulo>Busque por tags:</TagTitulo>
        <Div>
            {tags.map(tag => <Tag 
                key={tag.id} 
                $ativo={tag.id === tagAtiva}
                onClick={() => handleTagClick(tag.id)}
            >{tag.titulo}</Tag>)}
        </Div>
    </TagsContainer>
}

export default Tags