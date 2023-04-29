function Button(props){
    return(
        <button style={props.style}>{props.name.text}</button>
        
    )
}

function Test(){
    let obj = {
        text:"Login",
    }
    return(
        <div>
            <h2> This is components</h2>
            <Button name={obj} style={{color:'red'}}/>
        </div>
    )
}
export default Test;