
import { useState } from 'react';

function Item({ title }) {
  const [fruittName, setFruitName] = useState(title);
  // [varToUse, functionToUpdate]

  const onClickHandler = () => {
    setFruitName(`${fruittName} changed`);
  };

  return (
    <div>
      {fruittName}&nbsp;
      <button onClick={onClickHandler}>Change</button>
    </div>
  );
}

export default Item;
