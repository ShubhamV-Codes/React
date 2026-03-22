function PostComponent({name, subtitle, time, image, desc}){
    return (
        <div>
            <div style ={{display:"flex", marginTop:"20px"}}>
            <img src ={image} />
              <div style ={{paddingLeft:"25px"}}>
                <p style={{fontWeight:"bold"}}> {name}</p>
                <p>{time}</p>
                 <p style={{color:"blue"}}>{subtitle}</p>
              </div>
            </div>

            <div>
                <p>{desc}</p>
            </div>
        </div>
    )
}
export default PostComponent;