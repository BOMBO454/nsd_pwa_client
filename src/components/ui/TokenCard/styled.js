import styled from "styled-components"
import {COLOR_SOFT_WHITE} from "../../../constants/variable";
import {motion} from "framer-motion";

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
export const Wrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  padding: 16px;
  justify-content: left;
  border-radius: 16px;
  height: 60px;
  background-color: ${COLOR_SOFT_WHITE};
`