{/*footer, has form mail etc.*/}

export default function Footer(){
    
    return(
        <>
            <div id="footer">
                <form action="">
                    <input id="footer__form--input" type="text"/>
                    <button id="footer__form--button">{`Submit`}</button>
                </form>
                <h2>{`OR`}</h2>
                <h4><p>{`Send an E-Mail to Me Anytime!`}</p>{`alperenkkaya18@gmail.com`}</h4>
            </div>
        </>
    )
}