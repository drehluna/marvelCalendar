import styled from "styled-components";
import AvengersBackground from '../../images/AvengersBackground.jpg'

export const WrapperPrincipal = styled.div `
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ), url(${AvengersBackground});
    background-size: 100%;
    filter: drop-shadow(4px 4px red);
`

export const WrapperHeader = styled.div `

    display: flex;
    padding: 25px 130px;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(0,0,0, 0.6);

`

export const Navigation = styled.nav `
    display: flex;
    gap: 24px;

`

export const MarvelTitle = styled.h1 `
    color: #ED181F;
    font-family: 'Montserrat';
    font-weight: 700;
`

export const ContainerLogin = styled.div `
    width: 50%;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    margin-top: 60px;
`

export const ParagraphInformation = styled.p `

    color: #FFF;
    font-family: Montserrat;
    font-size: 30px;
    margin-left: 130px;
`

export const Button = styled.button `

    background-color: #ED181F;
    width: ${props => props.width ? `${props.width + 'px;'}` : '340px;'}
    border: none;
    height: ${props => props.height ? `${props.height + 'px;'}` : '50px;'}
    border-radius: 8px;
    color: #FFF;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    cursor: pointer;
    margin-left: -120px;
    &:active {
        transform: scale(0.9);
    }

`

export const WelcomeMessage = styled.p `
    color: #FFFF;
    font-family: Montserrat;

`

export const Nav = styled.nav `

    background-color: #ED181F;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${props => props.width ? `${props.width + 'px;'}` : '340px;'}
    border: none;
    height: ${props => props.height ? `${props.height + 'px;'}` : '50px;'}
    border-radius: 8px;
    font-family: Montserrat;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    cursor: pointer;
    margin-left: -120px;
    &:active {
        transform: scale(0.9);
    }


    a {
        text-decoration: none;
        color: #FFF;
    }

`

export const ImageLogo = styled.img `
    width: 100px;
`