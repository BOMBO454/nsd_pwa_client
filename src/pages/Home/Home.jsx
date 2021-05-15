import {Wrapper, LogoWrapper, ButtonWrapper, SpecialButton, SpecialButtonTitle} from "./styled";
import { useHistory } from "react-router-dom";
import Logo from "../../images/icons/Logo.svg"
import paths from "../../constants/paths";
import {AnimatePresence,motion} from "framer-motion";
import EmitentImage from "../../images/EmitentImage.svg"
import TrayderImage from "../../images/TrayderImage.svg"
import {useState} from "react";
import {Title} from "../../components/ui/Title/style";
import {COLOR_DARK} from "../../constants/variable";

function Home({key}) {
  let history = useHistory();
  const [state, setState] = useState(1)
  return(
    <Wrapper key={key} initial={{x:"-100%",opacity:0}} animate={{x:"0",opacity:1}} exit={{x:"-100%",opacity:0}} transition={{ease:"easeOut"}}>
      <LogoWrapper>
        <AnimatePresence exitBeforeEnter>
          {state===2 && <><motion.img key={"EmitentImage"} src={EmitentImage} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}/>
            <Title className="title1">Эмитент</Title>
            <p>юридическое лицо или орган государственной исполнительной или местной власти, который от своего имени и в рамках своей деятельности выпускает в обращение ценные бумаги или иные платежные средства.</p>
          </>}
          {state===1 && <><motion.img key={"TrayderImage"} src={TrayderImage} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} />
            <Title className="title1">Трейдер</Title>
            <p>торговец, действующий по собственной инициативе и стремящийся извлечь прибыль непосредственно из процесса торговли.</p>
          </>}
        </AnimatePresence>
      </LogoWrapper>
      <ButtonWrapper state={state}>
        <SpecialButtonTitle>
         <SpecialButton color={state===1 ? COLOR_DARK: undefined} whileTap={{scale:0.95}} onClick={()=>{
           if(state===1){
             history.push(paths.traider)
           }else{
             setState(1)
           }
         }} />
          Трейдер
        </SpecialButtonTitle>
        <SpecialButtonTitle>
          <SpecialButton color={state===2 ? COLOR_DARK: undefined} whileTap={{scale:0.95}} onClick={()=>{
            if(state===2){
              history.push(paths.emitent)
            }else{
              setState(2)
            }
          }} />
          Эмитент
        </SpecialButtonTitle>
      </ButtonWrapper>
    </Wrapper>
  )
}

export default Home