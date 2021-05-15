import {Title} from "../../ui/Title/style";
import Button from "../../ui/Button/Button";
import {COLOR_GREEN, COLOR_RED, COLOR_WHITE} from "../../../constants/variable";
import {Modal} from "react-bootstrap";
import BuyMoreImage from "../../../images/BuyMoreImage.svg"

export default function ModalGetMore({open,onHide}) {
  return (
    <Modal show={open} onHide={onHide}>
      <Title className="text-center">Купить еще облигаций ?</Title>
      <div className="d-flex justify-content-center">
        <img src={BuyMoreImage} alt=""/>
      </div>
      <Button onClick={onHide} className="mt-5" background={COLOR_GREEN} color={COLOR_WHITE}>Подтвердить</Button>
    </Modal>
  )
}