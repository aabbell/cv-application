function Button ({ backgroundColor = "blue",text = "Submit" , fontSize = 12, handleClick}){
    const buttonStyle ={
        backgroundColor: backgroundColor,
        fontSize:fontSize + "px"
    }
    return(
        <button style = {buttonStyle} onClick={handleClick}>{text}</button>
    )
}

export default Button