import Button from "src/components/ui/Button/Button";
import CardList from "src/components/ui/CardList/CardList";
import LayoutDashboard from "../../components/layout/LayoutDashboard/LayoutDashboard";
import CardBalance from "../../components/ui/CardBalance/CardBalance";
import {
  VerticalWrapper,
  BigLetter,
  CentredCard,
  Heading,
  MiniCard,
} from "./styled";
import Tabs from "../../components/ui/Tabs/Tabs";

function Dashboard() {
  return (
    <LayoutDashboard>
      <CardList>
        <CardBalance />
        <Tabs tabs={[
          {title:"Все",content:<div>Все</div>},{title:"Sent",content:<div>Sent</div>},{title:"Recieved",content:<div>Recieved</div>}
        ]}/>
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
        <CentredCard title="Сумма которую купили"></CentredCard>
        <Button>Создать токен</Button>
      </CardList>
    </LayoutDashboard>
  );
}

export default Dashboard