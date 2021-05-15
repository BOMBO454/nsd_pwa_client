import {BaseButtonCircle} from "./styled";

function ButtonCircle({children, background, color, onClick}) {
  return(
    <BaseButtonCircle onClick={onClick} whileTap={{ scale: 0.8 }} background={background} color={color}>{children}</BaseButtonCircle>
  )
}

export default ButtonCircle