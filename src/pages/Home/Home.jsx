import {Wrapper, LogoWrapper, ButtonWrapper} from "./styled";
import Button from "../../components/ui/Button/Button";
import {COLOR_WHITE} from "../../constants/variable";
import { useHistory } from "react-router-dom";

function Home({key}) {
  let history = useHistory();
  return(
    <Wrapper key={key} initial={{x:"-100%",opacity:0}} animate={{x:"0",opacity:1}} exit={{x:"-100%",opacity:0}} transition={{ease:"easeOut"}}>
      <LogoWrapper />
      <ButtonWrapper>
        <Button onClick={()=>{history.push("/signin")}} background={false} color={COLOR_WHITE}>signin</Button>
        <Button onClick={()=>{history.push("/signup")}} background={false} color={COLOR_WHITE}>signup</Button>
      </ButtonWrapper>
    </Wrapper>
  )
}

export default Home