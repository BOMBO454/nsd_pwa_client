import styled from "styled-components"
import {COLOR_SOFT_WHITE, COLOR_WHITE, COLOR_YELLOW, SHADOW_STANDART} from "../../../constants/variable";
import {motion} from "framer-motion";
import {BaseButtonCircle} from "../ButtonCircle/styled";

export const InfoTitle = styled.span`
  font-weight: bold;
`
export const Trand = styled.div``
export const BaseInfo = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 12px;
`
export const Icon = styled.div``
export const GrayCard = styled(motion.div)`
  background-color: ${COLOR_SOFT_WHITE};
  margin: 10px 0;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 0 16px 16px 0;
  box-shadow: ${SHADOW_STANDART};
  ${BaseButtonCircle}{
    height: 50px;
    width: 50px;
    background-color: ${COLOR_YELLOW};
    color: ${COLOR_WHITE};
  }
`
export const Wrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 70px;
  align-items: center;
  justify-content: left;
  border-radius: 16px;
`