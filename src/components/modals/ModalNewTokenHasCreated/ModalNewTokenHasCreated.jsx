import {Title} from "../../ui/Title/style";
import Button from "../../ui/Button/Button";
import {COLOR_YELLOW} from "../../../constants/variable";
import {Modal} from "react-bootstrap";
import TokenCreateImage from "../../../images/TokenCreateImage.svg"
import YellowCard from "../../ui/TokenCardSuper/components/YellowCard/YellowCard";
import {useHistory} from "react-router-dom";
import paths from "../../../constants/paths";

export default function ModalNewTokenHasCreated({open,onHide}) {
  const history = useHistory()
  return (
    <Modal show={open} onHide={onHide}>
      <Title className="text-center">Вы создали новый токен</Title>
      <div className="d-flex justify-content-center">
        <img src={TokenCreateImage} alt=""/>
      </div>
      <YellowCard />
      <Button onClick={()=>{history.push(paths.emitent)}} className="mt-5" background={COLOR_YELLOW}>Аминь</Button>
    </Modal>
  )
}