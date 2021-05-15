import styled from "styled-components"
import Card from "../Card/Card";
import {COLOR_WHITE} from "../../../constants/variable";
import ButtonIcon from "../ButtonIcon/ButtonIcon";

export const RightWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
export const ArrowButton = styled(ButtonIcon)`
`
export const WrapperCard = styled(Card)`
  background-image: linear-gradient(90deg, #8B8B8B 26.3%, rgba(139, 139, 139, 0) 162.57%);
  color: ${COLOR_WHITE};
`;