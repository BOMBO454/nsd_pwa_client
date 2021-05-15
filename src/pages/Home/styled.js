import styled from "styled-components"
import {COLOR_LIGHTER_GRAY, COLOR_WHITE, SHADOW_BIG, SHADOW_STANDART} from "../../constants/variable";
import {motion} from "framer-motion";

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

  &::before {
    content: "";
    display: block;
    width: 88px;
    height: 88px;
    background-color: #767676;
    border-radius: 50%;
    ${props => props.color && `
      background-color: ${props.color}; 
    `}
  }
`
export const Wrapper = styled(motion.div)`
  background-color: ${COLOR_LIGHTER_GRAY};
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;

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
    box-shadow: ${SHADOW_STANDART};
    z-index: -1;
  }

  position: relative;
  overflow: hidden;
  height: 300px;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;
