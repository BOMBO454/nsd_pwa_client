import styled from "styled-components"
import {motion} from "framer-motion";
import {COLOR_DARK, COLOR_WHITE} from "../../../constants/variable";

export const StyledBody = styled.div`
  border-radius: 16px;
  box-shadow: 0 7px 18px rgba(0, 0, 0, 0.17);
  padding: 8px;
  background: ${COLOR_WHITE};
  position: relative;
  overflow: hidden;
  z-index:1;
`

export const StyledListItem = styled(motion.button)`
  list-style: none;
  font-size: 12px;
  color: #BDBDBD;
  font-weight: bold;
  padding: 0 10px;
  display: flex;
  align-items: center;
  height: 40px;
  border: unset;
  background-color: unset;
  border-radius: 16px 16px 0 0;
  ${props=>props.active && `
      box-shadow: 0 7px 18px rgba(0, 0, 0, 0.17);
      color: ${COLOR_DARK};
      z-index:1;
  `}
`
export const StyledList = styled.ul`
  padding: 0 16px;
  display: flex;
  margin: 0;
`
export const Wrapper = styled.div`
`