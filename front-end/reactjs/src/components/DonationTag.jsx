const DonationTag = ({text, className, image, onClick}) => {
    return (
        <div className={className} onClick={onClick}>
        <img src={image} alt='Donation'/>            
        {text}
        </div>
    );
}  
export default DonationTag; 