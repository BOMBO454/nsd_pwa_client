import styled, {css} from "styled-components"
import {COLOR_DARK} from "../../../constants/variable";
import { motion } from "framer-motion"

export const BaseButtonCircle = styled(motion.button)`
  font-size: 24px;
  border: unset;
  color: ${COLOR_DARK};
  height: 60px;
  width: 60px;
  font-family: "Montserrat", "Roboto", sans-serif;
  
  ${props => (props.color && `
    color: ${props.color};
  `)}
  
  ${props => (props.background===false && `
    background-color: unset;
  `)}
`;
