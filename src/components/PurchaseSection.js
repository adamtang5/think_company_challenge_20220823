const PurchaseSection = ({ prompt, purchaseOptions, purchase, setPurchase }) => {
    const handlePurchaseChange = e => {
        // console.log(e.target.value);
        setPurchase(e.target.value);
    };

    return (
        <section className="flex-column purchase-section">
            <h3 className="prompt-text">{prompt}</h3>
            {purchaseOptions?.map(option => (
                <label
                    key={option.value}
                    htmlFor={option.value}
                >
                    <input
                        type="radio"
                        name="purchase"
                        value={option.value}
                        checked={option.value === purchase}
                        onChange={handlePurchaseChange}
                    />
                    {option.label}
                </label>
            ))}
        </section>
    )
};

export default PurchaseSection;
