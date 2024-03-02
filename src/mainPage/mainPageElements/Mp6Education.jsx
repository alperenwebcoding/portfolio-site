import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';


export default function Mp6Education(){

    return(
        <>
            <h1 className="header-section">{`<> Education </>`}</h1>
            <div id="education-diagram">
                <div className="diagram">
                    <h4>{`Selçuk Anadolu High School`}<p>{`- Sivas(2017-2021)`}</p></h4>
                </div>
                <FontAwesomeIcon icon={faArrowDownLong} size="2xl" style={{color: "#bde2ff",}} />
                <div className="diagram">
                    <h4>{`İstanbul University-Cerrahpaşa Electrical-Electronics Engineering`}<p>{`- Istanbul(2021-2026)`}</p></h4>
                </div>
            </div>
        </>
    )
}