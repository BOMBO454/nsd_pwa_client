import styled from "styled-components"
import {COLOR_BLACK, COLOR_WHITE, SHADOW_STANDART} from "../../../constants/variable";
import {NavLink} from "react-router-dom";

export const Buttons = styled.div`
  display: flex;
  gap: 16px;
`
export const ButtonIconFooter = styled(NavLink)`
  max-width: 60px;
  position: relative;
  svg{
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
  &.current{
    svg path{
      fill: ${COLOR_BLACK};
    }
  }
`
export const FooterWrapper = styled.header`
  position: fixed;
  background-color: ${COLOR_WHITE};
  box-shadow: ${SHADOW_STANDART};
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  align-items: center;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
`