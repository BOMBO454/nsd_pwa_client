import styled from "styled-components"
import {COLOR_DARK} from "../../../constants/variable";
import { motion } from "framer-motion"

export const BaseButton = styled(motion.button)`
  font-size: 24px;
  border: unset;
  height: 60px;
  color: ${COLOR_DARK};
  font-family: "Montserrat", "Roboto", sans-serif;
  
  ${props => (props.color && `
    color: ${props.color};
  `)}
  
  ${props => (props.background===false && `
    background-color: unset;
  `)}
`;
