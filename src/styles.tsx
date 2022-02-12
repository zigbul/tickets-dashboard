import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100vw;
height: 100vh;
background: #363740;
`

export const PageContainer = styled.div`
display: flex;
flex-direction: column;
min-height: 100vh;
margin-left: 255px;
padding: 36px 30px;
background: var(--colors-bg);
`

export const PageHeader = styled.header`
display: flex;
align-items: center;
padding-bottom: 24px;
`

export const PageTitle = styled.h1`
font-weight: bold;
font-size: 24px;
line-height: 30px;
letter-spacing: 0.3px;
color: var(--colors-text);
`

export const PageRow = styled.div`
display: flex;
align-items: center;
flex-wrap: wrap;
padding: 30px 0;
&> * + * {
    margin-left: 30px;
} 
`
export const Button = styled.button<{ margin: string, background: string}>`
display: flex;
justify-content: center;
align-items: center;
padding: 8px 20px;
margin: ${({ margin }) => margin || 0};
background: ${({ background }) => background || "#2F80ED"};
border: none;
border-radius: 8px;
font-weight: 600;
font-size: 14px;
line-height: 24px;
color: #FFFFFF;
`

export const PageContent = styled.div`
background: #FFFFFF;
border: 1px solid #DFE0EB;
border-radius: 8px;
`

export const PageContentHeader = styled.div`
display: flex;
align-items: center;
padding: 27px 32px;
`

export const PageContentTitle = styled.h3`
font-weight: bold;
font-size: 19px;
line-height: 24px;
letter-spacing: 0.4px;
color: #252733;
`