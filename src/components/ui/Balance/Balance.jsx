import {BalanceWrapper} from "./styled";

export default function Balance({money}) {
  return (<BalanceWrapper>${money}</BalanceWrapper>)
}