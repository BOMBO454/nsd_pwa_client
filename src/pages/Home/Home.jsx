import {Wrapper, LogoWrapper, ButtonWrapper, SpecialButton, SpecialButtonTitle} from "./styled";
import { useHistory } from "react-router-dom";
import Logo from "../../images/icons/Logo.svg"
function Home({key}) {
  let history = useHistory();
  return(
    <Wrapper key={key} initial={{x:"-100%",opacity:0}} animate={{x:"0",opacity:1}} exit={{x:"-100%",opacity:0}} transition={{ease:"easeOut"}}>
      <LogoWrapper>
        <img src={Logo} alt=""/>
      </LogoWrapper>
      <ButtonWrapper>
        <SpecialButtonTitle>
         <SpecialButton whileTap={{scale:0.95}} onClick={()=>{history.push("/signin")}} />
          Трейдер
        </SpecialButtonTitle>
        <SpecialButtonTitle>
          <SpecialButton color={"#D2D2D2"} whileTap={{scale:0.95}} onClick={()=>{history.push("/signup")}} />
          Эмитент
        </SpecialButtonTitle>
      </ButtonWrapper>
    </Wrapper>
  )
}

export default Home