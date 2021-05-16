import {} from "./styled";
import LayoutDashboard from "../../../components/layout/LayoutDashboard/LayoutDashboard";
import {Title} from "../../../components/ui/Title/style";
import CardList from "../../../components/ui/CardList/CardList";
import TokenCardSuper from "../../../components/ui/TokenCardSuper/TokenCardSuper";
import {useEffect, useState} from "react";
import tokenApi from "../../../api/tokenApi";
import YellowCard from "../../../components/ui/TokenCardSuper/components/YellowCard/YellowCard";

export default function TraiderTokenList() {
  const [tokens, setTokens] = useState([])
  useEffect(() => {
    tokenApi.getAll().then((data) => {
      console.log("data", data.data.data)
      setTokens(data.data.data)
    })
  }, [])
  return (
    <LayoutDashboard>
      <Title>Список токенов</Title>
      <CardList>
        {tokens.map((token, index) => (
          <TokenCardSuper TokenTypeId={token.TokenTypeId} dateEnd={token.dateEnd} name={token.name} price={token.price} procent={token.procent}
                          emisson={token.emisson} key={token.id} id={index}/>))}
      </CardList>
    </LayoutDashboard>
  )
}