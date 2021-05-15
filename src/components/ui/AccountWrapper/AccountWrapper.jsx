import {BaseAccountWrapper, Info, Date, Name} from "./styled";
import Account from "../../../images/icons/Account";

export default function AccountWrapper(){
  return(
    <BaseAccountWrapper>
      <Account />
      <Info>
        <Date>2021.03.04</Date>
        <Name>Джон</Name>
      </Info>
    </BaseAccountWrapper>
  )
}