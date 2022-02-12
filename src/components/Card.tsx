import React from 'react';
import styled from 'styled-components';

const CardBody = styled.div`
display: flex;
flex-direction: column;
flex: 1;
padding: 24px 0;
background: #FFFFFF;
border: 1px solid #DFE0EB;
border-radius: 8px;
`

const CardTitle = styled.p`
margin-bottom: 12px;
font-weight: bold;
font-size: 19px;
line-height: 24px;
text-align: center;
letter-spacing: 0.4px;
color: #9FA2B4;
text-align: center;
`

const CardCounter = styled.p`
font-weight: bold;
font-size: 40px;
line-height: 50px;
text-align: center;
letter-spacing: 1px;
color: #252733;
`

const CardPercent = styled.span`
font-size:24px;
`

type Props = {
    title: String,
    counter: Number,
    percent?: Number,
}

const Card = ({ title, counter, percent }:Props) => {
    return (
        <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardCounter>
                {counter}
                <CardPercent>{percent && ` ${percent}%`}</CardPercent>
            </CardCounter>
        </CardBody>
    );
};

export default Card;