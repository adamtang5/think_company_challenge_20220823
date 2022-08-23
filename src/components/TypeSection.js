import Select from "react-select";

const TypeSection = ({ prompt, typeOptions, setType, typeHelperText }) => {
    const handleTypeChange = (value) => {
        setType(value.value);
    };

    return (
        <section className="flex-column type-section">
            <h3 className="prompt-text">{prompt}</h3>
            <Select
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
