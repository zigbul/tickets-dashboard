import styled from 'styled-components';

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: ${({ margin }) => margin || "0"};
padding: 0 14px 0 32px;
border-left: 1px solid #DFE0EB;
`

const UserName = styled.p`
font-weight: 600;
font-size: 14px;
line-height: 20px;
text-align: right;
letter-spacing: 0.2px;
`
const Avatar = styled.img`
padding-left: 14px;
width: 58px;
height: 44px;
`

const UserBlock = ({ margin, name, avatarUrl }) => {
    return (
        <Wrapper margin={margin}>
            <UserName>{name}</UserName>
            <Avatar src={avatarUrl} />
        </Wrapper>
    );
};

export default UserBlock;