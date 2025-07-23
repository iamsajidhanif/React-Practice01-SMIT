import Item from '../Item/Item';

function List({ itemsArr }) {
  const itemName = itemsArr.map((itemTitle, itemIndex) => {
    return <Item title={itemTitle} key={itemIndex} />;
  });

  return <div>{itemName}</div>;
}

export default List;
