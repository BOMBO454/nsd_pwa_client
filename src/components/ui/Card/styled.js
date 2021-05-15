import styled from "styled-components";
import { motion } from "framer-motion";
import {COLOR_WHITE} from "../../../constants/variable";

export const Title = styled(motion.span)`
  font-size: 16px;
  font-weight: bold;
  display: inline-block;
  margin-bottom: 16px;
`;
export const Wrapper = styled(motion.div)`
  background-color: ${COLOR_WHITE};
  position: relative;
  border-radius: 16px;
  box-shadow: 0 7px 18px rgba(0, 0, 0, 0.17);
  padding: 16px;
`;
