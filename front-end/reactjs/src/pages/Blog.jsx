import MediaTag from "../components/MediaTag";
import '../style/blog.css'
import Spinner from '../components/Spinner';
import { useEffect, useState} from 'react'
import axios from 'axios';

const Blog = () => {

  const [blogs, setBlogs] = useState(null)
  const blogApi = "http://localhost:8080/blogs/"

  useEffect( () => {
    axios.get(blogApi, {headers: {'Access-Control-Allow-Origin': '*'}})
    .then(response => {
        setBlogs(response.data)})
    .catch(err => {
        console.log(err)
    });
  }, [])

  if (!blogs){
       return <Spinner/>
    } else{
        return (
          <div className="blog">
            <div className="blog-header">
                <p className="blog-title">Our Latest Blog</p>
            </div>
            <div className="blog-subheader">
                <p className="blog-subtitle">Stay up to date with our latest news and sharings</p>
            </div>
            <div className="blog-media-tag">

              {Array.isArray(blogs) && blogs.map((blog) => {
                return(
                <MediaTag link={blog.link} link_text={blog.text} title={blog.title} subtitle={blog.text} screenshot={blog.screenshot}/>
                )
              })}
            </div>
          </div>
        )
      }
}
  

export default Blog