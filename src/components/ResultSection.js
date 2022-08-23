const ResultSection = ({ prompt, total }) => {
    return (
        <section className="flex-column result-section inverted-colors">
            <h3 className="prompt-text">{prompt}</h3>
            <h1 className="result-text">{total}</h1>
        </section>
    )
};

export default ResultSection;
