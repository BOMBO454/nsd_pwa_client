import styled from "styled-components"
import {COLOR_DARK} from "../../constants/variable";
import {motion} from "framer-motion";

export const Wrapper = styled(motion.div)`
  background-color: ${COLOR_DARK};
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LogoWrapper = styled.div`
  
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
