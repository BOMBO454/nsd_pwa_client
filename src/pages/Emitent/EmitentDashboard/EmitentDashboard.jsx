import Button from "src/components/ui/Button/Button";
import CardList from "src/components/ui/CardList/CardList";
import LayoutDashboard from "../../../components/layout/LayoutDashboard/LayoutDashboard";
import CardBalance from "../../../components/ui/CardBalance/CardBalance";
import {
  VerticalWrapper,
  BigLetter,
  CentredCard,
  Heading,
  MiniCard,
} from "./styled";
import Tabs from "../../../components/ui/Tabs/Tabs";
import {COLOR_YELLOW} from "../../../constants/variable";
import paths from "../../../constants/paths";
import {useHistory} from "react-router-dom";

function EmitentDashboard() {
  const history = useHistory()
  return (
    <LayoutDashboard>
      <CardList>
        <CardBalance/>
        <Tabs tabs={[
          {
            title: "Все", content: <CardList>
              <CentredCard title="В обращении">
                <VerticalWrapper>
                  <p>
                    <BigLetter>N</BigLetter> токенов
                  </p>
                  <p>
                    на <BigLetter>m</BigLetter> ₽
                  </p>
                </VerticalWrapper>
              </CentredCard>
              <Heading>Купили сегодня</Heading>
              <MiniCard title="ООО Синт">
                <p>0.2910</p>
                <p>+ 120 ₽</p>
              </MiniCard>
              <MiniCard title="ООО Синт">
                <p>0.2910</p>
                <p>+ 120 ₽</p>
              </MiniCard>
              <MiniCard title="ООО Синт">
                <p>0.2910</p>
                <p>+ 120 ₽</p>
              </MiniCard>
              <Button>Сумма которую купили</Button>
            </CardList>
          }, {title: "Sent", content: <div>Sent</div>}, {title: "Recieved", content: <div>Recieved</div>}
        ]}/>
        <Button background={COLOR_YELLOW} onClick={()=>{history.push(paths.emitentTokenCreate)}}>Создать токен</Button>
      </CardList>
    </LayoutDashboard>
  );
}

export default EmitentDashboard