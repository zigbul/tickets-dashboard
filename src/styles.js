import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
height: 100vh;
background: #363740;
`

export const PageContainer = styled.div`
display: flex;
flex-direction: column;
margin-left: 255px;
padding: 36px 30px;
background: #F7F8FC;
`

export const PageHeader = styled.header`
display: flex;
padding-bottom: 24px;
`

export const PageTitle = styled.h1`
font-weight: bold;
font-size: 24px;
line-height: 30px;
letter-spacing: 0.3px;
color: #252733;
`

export const PageRow = styled.div`
display: flex;
flex-wrap: wrap;
padding: 30px 0;
&> * + * {
    margin-left: 30px;
} 
`