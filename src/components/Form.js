import FormHeader from "./FormHeader";
import ZoneSection from "./ZoneSection";
import TypeSection from "./TypeSection";
import PurchaseSection from "./PurchaseSection";
import TripsSection from "./TripsSection";
import ResultSection from "./ResultSection";
import "./Form.css";

const FareCalculatorForm = () => {
    return (
        <div id="form" className="centered flex-column">
            <FormHeader
                className="inverted-colors"
                title="Regional Rail Fares"
            />
            <ZoneSection prompt="Where are you going?" />
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
