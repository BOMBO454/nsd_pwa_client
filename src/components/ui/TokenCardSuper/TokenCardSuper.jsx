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
import ModalBuy from "../../../images/icons/ModalBuy.svg";
import Button from "../Button/Button";
import {COLOR_YELLOW} from "../../../constants/variable";

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
      <Modal show={open} onHide={()=>{setOpen(false)}}>
        <Title className="text-center">Подтвердить покупку</Title>
        <div className="d-flex justify-content-center">
          <img src={ModalBuy} alt=""/>
        </div>
        <Button background={COLOR_YELLOW}>Подтвердить</Button>
      </Modal>
    </Wrapper>
  )
}