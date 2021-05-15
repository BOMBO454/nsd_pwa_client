import {FooterWrapper, ButtonIconFooter} from "./styled";
import Button from "../Button/Button";
import HomeIcon from "../../../images/icons/HomeIcon";
import TabIcon from "../../../images/icons/Tab";
import ClockIcon from "../../../images/icons/ClockIcon";
import CardIcon from "../../../images/icons/CardIcon";
import GearIcon from "../../../images/icons/GearIcon";

export default function Footer(){
  return <FooterWrapper>
    <ButtonIconFooter to={"/dashboard"} activeClassName="current"><HomeIcon /></ButtonIconFooter>
    <ButtonIconFooter to={"/dashboard"} activeClassName="current"><TabIcon /></ButtonIconFooter>
    <ButtonIconFooter to={"/dashboard"} activeClassName="current"><ClockIcon /></ButtonIconFooter>
    <ButtonIconFooter to={"/dashboard"} activeClassName="current"><CardIcon /></ButtonIconFooter>
    <ButtonIconFooter to={"/dashboard"} activeClassName="current"><GearIcon /></ButtonIconFooter>
  </FooterWrapper>
}