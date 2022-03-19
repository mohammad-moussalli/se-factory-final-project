import '../style/tag.css'

const Tag = ({value, text}) => {
    return (
        <div className="tag">
            <h1>{value}</h1>
            <h3>{text}</h3>
        </div>
    );
}  
export default Tag; 