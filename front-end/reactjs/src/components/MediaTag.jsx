import '../style/media-tag.css';

const MediaTag = ({link, link_text, title, subtitle, screenshot}) => {
  return (
    <div className='media-tag'>
        <div className='media-tag-screenshot-container'>
          <img className='media-tag-screenshot' src={screenshot} alt='screenshot'/>
          <div className='media-tag-title'>{title}</div>
        </div>
        <div className='media-tag-subtitle'>{subtitle}</div>
        <div className='media-tag-link'><a href={link} target="_blank">{link_text} </a></div>
    </div>
  )
}

export default MediaTag