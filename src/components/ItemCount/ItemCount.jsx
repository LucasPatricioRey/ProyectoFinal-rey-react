import React, {useState} from 'react'

export default function ItemCount(props) {
    
    const[ count, setCount] = useState(1);


    function handleAdd(){
        if (count < props.stock){
          setCount(count + 1)
        }
        else{
            alert("no se puede esa cantidad de productos");
        }
    }
    function handleSubstract(){
        if (count>1){
          setCount(count - 1)
        }
        else{
            alert("no se puede tener menos de 1 producto");
        }
    }
  

    return (
    <div  >
        <button onClick={handleSubstract}> - </button>
        <span> {count} </span>
        <button onClick={handleAdd}> + </button> 
        <button onClick={()=>props.onAddToCart(count)} > Agregar al carrito </button>
    </div> )
}