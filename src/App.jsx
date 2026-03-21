import {useState} from "react";
import PostComponent from "./Post.jsx";

function App(){
  const [posts, setPosts] = useState([]);

  const postComponents = posts.map(post=>
    <PostComponent 
    name = {post.name}
    subtitle = {post.subtitle}
    time = {post.time}
    image = {post.image}
    desc ={post.desc}
    />
  )

  const [formData, setFormData]= useState({
    name:"",
    subtitle:"",
    time:"",
    image:"",
    desc:""
  });

  function addPost(){
    setPosts([...posts, {
      name:formData.name,
      subtitle:formData.subtitle,
      time:formData.time,
      image:formData.image,
      desc:formData.desc
    }])
  }

  return (
    <div>
      <form style ={{display:"grid", margin:"50px", justifyContent:"space-evenly" }}>
<input
  type="text"
  placeholder="Enter Name"
  value={formData.name}
  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
/>

<input
  type="text"
  placeholder="Enter Subtitle"
  value={formData.subtitle}
  onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
/>
<input
  type="text"
  placeholder="Enter Time"
  value={formData.time}
  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
/>
<input
  type="text"
  placeholder="Enter Image URL"
  value={formData.image}
  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
/>
<input
  type="text"
  placeholder="Enter Description"
  value={formData.desc}
  onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
/>

 </form>
      <button onClick = {addPost}>Add Post</button>
      {postComponents}
    </div>
  )
}
export default App ;
      