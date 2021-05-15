import {ButtonWrapper, LogoWrapper, Wrapper} from "../Home/styled";
import Button from "../../components/Button/Button";
import {COLOR_WHITE} from "../../constants/variable";
import {useHistory} from "react-router-dom";

function SignIn() {
  let history = useHistory();
  return(
    <Wrapper initial={{x:"-100%",opacity:0}} animate={{x:"0",opacity:1}} exit={{x:"-100%",opacity:0}} transition={{ease:"easeOut"}}>
      <LogoWrapper />
      <ButtonWrapper>
        <Button onClick={()=>{history.push("/dashboard")}}>Продолжить</Button>
      </ButtonWrapper>
    </Wrapper>
  )
}

export default SignIn