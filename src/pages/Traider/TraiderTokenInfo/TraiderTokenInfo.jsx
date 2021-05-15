// import {} from "./styled";
import LayoutDashboard from "../../../components/layout/LayoutDashboard/LayoutDashboard";
import TokenCardSuper from "../../../components/ui/TokenCardSuper/TokenCardSuper";
import YellowCard from "../../../components/ui/TokenCardSuper/components/YellowCard/YellowCard";
import {Title} from "../../../components/ui/Title/style";
import CardList from "../../../components/ui/CardList/CardList";
import Input from "../../../components/ui/Input/Input";
import Button from "../../../components/ui/Button/Button";
import {COLOR_YELLOW} from "../../../constants/variable";
import ModalBuy from "../../../components/modals/ModalBuy/ModalBuy";
import {Wrapper} from "../../../components/ui/TokenCardSuper/styled";
import {useState} from "react";

export default function TraiderTokenInfo() {
  const [open, setOpen] = useState(false)
  return (
    <LayoutDashboard>
      <YellowCard />
      <div className="my-3 text-center"><Title>
        Информация
      </Title>
      </div>
      <CardList>
        <Input title="Тип" value="Облигация"/>
        <Input title="Название" value="ИМПУЛЬС-1"/>
        <Input title="Эмиссия (сколько штук выпускаем)" value="1000 шт"/>
        <Input title="Цена за один" value="100₽"/>
        <Input title="Процентная ставка" value="18%/год"/>
        <Input title="Дата погашения" value="16.05.22"/>
        <Input title="Дата погашения" value="16.05.22"/>
        <Input title="Описание" value="Облигации сроком на год целью получения 2 259 000руб. на дальнейшее развитие проекта"/>
        <Input title="Контактные данные" value="impuls@gmail.com"/>
        <Input title="Надёжность" value="5"/>
      </CardList>
      <Button onClick={()=>{setOpen(true)}} background={COLOR_YELLOW}>Купить</Button>
      <ModalBuy open={open} onHide={()=>{setOpen(false)}}/>
    </LayoutDashboard>
  )
}