import {} from "./styled";
import LayoutDashboard from "../../../components/layout/LayoutDashboard/LayoutDashboard";
import {Title} from "../../../components/ui/Title/style";
import CardList from "../../../components/ui/CardList/CardList";
import TokenCardSuper from "../../../components/ui/TokenCardSuper/TokenCardSuper";

export default function TraiderTokenList() {
  return (
    <LayoutDashboard>
      <Title>Список токенов</Title>
      <CardList>
        <TokenCardSuper id={1}/>
        <TokenCardSuper id={2}/>
        <TokenCardSuper id={3}/>
        <TokenCardSuper id={4}/>
        <TokenCardSuper id={5}/>
      </CardList>
    </LayoutDashboard>
  )
}