import logo1 from "../Assests/companyLogo/adobe.png"
import logo2 from "../Assests/companyLogo/airbnb.png"
import logo3 from "../Assests/companyLogo/dropbox.png"
import logo4 from "../Assests/companyLogo/Expedia.png"
import logo5 from "../Assests/companyLogo/figma.png"
import logo6 from "../Assests/companyLogo/google.png"
import logo7 from "../Assests/companyLogo/ibm.png"
import logo8 from "../Assests/companyLogo/microsoft.png"

export default function LogoSlider() {
    return (
            <div className="logos">
                <div className="logos-slide">
                    <img src={logo1} alt="logos" />
                    <img src={logo2} alt="logos" />
                    <img src={logo3} alt="logos" />
                    <img src={logo4} alt="logos" />
                    <img src={logo5} alt="logos" />
                    <img src={logo6} alt="logos" />
                    <img src={logo7} alt="logos" />
                    <img src={logo8} alt="logos" />
                </div>
                <div className="logos-slide">
                    <img src={logo1} alt="logos" />
                    <img src={logo2} alt="logos" />
                    <img src={logo3} alt="logos" />
                    <img src={logo4} alt="logos" />
                    <img src={logo5} alt="logos" />
                    <img src={logo6} alt="logos" />
                    <img src={logo7} alt="logos" />
                    <img src={logo8} alt="logos" />
                </div>
            </div>
    )
}