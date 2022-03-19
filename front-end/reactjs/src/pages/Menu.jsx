import '../style/menu.css'

const MenuPage = () => {
  return (
    <div className="menu">

        <div className="close-button">
            <h1>X</h1>
        </div>
        <div className ="menu-header">
            <div className="menu-option">
                <h4>The Foundation</h4>
                <h6>About Kaffi</h6>
                <h6>The Team</h6>
                <h6>Blog</h6>
                <h6>Records & Success Stories</h6>
            </div>

            <div className="menu-option">
                <h4>Apply</h4>
                <h6>Deadlines</h6>
                <h6>Kaffi Boost</h6>
                <h6>Kaffi Launch</h6>
            </div>

            <div className="menu-option">
                <h4>Donate</h4>
                <h6>How To Donate</h6>
            </div>

            <div className="menu-option">
                <h4>Volunteer</h4>
                <h6>Become A Buddy</h6>
                <h6>Join The Team</h6>
            </div>

            <div className="menu-option">
                <h4>Academic Advising</h4>
                <h6>Find A Buddy</h6>
                <h6>CV Tips</h6>
                <h6>Webinars</h6>
            </div>
        </div>
    </div>
  )
}

export default MenuPage