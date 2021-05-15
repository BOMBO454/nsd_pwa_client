import {BaseButton} from "./styled";

function Button({children, background, color, onClick, className}) {
  return(
    <BaseButton onClick={onClick} className={className} whileTap={{ scale: 0.95 }} background={background} color={color}>{children}</BaseButton>
  )
}

export default Button