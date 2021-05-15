import {Wrapper, GrayCard} from "./styled";
import {useState} from "react";
import ButtonCircle from "../ButtonCircle/ButtonCircle";
import {useHistory} from "react-router-dom";
import paths from "../../../constants/paths";
import YellowCard from "./components/YellowCard/YellowCard";
import {COLOR_GREEN, COLOR_RED} from "../../../constants/variable";
import ModalCell from "../../modals/ModalCell/ModalCell";
import ModalGetMore from "../../modals/ModalGetMore/ModalGetMore";

export default function TokenCardSuperSell({id}) {
  const history = useHistory()
  const [open, setOpen] = useState(false)
  const [openGetMore, setOpenGetMore] = useState(false)
  return (
    <Wrapper>
      <YellowCard />
      <GrayCard>
        <ButtonCircle background={COLOR_RED} onClick={()=>{setOpen(true)}}>
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
              <path d="M21.0958 3.50026C10.6757 3.44376 2.32599 12.5424 3.63685 23.2049C4.47335 30.0194 9.4369 35.7724 16.0099 37.7551C18.9464 38.6406 21.7809 38.6851 24.4147 38.1619L27.5763 35.0003L23.0509 30.4749L30.4747 23.051L35.0001 27.5764L38.1618 24.4148C38.685 21.7811 38.6405 18.9431 37.755 16.0066C35.7723 9.43536 30.0192 4.47348 23.2047 3.63698C22.4939 3.54959 21.7905 3.50403 21.0958 3.50026ZM20.4977 9.88845H22.2614V12.4348C22.8231 12.5416 25.9664 13.2585 25.9664 17.8557H22.6578C22.6578 15.453 21.6374 15.0769 21.2086 15.0769C20.9741 15.0769 19.8893 15.1384 19.8893 17.1106C19.891 20.5511 25.9425 19.4777 25.9425 25.0882C25.9425 29.1622 22.5965 29.7109 22.005 29.7844V32.1121H20.2516V29.7844C19.7056 29.7092 16.0338 29.3083 16.0338 24.2473H19.3424C19.3424 27.2363 20.8818 27.1116 21.1163 27.1116C21.3736 27.1116 22.6373 27.0651 22.6373 25.1121C22.6373 21.2113 16.5841 22.9403 16.5841 17.0935C16.5841 13.086 19.9044 12.4622 20.4977 12.387V9.88845ZM30.4747 28.0003L28.0001 30.4749L32.5255 35.0003L28.048 39.4778L30.5226 41.9524L35.0001 37.4749L39.5255 42.0003L42.0001 39.5257L37.4747 35.0003L41.9249 30.5501L39.4503 28.0755L35.0001 32.5257L30.4747 28.0003Z" fill="#FCFFFF"/>
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="42" height="42" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </ButtonCircle>
        <ButtonCircle background={COLOR_GREEN} onClick={()=>{setOpenGetMore(true)}}>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 0.5C8.33475 0.5 0.5 8.33475 0.5 18C0.5 27.6652 8.33475 35.5 18 35.5C27.6652 35.5 35.5 27.6652 35.5 18C35.5 8.33475 27.6652 0.5 18 0.5ZM25 19.75H19.75V25H16.25V19.75H11V16.25H16.25V11H19.75V16.25H25V19.75Z" fill="#FCFFFC"/>
          </svg>
        </ButtonCircle>
      </GrayCard>
      <ModalCell open={open} onHide={()=>{setOpen(false)}}/>
      <ModalGetMore open={openGetMore} onHide={()=>{setOpenGetMore(false)}}/>
    </Wrapper>
  )
}