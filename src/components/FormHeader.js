import Logo from "./Logo";

const FormHeader = ({ title }) => {
    return (
        <header className="flex-row inverted-colors">
            <div id="form-logo">
                <Logo width={"65px"} />
            </div>
            <h2 className="title-text mid-size">{title}</h2>
        </header>
    )
};

export default FormHeader;
