const Button = ({text, className, onClick, disabled}) => {
    return (
        <div className={className} onClick={onClick} disabled={disabled}>
            {text}
        </div>
    );
}  
export default Button; 