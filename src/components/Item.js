import React from 'react';

const Item = (props) => {
  return (
    <li style={{backgroundColor: 'lightgrey'}}>
      {/*<p>this is the Item component :)</p>*/}
      <button type="button" onClick={props.deleteItem}>Delete Note</button>
      {/*<button type="button" onClick={props.updateItem} value={props.children}>Update</button>*/}
      {/*<input onClick={props.updateItem} value={props.children}/>*/} {/*value is for two way binding*/}
      <input 
        type='text' 
        placeholder='Change your note'
        onChange={props.updateItem}
        //value={props.children} //for two way binding
      />
      {/*https://codeburst.io/a-quick-intro-to-reacts-props-children-cb3d2fce4891*/}
      <span>note|id: {props.children}</span> {/*children az, ami a TAG-ek kozott van*/}
    </li>
  );
}

export default Item;

