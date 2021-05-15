import Header from "../../ui/Header/Header";
import {Main} from "./styled";

export default function LayoutDashboard({children}){
  return(<div>
    <Header />
    <Main>
      {children}
    </Main>
  </div>)
}