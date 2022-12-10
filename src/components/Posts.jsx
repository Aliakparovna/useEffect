import Photos from "./Photos.jsx"



const Posts = ({posts}) => {

  return(
<div>
  {posts.map((el) => (
<Photos  key={el.id} title={el.title} id={el.id} url={el.thumnailUrl}/>

  ))}
</div>
  )
}

export default Posts;