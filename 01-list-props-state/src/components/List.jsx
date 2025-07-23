
import Item from './Item';

function List() {
  const fruits = ['Apple', 'Orange', 'Grapes', 'Mango'];

  const fruitNames = fruits.map((friut, Index) => {
    // passing data from Parent (List) to Child (Item) thru "Props"
    return <Item title={friut} Key={Index} />;
  });

  return (
    <div>
      {fruitNames}
      {/* <Item fruitTitle={fruits[0]} /> */}
      {/* <Item fruitTitle={fruits[1]} /> */}
      {/* <Item fruitTitle={fruits[2]} /> */}
      {/* <Item fruitTitle={fruits[3]} /> */}
    </div>
  );
}

export default List;
