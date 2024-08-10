function Button({text = "Default value",clr = "blue"}){

    return <button style={{
        color : clr,
        
    }}>
        {text}
    </button>
}


export default Button