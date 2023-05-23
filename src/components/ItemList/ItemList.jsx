import Item from '../Item/Item';
import Flex from '../Flex/Flex';

function ItemList({ products }) {
  return (
    <Flex>
      {products.map(product => (
        <Item
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          category={product.category}
          description={product.description}
          stock={product.stock}
          img={product.img}
        />
      ))}
    </Flex>
  );
}

export default ItemList;