import { BiLogoGithub } from "react-icons/bi";
import { TiSocialLinkedin } from "react-icons/ti";

const About = () => {
    return(
    <div>
        <h1 className='contact-heading'>Contact info</h1>
        <div className="contact-page-icons">
                <a className="icon-wrapper" href='https://github.com/wholol' target="_blank" rel="noreferrer"><BiLogoGithub id="github-icon-contact-page"></BiLogoGithub></a>
        </div>
    </div>
    );
}

export default About;