import React from 'react';
import App from '../App';
import FareCalculatorForm from '../components/Form';
import { screen, render, fireEvent, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
// import { shallow, configure } from 'enzyme';
// import { getByText } from '@testing-library/dom';

const renderApp = () => render(<App />);

let resultTotal, zoneId, type, purchase, trips, headerTitle, zonePrompt, typePrompt, typeHelper, purchasePrompt, tripsPrompt, resultPrompt;

afterEach(() => cleanup());

beforeEach(() => {
    let { getByTestId } = renderApp();
    headerTitle = getByTestId('header-title');
    zonePrompt = getByTestId('zone-section-prompt');
    typePrompt = getByTestId('type-section-prompt');
    typeHelper = getByTestId('type-section-helper');
    purchasePrompt = getByTestId('purchase-section-prompt');
    tripsPrompt = getByTestId('trips-section-prompt');
    resultPrompt = getByTestId('result-section-prompt');
    resultTotal = getByTestId('result-total');
    zoneId = getByTestId('zone-id');
    type = getByTestId('type');
    purchase = getByTestId('purchase');
    trips = getByTestId('trips');
})

test('fare calculator mounts', () => {
    expect(headerTitle).toHaveTextContent('Regional Rail Fares');
    expect(zonePrompt).toHaveTextContent('Where are you going?');
    expect(typePrompt).toHaveTextContent('When are you riding?');
    expect(purchasePrompt).toHaveTextContent('Where will you purchase the fare?');
    expect(tripsPrompt).toHaveTextContent('How many rides will you need?');
    expect(resultPrompt).toHaveTextContent('Your fare will cost');
})
