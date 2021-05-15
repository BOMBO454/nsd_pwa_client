import {} from "./styled";
import {Title} from "../../../../../components/ui/Title/style";
import Tabs from "../../../../../components/ui/Tabs/Tabs";
import TokenCard from "../../../../../components/ui/TokenCard/TokenCard";
import CardList from "../../../../../components/ui/CardList/CardList";

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
          <TokenCard trand={20} />
          <TokenCard trand={-20}/>
        </CardList>
      }, {
        title: "Рекомендации",
        content: <CardList>
          <TokenCard trand={20} />
          <TokenCard trand={-20}/>
          <TokenCard trand={-20}/>
          <TokenCard trand={19}/>
        </CardList>
      }]}/>
    </>
  )
}