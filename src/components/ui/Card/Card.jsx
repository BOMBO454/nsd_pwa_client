import {Wrapper, Title} from "./styled";

export default function Card({children, title, ...props}) {
  return (
    <Wrapper initial={{boxShadow:" 0 7px 18px rgba(0, 0, 0, 0.17)"}} whileTap={{scale:0.95, boxShadow: "0 2px 5px rgba(0, 0, 0, 0.17)"}} {...props}>
      {title && <Title>{title}</Title>}
      {children}
    </Wrapper>
  )
}