import styled from "styled-components";
import {motion} from "framer-motion";
import {COLOR_YELLOW, SHADOW_STANDART} from "../../../../../constants/variable";

export const YellowCardWrapper = styled(motion.div)`
  position: relative;
  font-size: 12px;
  font-family: monospace;
  z-index: 1;
  height: 100%;
  border-radius: 16px;
  box-shadow: ${SHADOW_STANDART};
  background-color: ${COLOR_YELLOW};
  background-image: linear-gradient(180.18deg, ${COLOR_YELLOW} 0.16%, #F2F2F7 140.94%, ${COLOR_YELLOW} 140.94%);
  padding: 16px;
`