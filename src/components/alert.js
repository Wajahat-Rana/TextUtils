import React from 'react'

function alert(props) {

    const capitalize = (word)=>{
        const lowerCase = word.toLowerCase();
        return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1)
    }
  return (
    props.alert &&
    <div className={`alert alert-${props.alert.type}`} role="alert">
        {capitalize(props.alert.type)} : {props.alert.message} 
     </div>

  )
}

export default alert