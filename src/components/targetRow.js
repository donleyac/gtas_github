import React from 'react';
import './targetRow.css'
export const TargetRow = (props) => {
  const background = props.background || "#FFFFFF";
  const style = {
    "backgroundColor": background,
  }
  let className = "target-row flex ";
  if(props.className) {
    className+=props.className;
  }
  if(props.direction){
    style["flexDirection"] = props.direction;
  }
  return(<div id={props.id} style={style} className={className}>
    {props.children}
  </div>)
}
