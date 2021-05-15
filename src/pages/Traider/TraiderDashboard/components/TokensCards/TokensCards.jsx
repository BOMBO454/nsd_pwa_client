import {} from "./styled";
import {Title} from "../../../../../components/ui/Title/style";
import Tabs from "../../../../../components/ui/Tabs/Tabs";
import TokenCard from "../../../../../components/ui/TokenCard/TokenCard";
import CardList from "../../../../../components/ui/CardList/CardList";
import TokenCardSuper from "../../../../../components/ui/TokenCardSuper/TokenCardSuper";

export default function TokensCards() {
  return (
    <>
      <Title>Мои токены</Title>
      <Tabs tabs={[{
        title: "Последние",
        content: <CardList>
          <TokenCard trand={20} />
          <TokenCard trand={-20}/>
          <TokenCard trand={19}/>
        </CardList>
      }, {
        title: "Избранное",
        content: <CardList>
          <TokenCardSuper />
          <TokenCardSuper />
          <TokenCardSuper />
        </CardList>
      }, {
        title: "Рекомендации",
        content: <CardList>
          <TokenCardSuper />
          <TokenCardSuper />
          <TokenCardSuper />
          <TokenCardSuper />
        </CardList>
      }]}/>
    </>
  )
}