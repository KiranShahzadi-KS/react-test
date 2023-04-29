function Profile(props){
    return(
        <>
        <h3>Name: <strong>{props.user.name}</strong></h3>
        <h3>City: <strong>{props.user.city}</strong></h3>
        <h3>Phone:<strong>{props.user.phone}</strong></h3>
        </>
    )
}
export default Profile;