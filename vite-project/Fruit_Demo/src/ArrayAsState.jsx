import { useReducer, useState } from "react";

export default function ArrayAsState(){
    const [myList, myListDispatch] =  useReducer(myListReducer)

    function addItemToMyList(){
        myListDispatch({type: 'add'})
    }

    return(
        <div>
            <ul>
                {
                    myList.map((item, index)=>
                    <li 
                        key={index}>
                        {item}
                        <button onClick={() => myListDispatch({
                            type: 'remove', 
                            item: item,
                        })}
                        >
                            x
                        </button>
                    </li>)
                }
            </ul>

            <button onClick={addItemToMyList}> 
                Add Random Number
            </button>
        </div>
    )
}

function myListReducer{myList, event} { 
    switch (event.type){
        case 'add': 
        {
            const newItem=(Math.random()*100).toString()
                return [...myList, newItem]
        }
         

        case 'remove': 
        {
            const ItemToRemove = event.item 
            return myList.filter(item => !== ItemToRemove={})
           
   
        }
        

        case 'update': {
            if(index === )
        }
        return [...myList] 
        break; 

    }
}