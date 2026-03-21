

function Children({children, title}){
    return (
        <div> 
            <h2>Hey I Passed as Title: {title}</h2>
            <div>{children}</div>
        </div>
    )
    
}
export default Children ;