import LayoutDashboard from "../../components/layout/LayoutDashboard/LayoutDashboard";
import Card from "../../components/ui/Card/Card";
import CardBalance from "../../components/ui/CardBalance/CardBalance";
import Tabs from "../../components/ui/Tabs/Tabs";

function Dashboard() {
  return <LayoutDashboard>
    <CardBalance/>
    <Tabs tabs={[
      {title:"Все",content:<div>Все</div>},{title:"Sent",content:<div>Sent</div>},{title:"Recieved",content:<div>Recieved</div>}
    ]}/>
  </LayoutDashboard>
}

export default Dashboard