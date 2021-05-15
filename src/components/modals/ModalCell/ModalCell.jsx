import {Title} from "../../ui/Title/style";
import Button from "../../ui/Button/Button";
import {COLOR_RED, COLOR_WHITE, COLOR_YELLOW} from "../../../constants/variable";
import {Modal} from "react-bootstrap";
import ModalSellImage from "../../../images/ModalSellImage.svg"

export default function ModalCell({open,onHide}) {
  return (
    <Modal show={open} onHide={onHide}>
      <Title className="text-center">Продать облигацию на бирже ?</Title>
      <div className="d-flex justify-content-center">
        <img src={ModalSellImage} alt=""/>
      </div>
      <Button onClick={onHide} className="mt-5" background={COLOR_RED} color={COLOR_WHITE}>Подтвердить</Button>
    </Modal>
  )
}