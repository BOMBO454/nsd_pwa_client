import {Wrapper, Icon,BaseInfo,Trand, InfoTitle} from "./styled";

export default function TokenCard({trand = 21}) {
  return (
    <Wrapper>
    <Icon />
    <BaseInfo>
      <InfoTitle>MTN Mobile Money</InfoTitle>
      <span>Sat, 6 Jun 20 at 21:29</span>
    </BaseInfo>
    <Trand>{trand}</Trand>
  </Wrapper>)
}