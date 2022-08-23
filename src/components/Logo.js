import SEPTALogo from "../static/img/SEPTA.png";

const Logo = ({ width }) => {
    return (
        <img
            id="logo-png"
            src={SEPTALogo}
            alt="home"
            width={width}
        />
    )
};

export default Logo;
