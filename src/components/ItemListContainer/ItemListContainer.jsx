import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { getItems, getItemsByCategory} from '../services/firestore';


function ItemListContainer(){

  const [products, setProducts ] = useState([]);
  

  let {categoryid } = useParams();
  

  useEffect(()=>{
    if ( categoryid === undefined){
      
            getItems().then((respuesta) => {
  
            setProducts(respuesta) ;
            });}
            else{
              getItemsByCategory(categoryid).then(
                (respuesta)=> setProducts(respuesta)
              )
            }
            },
            [categoryid] );




  if(products.length === 0){
    
  return <Loader/>}

      return(
        <ItemList products={products}/>

      )
  }
  
  export default ItemListContainer;


