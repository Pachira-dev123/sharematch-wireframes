    // React wireframes for ShareMatch sandbox UI
    // This file renders 8 wireframes (4 desktop, 4 mobile) for football and horse racing markets using Tailwind CSS and ShareMatch branding

    import React from 'react';

    // Define types for the outcomes and selections for better type safety
    interface SelectionData {
      label: string;
      sell: number;
      buy: number;
    }

    interface Outcomes {
      football: SelectionData[];
      racing: SelectionData[];
    }

    const outcomes: Outcomes = {
      football: [
        { label: 'Arsenal', sell: 4.63, buy: 5.02 },
        { label: 'Draw', sell: 2.60, buy: 2.87 },
        { label: 'Real Madrid', sell: 2.54, buy: 2.79 },
      ],
      racing: [
        { label: 'Alondra', sell: 3.20, buy: 3.60 },
        { label: 'Radio Star', sell: 1.70, buy: 2.00 },
        { label: 'Mwafaq', sell: 1.00, buy: 1.30 },
        { label: 'Born Rossetti', sell: 1.00, buy: 1.30 },
        { label: 'Memphisatmidnight', sell:1.80, buy: 2.10 },
        { label: 'Westgate Warrior', sell: 1.00, buy: 1.30 },
      ],
    };

    const Selection: React.FC<SelectionData> = ({ label, sell, buy }) => (
      <div className="flex justify-between items-center p-4 border-b border-elm-dark">
        <span className="text-white font-semibold">{label}</span>
        <div className="flex gap-2">
          <button className="bg-elm-light text-white px-3 py-1 rounded">Sell {sell}</button>
          <button className="bg-primary text-white px-3 py-1 rounded">Buy {buy}</button>
        </div>
      </div>
    );

    // Renamed Betslip component
    interface SharePurchaseConfirmationProps {
        event: string;
    }

    const SharePurchaseConfirmation: React.FC<SharePurchaseConfirmationProps> = ({ event }) => (
  <div className="p-4 bg-casal text-white mt-4 border-t border-elm-light">
    <h3 className="font-bold mb-2">Share Purchase Confirmation</h3>
    <p>Selected: {event}</p>
    <p>Stake: £X (calculated from %)</p>
  </div>
);

    interface EventViewProps {
        title: string;
        selections: SelectionData[];
        showSharePurchaseConfirmation: boolean;
    }

    const EventView: React.FC<EventViewProps> = ({ title, selections, showSharePurchaseConfirmation }) => (
  <div className="bg-elm-dark text-white p-4 max-w-xl mx-auto border-b border-casal pb-2 mb-4">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <span className="text-sm text-white">Balance: £5,000</span>
    </div>
    {selections.map((s) => (
      <Selection key={s.label} {...s} />
    ))}
    {showSharePurchaseConfirmation && <SharePurchaseConfirmation event={title} />}
    <footer className="text-center text-xs text-gray-300 mt-4 pt-2 border-t border-casal">
        All successful share purchases settle at £10.00
    </footer>
  </div>
);

    const Wireframes: React.FC = () => (
      <div className="flex flex-col gap-8 p-6 bg-elm-light min-h-screen">
        <h1 className="text-white text-2xl font-bold">ShareMatch Wireframes</h1>

        {/* Desktop Views */}
        <EventView title="Arsenal vs Real Madrid" selections={outcomes.football} showSharePurchaseConfirmation={false} />
        <EventView title="Arsenal vs Real Madrid" selections={outcomes.football} showSharePurchaseConfirmation={true} />
        <EventView title="Horse Racing" selections={outcomes.racing} showSharePurchaseConfirmation={false} />
        <EventView title="Horse Racing" selections={outcomes.racing} showSharePurchaseConfirmation={true} />

        {/* Mobile Views with same layout but styled for mobile */}
        {/* Note: Tailwind's max-w-xs is applied to the container, not individual EventViews for mobile simulation */}
        <div className="max-w-xs mx-auto flex flex-col gap-8">
            <EventView title="Mobile: Arsenal vs Real Madrid" selections={outcomes.football} showSharePurchaseConfirmation={false} />
            <EventView title="Mobile: Arsenal vs Real Madrid (Share Purchase Confirmation)" selections={outcomes.football} showSharePurchaseConfirmation={true} />
            <EventView title="Mobile: Horse Racing" selections={outcomes.racing} showSharePurchaseConfirmation={false} />
            <EventView title="Mobile: Horse Racing (Share Purchase Confirmation)" selections={outcomes.racing} showSharePurchaseConfirmation={true} />
        </div>
      </div>
    );

    export default Wireframes;