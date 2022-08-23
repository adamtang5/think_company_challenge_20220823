import Logo from "./Logo";

const FormHeader = ({ title }) => {
    return (
        <header className="flex-row">
            <div id="form-logo">
                <Logo width={"75px"} />
            </div>
            <h2 className="title-text mid-size">{title}</h2>
        </header>
    )
};

export default FormHeader;
