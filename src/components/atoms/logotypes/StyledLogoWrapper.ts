import styled from 'styled-components';

type Props={
width?:string;
height?:string;
logoImage:string;
displayNoneWidth?:string;
};

export const StyledLogoWrapper=styled.div<Props>`
width:${({width})=>width? width : "10rem"};
height: ${({height})=>height? height : "1.56rem"};
background-image: url(${({logoImage})=>logoImage});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`;