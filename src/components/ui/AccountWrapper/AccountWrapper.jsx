import {BaseAccountWrapper, Info, Date, Name} from "./styled";
import Account from "../../../images/icons/Account";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import {useHistory} from "react-router-dom";
import paths from "../../../constants/paths";

export default function AccountWrapper(){
  const history = useHistory()
  return(
    <BaseAccountWrapper>
      <ButtonIcon onClick={()=>{history.push(paths.home)}}><Account /></ButtonIcon>
      <Info>
        <Date>2021.03.04</Date>
        <Name>Джон</Name>
      </Info>
    </BaseAccountWrapper>
  )
}