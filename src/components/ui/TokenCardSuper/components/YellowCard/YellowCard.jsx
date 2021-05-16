import {YellowCardWrapper} from "./styled";
import {Title} from "../../../Title/style";

export default function YellowCard({className,TokenTypeId=1,name,price="не указано",procent,emisson,dateEnd}) {
  return (
    <YellowCardWrapper className={className}>
      <div className="d-flex justify-content-between mb-1">
        <Title>{["Акция","Облигация"][TokenTypeId || 1]}</Title>
        <span>{price}₽</span>
      </div>
      <div className="d-flex justify-content-between mb-1">
        <span>{name}</span>
        <span>{procent}%/год</span>
      </div>
      <div className="d-flex justify-content-between mb-1">
        <span>{emisson} шт</span>
        <span>{dateEnd}</span>
      </div>
      <div className="d-flex justify-content-between mb-1">
        <span>Надежность:</span>
        <span>4/5</span>
      </div>
    </YellowCardWrapper>
  )
}