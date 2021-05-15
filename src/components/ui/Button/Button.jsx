import {BaseButton} from "./styled";

function Button({children, background, color, onClick}) {
  return(
    <BaseButton onClick={onClick} whileTap={{ scale: 0.95 }} background={background} color={color}>{children}</BaseButton>
  )
}

export default Button