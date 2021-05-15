import {Wrapper, CustomCard} from "./styled";
import {useHistory} from "react-router-dom";
import CardList from "../../components/ui/CardList/CardList";
import Input from "../../components/ui/Input/Input";
import Button from "../../components/ui/Button/Button";
import Card from "../../components/ui/Card/Card";

function SignIn() {
  let history = useHistory();
  return (
    <Wrapper initial={{x: "-100%", opacity: 0}} animate={{x: "0", opacity: 1}} exit={{x: "-100%", opacity: 0}}
             transition={{ease: "easeOut"}}>
      <CustomCard>
        <CardList>
          <Input title="login"/>
          <Input title="password"/>
          <Button onClick={()=>{history.push("/dashboard")}}>Войти</Button>
        </CardList>
      </CustomCard>
    </Wrapper>
  )
}

export default SignIn