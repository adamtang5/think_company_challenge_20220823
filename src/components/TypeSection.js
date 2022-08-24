import Select from "react-select";
import { customTheme } from "../util/SelectStyles";

const TypeSection = ({ prompt, typeOptions, setType, typeHelperText }) => {
    const handleTypeChange = (value) => {
        setType(value.value);
    };

    return (
        <section className="flex-column type-section bottom-border">
            <h3 className="prompt-text">{prompt}</h3>
            <Select
                theme={customTheme}
                options={typeOptions}
                name="type"
                id="type-input"
                onChange={handleTypeChange}
                defaultValue={typeOptions[0]}
            />
            <p className="helper-text">{typeHelperText}</p>
        </section>
    )
};

export default TypeSection;
