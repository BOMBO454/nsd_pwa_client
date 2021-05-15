import {} from "./styled";
import LayoutDashboard from "../../../components/layout/LayoutDashboard/LayoutDashboard";
import {Title} from "../../../components/ui/Title/style";
import CardList from "../../../components/ui/CardList/CardList";
import TokenCardSuperSell from "../../../components/ui/TokenCardSuper/TokenCardSuperSell";

export default function TraiderTokenListSell() {
  return (
    <LayoutDashboard>
      <Title className="mb-2">Продажа токенов</Title>
      <CardList>
        <TokenCardSuperSell id={1}/>
        <TokenCardSuperSell id={2}/>
        <TokenCardSuperSell id={3}/>
        <TokenCardSuperSell id={4}/>
        <TokenCardSuperSell id={5}/>
      </CardList>
    </LayoutDashboard>
  )
}