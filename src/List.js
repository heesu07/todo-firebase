import React from 'react';

const List = (props) => {
  console.log(`List ${props.items}`);
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
export default List;