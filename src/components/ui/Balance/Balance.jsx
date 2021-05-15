import {BalanceWrapper} from "./styled";

export default function Balance({money, ...props}) {
  return (<BalanceWrapper {...props}>${money}</BalanceWrapper>)
}