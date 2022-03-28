import MediaTag from "../components/MediaTag";
import '../style/blog.css'
import image1 from '../assets/images/Blog1.png';
import image2 from '../assets/images/Blog2.png';

const Blog = () => {
  return (
    <div className="blog">
      <div className="blog-header">
          <p className="blog-title">Our Latest Blog</p>
      </div>
      <div className="blog-subheader">
          <p className="blog-subtitle">Stay up to date with our latest news and sharings</p>
      </div>
      <div className="blog-media-tag">
          <MediaTag link='https://www.elnashra.com/news/show/1513191' link_text='View Details' title='Featured at ElNashra' subtitle='Tuition in Western Europe is generally less of an issue compared to living expenses. The goal is to boost and support these students to remain in the country of study.' screenshot={image1}/>
          <MediaTag link='https://www.instagram.com/p/CQdWQs0L_ga/?utm_source=ig_web_copy_link' link_text='View Details' title='Featured at Jusur Arabia' subtitle='Tuition in Western Europe is generally less of an issue compared to living expenses. The goal is to boost and support these students to remain in the country of study.' screenshot={image2}/>
      </div>
    </div>
  )
}

export default Blog