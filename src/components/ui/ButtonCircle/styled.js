import styled, {css} from "styled-components"
import {COLOR_DARK, COLOR_WHITE, COLOR_YELLOW} from "../../../constants/variable";
import { motion } from "framer-motion"

export const BaseButtonCircle = styled(motion.button)`
  font-size: 24px;
  border: unset;
  color: ${COLOR_DARK};
  height: 60px;
  width: 60px;
  font-family: "Montserrat", "Roboto", sans-serif;
  border-radius: 50%;
  padding: 0px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props=>props.background?props.background:COLOR_YELLOW};
  
  svg{
  }
  
  ${props => (props.color && `
    color: ${props.color};
  `)}
  
  ${props => (props.background===false && `
    background-color: unset;
  `)}
`;
