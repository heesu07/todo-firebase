import React from 'react';

const TaskAdd = (props) => {
  const { inputvalue, setInputValue, onChangeHandler, onClickHandler } = props;
  
  const onFormSubmit = e => {
    e.preventDefault();
    onClickHandler();
    setInputValue('');
  }
  return(    
    <div className="todoContainer" >
      <div className="todoItem">
        <input autoFocus required value={inputvalue}  onChange={onChangeHandler} placeholder="New"></input>
        <button type="submit" className="addButton"  onClick={onFormSubmit}> Add </button>
      </div>
    </div>    
  )
}

export default TaskAdd;