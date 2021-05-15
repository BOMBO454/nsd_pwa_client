import { WrapperCard, ArrowButton, RightWrapper } from "./styled";
import Balance from "../Balance/Balance";
import ArrowIcon from "../../../images/icons/ArrowIcon";

export default function CardBalance({children, title}) {
  return (
    <WrapperCard title="Мой баланс">
      <RightWrapper>
        <Balance money={25}/>
        <ArrowButton><ArrowIcon /></ArrowButton>
      </RightWrapper>
    </WrapperCard>
  )
}