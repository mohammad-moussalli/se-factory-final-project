const DonationTag = ({text, className, image, onClick, link}) => {
    
    return (
        <div className={className} onClick={onClick}>
            <a href={link} target="_blank"><img src={image} alt='Donation'/></a>
            {text}
        </div>
    );
}  
export default DonationTag; 