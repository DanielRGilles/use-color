import { useState } from "react"

export default function useColorPicker(initialState) {
  const [ formState, setFormState ] = useState(initialState)
  const [ didChangeColor, setDidChangeColor ] = useState(false)
  // TODO: Implement me!
  const handleChange = (event) => {
    const { name, value } = event.target;
   
    setFormState((prevState) => {
      return { ...prevState, [name]: value}
    })
    switch (name) {
      case 'fgColor':
       
        setDidChangeColor(true);
        break;
      case 'bgColor':
        
        setDidChangeColor(true);
        break;
      case 'content':
        setDidChangeColor(false);
        
        break;
      default:
        break;
    }
    
  };
  return [formState, didChangeColor, handleChange]
  
}
