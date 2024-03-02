import Mp5Certificates from "./Mp5Certificates";
import Mp6Education from "./Mp6Education";

export default function Mp2Info(){
    return(
        <>
        <div id="info-section" className="section">
            <h1 className="header-section">{`<> Info </>`}</h1>
            <div id="cv-text-box">
                <p id="cv-text" style={{textAlign: "center"}}>{`I was born in 2003 in Bursa. After a while, I moved to Konya and
                started living there with my family. In Konya, I completed the first grade and moved to Sivas right after it again. The first impression
                to computers started here in the middle school with a great teacher. I had a chance to learn Scratch, Word, Excel etc. in this school.
                These apps really got my attention and I started thinking more deeply about computers. I completed the middle school in Sivas TOKİ Middle
                School. `}<br/><br/>{`
                Right after that I got accepted to Selçuk Anadolu High School. In the first 2 years of my High School time I learnt Python deeply and
                realised what really development is. Also, my friends inspired me to deep dive in development. My first researchments about development
                started here. For the educational reasons, I decided to go another High Shcool that Mehmet Reaci Toydemir High School. 
                In this time of 2 years, I had to work for the University Exam called YKS and worked hard for it for 2 years. Even though I really had a
                chance to discuss more about development and got more information about Web Development and other software areas. Especially, I checked
                HTML, CSS, JavaScript and I really liked them.`}<br/><br/>{`
                After the University Exam I got accepted to İstanbul Üniversitesi-Cerrahpaşa Electrical-Electronics Engineering. 
                In the first year at University, I learnt a lot of things and dived deep about Front-End. Especially Javascript and its efficency was 
                really great for me and decided to move in Front-End. Also, I learnt basic things about Adobe Photoshop, Canva. After a year, I was able to
                a few projects and improve myself in Front-End Development.`}<br/><br/>
                {`Right now I am second grade at the university and improving myself more about Front-End especially React.js. I hope this year will be
                great for everyone.`}</p>
            </div>

            <hr style={{color:"white", margin:"0 10%"}}/> <br />
            <Mp5Certificates/>
            <hr style={{color:"white", margin:"0 10%"}}/> <br />
            <Mp6Education />
        </div>
        </>
    )
}