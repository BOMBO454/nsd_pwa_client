import styled from "styled-components"
import {COLOR_DARK, COLOR_LIGHT_GRAY, COLOR_WHITE} from "../../../constants/variable";
import { motion } from "framer-motion"

export const BaseButton = styled(motion.button)`
  font-size: 14px;
  border: unset;
  height: 46px;
  border-radius: 16px;
  width: 100%;
  background-color: ${props => (props.background ? props.background : COLOR_WHITE)};
  color: ${props => (props.color ? props.color : COLOR_DARK)};
  font-width: bold;
  font-family: "Montserrat", "Roboto", sans-serif;
`;
