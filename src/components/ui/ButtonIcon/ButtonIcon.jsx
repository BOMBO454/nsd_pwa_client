import {BaseButton} from "./styled";

function ButtonIcon({children, color, onClick, ...props}) {
  return(
    <BaseButton onClick={onClick} whileTap={{ scale: 0.8 }} color={color} {...props}>{children}</BaseButton>
  )
}

export default ButtonIcon