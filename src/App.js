import { useEffect, useState} from 'react'
import './App.css';
import Posts from './components/Posts.jsx';

function App() {
   const [photos,setPhotos] = useState([])
   
const fetchPhotos = async() => {
  const response = await fetch ('https://jsonplaceholder.typicode.com/photos?_limit=10')
  const data = await response.json()
  setPhotos(data)
}

useEffect(() => {
  fetchPhotos()
}, []);



return(
  <div>
       <Posts posts={photos}/> 
   </div>
)
}

export default App;