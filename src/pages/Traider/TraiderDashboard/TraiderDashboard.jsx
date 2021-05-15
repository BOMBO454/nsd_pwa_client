// import {} from "./styled";
import LayoutDashboard from "../../../components/layout/LayoutDashboard/LayoutDashboard";
import CardList from "../../../components/ui/CardList/CardList";
import CardBalance from "../../../components/ui/CardBalance/CardBalance";
import TokensCards from "./components/TokensCards/TokensCards";
import Button from "../../../components/ui/Button/Button";
import {COLOR_YELLOW} from "../../../constants/variable";
import {useHistory} from "react-router-dom";
import paths from "../../../constants/paths";

export default function TraiderDashboard() {
  const history = useHistory()
  return (
    <LayoutDashboard>
      <CardList>
        <CardBalance balance={9000} />
        <TokensCards />
        <Button background={COLOR_YELLOW} onClick={()=>{history.push(paths.traiderTokensListSell)}}>Продажа</Button>
        <Button background={COLOR_YELLOW} onClick={()=>{history.push(paths.traiderTokensList)}}>Все токены</Button>
      </CardList>
    </LayoutDashboard>
  )
}