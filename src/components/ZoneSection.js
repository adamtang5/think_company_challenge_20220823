import Select from "react-select";

const ZoneSection = ({ prompt, zoneOptions, setZoneId }) => {
    const handleZoneChange = (value) => {
        setZoneId(value.value);
    };

    return (
        <section className="flex-column zone-section bottom-border">
            <h3 className="prompt-text">{prompt}</h3>
            <Select
                options={zoneOptions}
                name="zone-id"
                id="zone-id-input"
                onChange={handleZoneChange}
                defaultValue={zoneOptions[0]}
            />
        </section>
    )
};

export default ZoneSection;
