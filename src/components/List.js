function List(props){
    return(
        <>
        {
            props.list.map((item)=>{
                return <li>{item.name}</li>
            })
        }
            </>
    )
}
export default List;