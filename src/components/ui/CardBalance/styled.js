import styled from "styled-components"
import Card from "../Card/Card";
import {COLOR_DARK, COLOR_WHITE, GRADIENT_BASE} from "../../../constants/variable";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import {motion} from "framer-motion";

export const RightWrapper = styled(motion.div)`
  display: flex;
  justify-content: space-between;
`
export const ArrowButton = styled(ButtonIcon)`
  svg path{
    fill: ${COLOR_DARK};
  }
`
export const WrapperCardAbsolute = styled(Card)`
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  overflow: auto;
  z-index: 2;
  background-image: ${GRADIENT_BASE};
  color: ${COLOR_DARK};
  position: fixed;
`
export const WrapperCard = styled(Card)`
  position: relative;
  z-index: 2;
  background-image: ${GRADIENT_BASE};
  color: ${COLOR_DARK};
`;