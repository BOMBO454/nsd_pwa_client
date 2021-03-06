import {Wrapper , StyledList, StyledListItem, StyledBody} from "./styled";
import {AnimatePresence, motion} from 'framer-motion'
import {useEffect, useState} from "react";
import {COLOR_WHITE} from "../../../constants/variable";

export default function Tabs({tabs, defaultIndex = 0}) {
  const [activeTabIndex, setActiveTabIndex] = useState(defaultIndex);
  const [localTab, setLocalTab] = useState([]);
  useEffect(() => {
    setLocalTab(tabs.map((v,index) => (<motion.div transition={{duration:0.1}} exit={{x:"100%",opacity:0}} animate={{x:"0%",opacity:1}} initial={{x:"-100%",opacity:0}} key={index}>{v.content}</motion.div>)))
  }, [tabs])
  return (
    <Wrapper className="tabs-component">
      <StyledList>
        {tabs.map((tab, index) => (
          <StyledListItem
            active={index===activeTabIndex}
            key={tab.id}
            initial={{backgroundColor: COLOR_WHITE}}
            whileTap={{scale:1.05}}
            onClick={() => {
              setActiveTabIndex(index)
            }}
          >
            {tab.title}
          </StyledListItem>
        ))}
      </StyledList>
      <StyledBody>
        <AnimatePresence exitBeforeEnter>
          {localTab[activeTabIndex]}
        </AnimatePresence>
      </StyledBody>
    </Wrapper>
  )
}