// import {} from "./styled";
import LayoutDashboard from "../../../components/layout/LayoutDashboard/LayoutDashboard";
import CardList from "../../../components/ui/CardList/CardList";
import CardBalance from "../../../components/ui/CardBalance/CardBalance";
import TokensCards from "./components/TokensCards/TokensCards";

export default function TraiderDashboard() {
  return (
    <LayoutDashboard>
      <CardList>
        <CardBalance balance={9000} />
        <TokensCards />
      </CardList>
    </LayoutDashboard>
  )
}