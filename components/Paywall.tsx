import React from 'react';

interface PaywallProps {
  onClose: () => void;
  onAddCredits: () => void;
}

const Paywall: React.FC<PaywallProps> = ({ onClose, onAddCredits }) => {
  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center animate-fade-in">
      <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-xl p-8 max-w-md w-full text-center transform transition-all duration-300 ease-in-out scale-95 hover:scale-100">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-4">
          Out of Credits!
        </h2>
        <p className="text-gray-300 mb-6 text-lg">
          You've used all your free credits. Please purchase more to continue using our AI-powered features.
        </p>
        <div className="flex flex-col gap-4">
            <button
              onClick={() => {
                onAddCredits();
                onClose();
              }}
              className="w-full bg-gradient-to-br from-green-500 to-emerald-400 text-white font-bold py-4 px-8 text-xl rounded-lg transition-all duration-300 ease-in-out shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/50 hover:-translate-y-px active:scale-95 active:shadow-inner"
            >
              Buy 5 Credits
            </button>
            <button
              onClick={onClose}
              className="w-full bg-gray-700 hover:bg-gray-600 text-gray-200 font-semibold py-3 px-6 rounded-lg transition-colors text-md"
            >
              Maybe Later
            </button>
        </div>
      </div>
    </div>
  );
};

export default Paywall;
