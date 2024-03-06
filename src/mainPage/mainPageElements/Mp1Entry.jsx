import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGithub , faLinkedin , faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';
import html5LogoBlue from '/images/html5logoblue.png';
import css3LogoBlue from '/images/css3logoblue.png';
import jsLogoBlue from '/images/jslogoblue.png';
import reactLogoBlue from '/images/reactlogoblue.png';

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
                    <img style={{maxWidth:"800px"}} src="data:image/png;base64,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" alt="" />
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
                        <img className="main-logo-image" src={reactLogoBlue} alt="react" />
                        <div style={{display:"flex",gap:"0.4rem"}}>
                            <img className="logo-images" src={html5LogoBlue} alt="html" />
                            <img className="logo-images" src={css3LogoBlue} alt="css" />
                            <img className="logo-images" style={{borderRadius:"0.4rem",border: "solid white 3px"}} src={jsLogoBlue} alt="js" />
                        </div>
                    </div>
                </div>
                <div id="title" style={{position:"absolute", transform:"translate(-50%,-50%)",top:"50%",left:"75%"}}>
                    <p>Front End Developer <br/>Research Analyst</p>
                </div>
                <div id="name" style={{position:"absolute", bottom:"10%", left:"50%",transform:"translate(-50%,-20%)"}}>
                    <h1 style={{fontSize:"6rem",width:"90vw",textAlign:"center"}}>Alperen Karakaya</h1>
                </div>
            </div>
        </>
    )
}