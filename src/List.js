import React from 'react';

const List = (props) => {
  const { items, deleteTodo } = props; 
  return(
    <div className="todoContainer">      
      {
        items.map((item) => {
          return (
            <div className="todoItem" key={item.id} >              
              <p > {item.todo} </p>              
              <button className="deleteButton" onClick={()=> deleteTodo(item)} > Done </button>
            </div>
          );
        })
      }     
    </div>
    
  )
}
export default List;