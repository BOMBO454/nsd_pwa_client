import {Wrapper, GrayCard} from "./styled";
import {AnimatePresence, AnimateSharedLayout} from "framer-motion";
import {useState} from "react";
import ButtonCircle from "../ButtonCircle/ButtonCircle";
import {Title} from "../Title/style";
import AsqIcon from "../../../images/icons/AsqIcon";
import MoneyIcon from "../../../images/icons/MoneyIcon";
import {useHistory} from "react-router-dom";
import {Modal} from "react-bootstrap";
import paths from "../../../constants/paths";
import YellowCard from "./components/YellowCard/YellowCard";
import ModalBuy from "../../modals/ModalBuy/ModalBuy";

export default function TokenCardSuper({id}) {
  const history = useHistory()
  const [open, setOpen] = useState(false)
  return (
    <Wrapper>
      <YellowCard />
      <GrayCard>
        <ButtonCircle onClick={()=>{history.push(paths.traiderTokenInfo)}}><AsqIcon /></ButtonCircle>
        <ButtonCircle onClick={()=>{setOpen(true)}}><MoneyIcon /></ButtonCircle>
      </GrayCard>
      <ModalBuy open={open} onHide={()=>{setOpen(false)}}/>
    </Wrapper>
  )
}