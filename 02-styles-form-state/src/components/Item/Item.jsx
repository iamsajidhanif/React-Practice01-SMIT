
import { useState } from 'react';

function Item({ title }) {
  const [name, setName] = useState(title);

  const onClickHandler = () => {
    setName(`${name} updated`);
    // console.log(name); // It will show "previous state"
  };

  return (
    <div>
      {name}&nbsp;
      <button onClick={onClickHandler}>Update Name</button>
    </div>
  );
}

export default Item;
