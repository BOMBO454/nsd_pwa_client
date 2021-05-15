import styled from "styled-components"
import {COLOR_DARK, COLOR_LIGHTER_GRAY} from "../../constants/variable";
import {motion} from "framer-motion";
import Card from "../../components/ui/Card/Card";

export const CustomCard = styled(Card)`
  margin: 0 10px;
`;

export const Wrapper = styled(motion.div)`
  background-color: ${COLOR_LIGHTER_GRAY};
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
