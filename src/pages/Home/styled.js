import styled from "styled-components"
import {
  COLOR_LIGHTER_GRAY,
  COLOR_WHITE,
  COLOR_YELLOW,
  SHADOW_BIG,
  SHADOW_SMALL,
  SHADOW_STANDART
} from "../../constants/variable";
import {motion} from "framer-motion";
import {Title} from "../../components/ui/Title/style";

export const SpecialButtonTitle = styled.span`
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  align-items: center;
  gap: 10px;
`
export const SpecialButton = styled(motion.button)`
  background-color: ${COLOR_WHITE};
  border: unset;
  width: 120px;
  height: 120px;
  padding: 0px;
  border-radius: 50%;
  box-shadow: ${SHADOW_BIG};
  display: flex;
  align-items: center;
  justify-content: center;
  ${props => props.color && `
    background-color: ${props.color}; 
  `}

  &::before {
    content: "";
    display: block;
    width: 88px;
    height: 88px;
    background-color: #767676;
    border-radius: 50%;
    background-color: ${COLOR_YELLOW};
  }
`
export const Wrapper = styled(motion.div)`
  background-color: ${COLOR_YELLOW};
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const LogoWrapper = styled.div`
  padding: 30px 10px 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  
  ${Title}{
    font-size: 24px;
    margin-bottom: 10px;
  }

  img {
    max-width: 200px;
    max-height: 200px;
  }
`;

export const ButtonWrapper = styled.div`
  &::before {
    content: "";
    display: block;
    background-color: ${COLOR_WHITE};
    height: 100%;
    width: 200%;
    position: absolute;
    transform: rotate(-7deg) translateY(50%);
    transition: 0.2s ease-out;
    ${props=>props.state===1&&`
      transform: rotate(7deg) translateY(50%);
    `}
    box-shadow: ${SHADOW_STANDART};
    z-index: -1;
    box-shadow: inset ${SHADOW_SMALL};
  }

  position: relative;
  overflow: hidden;
  height: 200px;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;
