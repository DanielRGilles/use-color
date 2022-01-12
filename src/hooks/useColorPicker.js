import { useState } from "react"

export default function useColorPicker(initialState) {
  const [ formState, setFormState ] = useState(initialState)
  // TODO: Implement me!
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => {
      return { ...prevState, [name]: {value}}
    })
    switch (name) {
      case 'fgColor':
        setFgColor(value);
        setDidChangeColor(true);
        break;
      case 'bgColor':
        setBgColor(value);
        setDidChangeColor(true);
        break;
      case 'content':
        setDidChangeColor(false);
        setContent(value);
        break;
      default:
        break;
    }
    return [formState, handleChange]
    
  };
}
