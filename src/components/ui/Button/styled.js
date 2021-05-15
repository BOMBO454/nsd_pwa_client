import styled from "styled-components"
import {COLOR_DARK, COLOR_LIGHT_GRAY} from "../../../constants/variable";
import { motion } from "framer-motion"

export const BaseButton = styled(motion.button)`
  font-size: 14px;
  border: unset;
  height: 46px;
  border-radius: 16px;
  width: 100%;
  background-color: ${COLOR_LIGHT_GRAY};
  color: ${COLOR_DARK};
  font-width: bold;
  font-family: "Montserrat", "Roboto", sans-serif;
  
  ${props => (props.color && `
    color: ${props.color};
  `)}
  
  ${props => (props.background===false && `
    background-color: unset;
  `)}
`;
