import {Title} from "../../ui/Title/style";
import Button from "../../ui/Button/Button";
import {COLOR_YELLOW} from "../../../constants/variable";
import {Modal} from "react-bootstrap";
import ModalBuyIcon from "../../../images/icons/ModalBuyIcon.svg"

export default function ModalBuy({open,onHide}) {
  return (
    <Modal show={open} onHide={onHide}>
      <Title className="text-center">Подтвердить покупку</Title>
      <div className="d-flex justify-content-center">
        <img src={ModalBuyIcon} alt=""/>
      </div>
      <Button onClick={onHide} className="mt-5" background={COLOR_YELLOW}>Подтвердить</Button>
    </Modal>
  )
}