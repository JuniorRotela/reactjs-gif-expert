import { useState} from "react";
import { AddCategory, GiftGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['developer']);
  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories])
  //  console.log(newCategory);
  }


    return (
    <> 
        <h1>Gif Expert App</h1>
       <AddCategory
        // setCategories={setCategories}
        onNewCategory={(value) => onAddCategory(value)}
        cat
        />
     
        {
           categories.map((category)  => 
           (
              <GiftGrid key={category}
              category={category}/>
            ))
        }
   



    </>
  )
}
