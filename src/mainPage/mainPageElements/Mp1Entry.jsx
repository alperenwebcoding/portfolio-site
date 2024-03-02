import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGithub , faLinkedin , faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Mp1Entry(){
    
    const scrollToSection = (event) => {
        const sectionId = event.target.getAttribute('value');
        const scrollSection = document.getElementById(sectionId);
        scrollSection.scrollIntoView({ behavior:"smooth" });
    }

    return(
        <>
            <div id="mainpage-entry">
                <div id="person-img">
                    <img style={{maxWidth:"800px"}} src="" alt="" />
                </div>
                
                <div id="navbar">
                    <img style={{width:"4rem",margin:"0 0 0 4rem"}} src="https://upload.wikimedia.org/wikipedia/tr/6/6a/Istanbul_%C3%BCniversitesi-cerrahpa%C5%9Fa_logosu.png" alt="" />
                    <div id="navbar__titles">
                        <h2 className='navbar__titles--title' value="info-section" onClick={scrollToSection}>Info</h2>
                        <h2 className='navbar__titles--title' value="projects-section" onClick={scrollToSection}>Projects</h2>
                        <h2 className='navbar__titles--title' value="section-myapproach" onClick={scrollToSection}>My Approach</h2>
                    </div>
                    <div id="socials" style={{display:"flex",gap:"2rem",alignItems: "center",padding:"0 2rem 0 0"}}>
                        <a href="https://www.github.com" target="_blank" ><FontAwesomeIcon icon={faGithub} className='navbar__socials--icon' size="2xl" style={{color: "#ffffff",}}/></a>
                        <a href="https://www.linkedin.com" target="_blank" ><FontAwesomeIcon icon={faLinkedin} className='navbar__socials--icon' size="2xl" style={{color: "#ffffff",}} /></a>
                        <a href="https://www.x.com" target="_blank" ><FontAwesomeIcon icon={faSquareXTwitter} className='navbar__socials--icon' size="2xl" style={{color: "#ffffff",}} /></a>
                    </div>
                </div>
                <div id="logos" style={{position:"absolute",left:"3%",transform:"translateY(-50%)",top:"40%", flexDirection:"column"}}>
                    <div style={{display:"flex",flexDirection: "column", gap:"0.4rem"}}>
                        <img className="main-logo-image" src="./images/reactlogoblue.png" alt="react" />
                        <div style={{display:"flex",gap:"0.4rem"}}>
                            <img className="logo-images" src="C:\Users\alper\OneDrive\Masaüstü\life\giantweb\projects\github\pp\portfolio-website\portfolio\images\html5logoblue.png" alt="html" />
                            <img className="logo-images" src="./images/css3logoblue.png" alt="css" />
                            <img className="logo-images" style={{borderRadius:"0.4rem",border: "solid white 3px"}} src="./images/jslogoblue.png" alt="js" />
                        </div>
                    </div>
                </div>
                <div id="title" style={{position:"absolute", transform:"translate(-50%,-50%)",top:"50%",left:"75%"}}>
                    <p>Front End Developer <br/>Research Analyst</p>
                </div>
                <div id="name" style={{position:"absolute", bottom:"10%", left:"50%",transform:"translate(-50%,-20%)"}}>
                    <h1 style={{fontSize:"6rem",width:"90vw",textAlign:"center"}}>Alperen "webDew" Karakaya</h1>
                </div>
            </div>
        </>
    )
}