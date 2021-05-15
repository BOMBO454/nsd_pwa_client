import Header from "../../ui/Header/Header";
import {Main,Wrapper} from "./styled";
import Footer from "../../ui/Footer/Footer";

export default function LayoutDashboard({children}){
  return(<Wrapper>
    <Header />
    <Main>
      {children}
    </Main>
    <Footer />
  </Wrapper>)
}