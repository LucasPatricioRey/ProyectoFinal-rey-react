import { useState, useEffect } from 'react';
import Flex from '../Flex/Flex';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { getSingleItem } from '../services/firestore';

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        console.log('Fetching product with ID:', id);
        const response = await getSingleItem(id);
        console.log('Fetched product:', response);
        setProduct(response);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);



  if (product.length === 0) {
    return <Loader />;
  }

  return (
    <div>
      <Flex>
        <ItemDetail
          key={product.id}
          title={product.title}
          price={product.price}
          category={product.category}
          description={product.description}
          stock={product.stock}
          img={product.img}
        />
      </Flex>
    </div>
  );
}

export default ItemDetailContainer;