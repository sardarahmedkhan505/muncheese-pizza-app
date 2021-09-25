import styled from "styled-components";
import ImgBg from '../../images/main-pizza.jpg';

export const MainContainer = styled.div
`
background : linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.1)),url(${ImgBg});
height : 100vh;
background-position : center;
background-size : cover;
`;
export const MainContent = styled.div `
hieght : cal(100vh -80px);
max-height : 100%;
width : 100vw;
padding : 0rem cal((100vw -1300px)/2);
`
export const MainItem = styled.div `
display : flex;
flex-direction : column;
justify-content : center;
align-items : center; 
height : 100vh;
max-height : 100%;
padding: 0 2rem;
width : 650px;
color: #fff;
text-transform : uppercase;
line-height : 1;
font-weight : bold;
@media screen and (max-width : 650px) {
    width : 100%;
}
`
export const MainH1 = styled.div `
font-size : clamp(2.5rem, 10vw,5rem);
margin-bottom : 1rem;
box-shadow: 3px 5px #e9ba23;
letter-spacing : 3px;
`
export const MainP1 = styled.div `
font-size : clamp(2rem,5vw,3rem);
margin-bottom : 2rem;
`
export const MainButton = styled.div `
font-size : 1.4rem;
padding : 1rem 4rem;
border :none;
background : #7A0001;
color : #fff
transition : 0.2s ease-out;
& : hover{
    background : #ffc500;
    transition: 0.2s ease-out;
    cursor:pointer;
    color:#000;
}
`