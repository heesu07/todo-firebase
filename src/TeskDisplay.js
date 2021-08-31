import React from 'react';

const TaskDisplay = (props) => {
  console.log(`TaskDisplay ${props.items}`);
  return(
    <div className="todoContainer">      
      {
        props.items.map((item) => {
          return (
            <div className="todoItem" key={item.id} >              
              <p > {item.todo} </p>              
              <button className="deleteButton" onClick={()=> props.deleteHandler(item.id)} > Done </button>
            </div>
          );
        })
      }     
    </div>
    
  )
}
export default TaskDisplay;