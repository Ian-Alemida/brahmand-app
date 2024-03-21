import styled from "styled-components"

const NextCustomizado = styled.button`
    width: 33px;
    height: 33px;
    border-radius: 50%;
    color: #fff;
    border-color: #C98CF1;
    background-color: transparent;
    cursor: pointer;
`
const DivCustomizada = styled.div`
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-top: 27px;
`

function NextConjunto ({setConjunto, conjunto1, conjunto2}){
    return (
        <DivCustomizada>
            <NextCustomizado onClick={() => setConjunto(conjunto1)}>1</NextCustomizado>
            <NextCustomizado onClick={() => setConjunto(conjunto2)}>2</NextCustomizado>
        </DivCustomizada>
    )
}

export default NextConjunto