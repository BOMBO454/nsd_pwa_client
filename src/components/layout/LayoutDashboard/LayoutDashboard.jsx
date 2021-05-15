import Header from "../../ui/Header/Header";
import {Main,Wrapper} from "./styled";

export default function LayoutDashboard({children}){
  return(<Wrapper>
    <Header />
    <Main>
      {children}
    </Main>
  </Wrapper>)
}