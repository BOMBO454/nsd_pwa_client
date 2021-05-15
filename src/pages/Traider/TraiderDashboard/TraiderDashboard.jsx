// import {} from "./styled";
import LayoutDashboard from "../../../components/layout/LayoutDashboard/LayoutDashboard";
import CardList from "../../../components/ui/CardList/CardList";
import CardBalance from "../../../components/ui/CardBalance/CardBalance";
import TokensCards from "./components/TokensCards/TokensCards";
import Button from "../../../components/ui/Button/Button";
import {COLOR_YELLOW} from "../../../constants/variable";

export default function TraiderDashboard() {
  return (
    <LayoutDashboard>
      <CardList>
        <CardBalance balance={9000} />
        <TokensCards />
        <Button background={COLOR_YELLOW}>Все токены</Button>
      </CardList>
    </LayoutDashboard>
  )
}