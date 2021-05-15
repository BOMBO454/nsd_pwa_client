import {Wrapper} from "./styled";
import {motion} from 'framer-motion'
import {useEffect, useState} from "react";

export default function Tabs({tabs,defaultIndex = 0}) {
  const [activeTabIndex, setActiveTabIndex] = useState(defaultIndex);

  const onTabClick = (index) => {
    setActiveTabIndex(index);
  };
  return (
    <Wrapper className="tabs-component">
      <ul role="tablist">
        {tabs.map((tab, index) => (
          <motion.li
            key={tab.id}
          >
            <button>{tab.title}</button>
          </motion.li>
        ))}
      </ul>
      {tabs.map((tab, index) => (
        <tab.content
          key={tab.id}
          id={`${tab.id}-content`}
          active={activeTabIndex === index}
        />
      ))}
    </Wrapper>
  )
}