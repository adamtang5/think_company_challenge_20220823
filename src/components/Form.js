import FormHeader from "./FormHeader";
import ZoneSection from "./ZoneSection";
import TypeSection from "./TypeSection";
import PurchaseSection from "./PurchaseSection";
import TripsSection from "./TripsSection";
import ResultSection from "./ResultSection";

const FareCalculatorForm = () => {
    return (
        <div id="form" className="centered flex-column">
            <FormHeader title="Regional Rail Fares" />
            <ZoneSection prompt="Where are you going?" />
            <TypeSection prompt="When are you riding?" />
            <PurchaseSection prompt="Where will you purchase the fare?" />
            <TripsSection prompt="How many rides will you need?" />
            <ResultSection prompt="Your fare will cost" />
        </div>
    )
};

export default FareCalculatorForm;
