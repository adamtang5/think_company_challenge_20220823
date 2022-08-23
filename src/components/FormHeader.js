import Logo from "./Logo";

const FormHeader = ({ title }) => {
    return (
        <header className="flex-row">
            <div id="form-logo">
                <Logo width={"75px"} />
            </div>
        </header>
    )
};

export default FormHeader;
