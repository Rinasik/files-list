import { useState } from "react";
import { ReactComponent as ChevronIcon } from "./shevron.svg";

export const List = ({ files, style }) => {

  return files?.map((elem, index) => {
    return (
      <Elem elem={elem} key={index} style={style}/>
    );
  });
};



const Elem = ({ style, elem }) => {
  const [activeChildren, setActiveChildren] = useState(true);
  const angle = activeChildren ? 90 : 0;

  const name = activeChildren ? "block" : "none";
  const hideElems = (e) => {
    e.stopPropagation();
    setActiveChildren(!activeChildren);
  };

  return (
    <div
      style={{ position: "relative", left: "20px", ...style }}
      onClick={(e) => hideElems(e)}
    >
      <ChevronIcon style={{ transform: `rotate(${angle}deg)` }} />
      <span style={{ paddingLeft: "4px" }}> {elem.name}</span>

      {elem?.inner !== 0 && (
        <List files={elem.inner} style={{display:`${name}`}}/>
      )}
    </div>
  );
};
