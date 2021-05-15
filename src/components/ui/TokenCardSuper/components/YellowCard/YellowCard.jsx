import {YellowCardWrapper} from "./styled";
import {Title} from "../../../Title/style";

export default function YellowCard({className}) {
  return (
    <YellowCardWrapper className={className}>
      <div className="d-flex justify-content-between mb-1">
        <Title>Облигация</Title>
        <span>100₽</span>
      </div>
      <div className="d-flex justify-content-between mb-1">
        <span>ООО “Импульс”</span>
        <span>18%/год</span>
      </div>
      <div className="d-flex justify-content-between mb-1">
        <span>1000 шт</span>
        <span>16.05.2022</span>
      </div>
      <div className="d-flex justify-content-between mb-1">
        <span>Надежность:</span>
        <span>16.05.2022</span>
      </div>
    </YellowCardWrapper>
  )
}