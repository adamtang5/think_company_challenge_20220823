import React, { useState, useEffect } from "react";
import FormHeader from "./FormHeader";
import ZoneSection from "./ZoneSection";
import TypeSection from "./TypeSection";
import PurchaseSection from "./PurchaseSection";
import TripsSection from "./TripsSection";
import ResultSection from "./ResultSection";
import data from "../data/fares.json";
import "./Form.css";

const zoneOptions = data.zones.map(zoneData => {
    return { value: zoneData.zone, label: zoneData.name }
});

const FareCalculatorForm = () => {
    // console.log(data);
    const [zoneId, setZoneId] = useState(zoneOptions[0].value);

    useEffect(() => {
        console.log(zoneId);
    }, [zoneId]);


    return (
        <div id="form" className="centered flex-column">
            <FormHeader
                className="inverted-colors"
                title="Regional Rail Fares"
            />
            <ZoneSection
                prompt="Where are you going?"
                zoneOptions={zoneOptions}
                setZoneId={setZoneId}
            />
            <TypeSection prompt="When are you riding?" />
            <PurchaseSection prompt="Where will you purchase the fare?" />
            <TripsSection prompt="How many rides will you need?" />
            <ResultSection
                className="inverted-colors"
                prompt="Your fare will cost"
            />
        </div>
    )
};

export default FareCalculatorForm;
