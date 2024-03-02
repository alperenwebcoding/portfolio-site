import Mp1Entry from "./mainPageElements/mp1Entry.jsx";
import Mp2Info from "./mainPageElements/mp2Info.jsx";
import "./MainPage.css"
import Mp3Projects from "./mainPageElements/mp3Projects.jsx";
import Mp4MyApproach from "./mainPageElements/Mp4MyApproach.jsx";
import Footer from "./mainPageElements/footer/Footer.jsx";

export default function MainPage(){
    return(
        <>
            <Mp1Entry />
            <Mp2Info />
            <hr />
            <Mp3Projects/>
            <hr />
            <Mp4MyApproach/>
            <hr />
            <Footer/>
        </>
    )
}