
function AddItem({ onAdd }) {
  let itemName = '';

  const onSubmitHandler = (event) => {
    // console.log(event); // SyntheticBaseEvent
    event.preventDefault(); // won't reload page while submitting the form
    onAdd(itemName);
  };

  const onInputChangeHandler = (event) => {
    // console.log(event); // SyntheticBaseEvent/
    itemName = event.target.value;
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor='my-input'>Item Name</label> &nbsp;
          <input id='my-input' onChange={onInputChangeHandler} />
        </div>
        <div>
          <button type='submit'>Add Item</button>
        </div>
      </form>
    </div>
  );
}

export default AddItem;
