import {Wrapper, Icon, BaseInfo, Trand, InfoTitle, YellowCard, GrayCard} from "./styled";
import {AnimatePresence, AnimateSharedLayout} from "framer-motion";
import {useState} from "react";
import ButtonCircle from "../ButtonCircle/ButtonCircle";
import {Title} from "../Title/style";
import AsqIcon from "../../../images/icons/AsqIcon";
import MoneyIcon from "../../../images/icons/MoneyIcon";

export default function TokenCardSuper({id}) {
  const [open, setOpen] = useState(false)
  return (
    <AnimateSharedLayout type={"crossfade"}>
      <Wrapper layoutId={`wrapper-${id}`}>
        <YellowCard>
          <div className="d-flex justify-content-between mb-1">
            <Title>Облигация</Title>
            <span>100₽</span>
          </div>
          <div className="d-flex justify-content-between mb-1">
            <span>ООО “Импульс”</span>
            <span>18%/год</span>
          </div>
          <div className="d-flex justify-content-between mb-1">
            <span>1000 шт</span>
            <span>16.05.2022</span>
          </div>
          <div className="d-flex justify-content-between mb-1">
            <span>Надежность:</span>
            <span>16.05.2022</span>
          </div>
          <p>
            Описание: Облигации сроком на
            год целью получения 2 259 000руб. на дальнейшее развитие проекта
          </p>
        </YellowCard>
        <GrayCard>
          <ButtonCircle><AsqIcon /></ButtonCircle>
          <ButtonCircle><MoneyIcon /></ButtonCircle>
        </GrayCard>
      </Wrapper>
      <AnimatePresence>
        {open && <Wrapper layoutId={`wrapper-${id}`}>
          <Icon/>
          <BaseInfo>
            <InfoTitle>MTN Mobile Money</InfoTitle>
            <span>Sat, 6 Jun 20 at 21:29</span>
          </BaseInfo>
        </Wrapper>}
      </AnimatePresence>
    </AnimateSharedLayout>)
}