import {HeaderWrapper, Buttons} from "./styled";
import AccountWrapper from "../AccountWrapper/AccountWrapper";
import Notification from "../../../images/icons/Notification";
import Help from "../../../images/icons/Help";

export default function Header(){
  return <HeaderWrapper>
    <AccountWrapper />
    <Buttons>
      <Notification />
      <Help />
    </Buttons>
  </HeaderWrapper>
}