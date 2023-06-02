import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {

const [inputValue, setInputValue] = useState();

const onInputChange = (e) => {
//  console.log(e.target.value);
 setInputValue(e.target.value);
}
const onSubmit = (e) => {
  e.preventDefault();
  if(inputValue.trim().length > 1){
    // setCategories( categories => [ inputValue, ...categories]);
    onNewCategory(inputValue.trim());
  }
  setInputValue('');
 
  // console.log(inputValue);
}

  return (
           <form onSubmit={ (e) => onSubmit(e)}>
             <input
              placeholder="Buscar un gif..."
              value={inputValue}
              onChange={onInputChange}
             />
           </form>
  )

}
