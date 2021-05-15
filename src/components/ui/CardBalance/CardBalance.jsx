import {WrapperCard,WrapperCardAbsolute, ArrowButton, RightWrapper} from "./styled";
import Balance from "../Balance/Balance";
import ArrowIcon from "../../../images/icons/ArrowIcon";
import {AnimatePresence, AnimateSharedLayout, motion} from "framer-motion";
import {useState} from "react";
import {Title} from "../Card/styled";
import Button from "../Button/Button";
import {COLOR_DARK, COLOR_WHITE} from "../../../constants/variable";
import CardList from "../CardList/CardList";
import TokensCarddList from "./components/TokensCarddList/TokensCarddList"

export default function CardBalance({children, title, balance}) {
  const [open, setOpen] = useState()
  return (
    <AnimateSharedLayout type="crossfade">
      <WrapperCard onClick={() => {
        setOpen(true)
      }} layoutId={"lay-1"}>
        <Title layoutId={"title-1"}>Мой Баланс</Title>
        <RightWrapper layoutId={"RightWrapper-1"}>
          <Balance layoutId={"Balance-1"} money={balance}/>
          <ArrowButton><ArrowIcon/></ArrowButton>
        </RightWrapper>
      </WrapperCard>
      <AnimatePresence>
        {open && <WrapperCardAbsolute layoutId={"lay-1"}>
          <Title layoutId={"title-1"}>Мой Баланс</Title>
          <RightWrapper layoutId={"RightWrapper-1"}>
            <Balance layoutId={"Balance-1"} money={balance}/>
          </RightWrapper>
          <CardList>
            <Button color={COLOR_DARK}>Последнии поступления</Button>
            <TokensCarddList></TokensCarddList>
          </CardList>
          <Button background={COLOR_WHITE} color={COLOR_DARK} onClick={() => {
            setOpen(false)
          }}>Закрыть
          </Button>
        </WrapperCardAbsolute>}
      </AnimatePresence>
    </AnimateSharedLayout>
  )
}