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
        { label: 'Arsenal', sell: 46.3, buy: 50.2 },
        { label: 'Draw', sell: 26, buy: 28.7 },
        { label: 'Real Madrid', sell: 25.4, buy: 27.9 },
      ],
      racing: [
        { label: 'Alondra', sell: 32, buy: 36 },
        { label: 'Radio Star', sell: 17, buy: 20 },
        { label: 'Mwafaq', sell: 10, buy: 13 },
        { label: 'Born Rossetti', sell: 10, buy: 13 },
        { label: 'Memphisatmidnight', sell: 8, buy: 11 },
        { label: 'Westgate Warrior', sell: 8, buy: 11 },
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

    interface BetslipProps {
        event: string;
    }

    const Betslip: React.FC<BetslipProps> = ({ event }) => (
      <div className="p-4 bg-casal text-white">
        <h3 className="font-bold mb-2">Betslip</h3>
        <p>Selected: {event}</p>
        <p>Stake: £X (calculated from %)</p>
      </div>
    );

    interface EventViewProps {
        title: string;
        selections: SelectionData[];
        showBetslip: boolean;
    }

    const EventView: React.FC<EventViewProps> = ({ title, selections, showBetslip }) => (
      <div className="bg-elm-dark text-white p-4 max-w-xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <span className="text-sm text-white">Balance: £5,000</span>
        </div>
        {selections.map((s) => (
          <Selection key={s.label} {...s} />
        ))}
        {showBetslip && <Betslip event={title} />}
      </div>
    );

    const Wireframes: React.FC = () => (
      <div className="flex flex-col gap-12 p-6 bg-elm-light min-h-screen">
        <h1 className="text-white text-2xl font-bold">ShareMatch Wireframes</h1>

        {/* Desktop Views */}
        <EventView title="Arsenal vs Real Madrid" selections={outcomes.football} showBetslip={false} />
        <EventView title="Arsenal vs Real Madrid" selections={outcomes.football} showBetslip={true} />
        <EventView title="Horse Racing" selections={outcomes.racing} showBetslip={false} />
        <EventView title="Horse Racing" selections={outcomes.racing} showBetslip={true} />

        {/* Mobile Views with same layout but styled for mobile */}
        {/* Note: Tailwind's max-w-xs is applied to the container, not individual EventViews for mobile simulation */}
        <div className="max-w-xs mx-auto flex flex-col gap-12">
            <EventView title="Mobile: Arsenal vs Real Madrid" selections={outcomes.football} showBetslip={false} />
            <EventView title="Mobile: Arsenal vs Real Madrid (Betslip)" selections={outcomes.football} showBetslip={true} />
            <EventView title="Mobile: Horse Racing" selections={outcomes.racing} showBetslip={false} />
            <EventView title="Mobile: Horse Racing (Betslip)" selections={outcomes.racing} showBetslip={true} />
        </div>
      </div>
    );

    export default Wireframes;