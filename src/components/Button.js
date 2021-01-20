import React from 'react'
const defaultClick = (e) => {
    console.log(e)
}
const Button = ({color,fontColor,text, onClick}) => {
    return <button onClick={onClick} style={{backgroundColor: color,color:fontColor}} className='btn'>{text}</button>
}
Button.defaultProps = {
    color: 'black',
    fontColor: 'white',
    text: 'Save',
    onClick: defaultClick

}
export default Button
