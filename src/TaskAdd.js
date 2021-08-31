import React from 'react';

const TaskAdd = (props) => {
  return(    
    <div className="todoContainer" >
      <div className="todoItem">
        <input autoFocus required value={props.inputvalue}  onChange={props.onChangeHandler} placeholder="Input Task"></input>
        <button className="addButton"  onClick={props.onClickHandler}> Add </button>
      </div>
    </div>    
  )
}

export default TaskAdd;