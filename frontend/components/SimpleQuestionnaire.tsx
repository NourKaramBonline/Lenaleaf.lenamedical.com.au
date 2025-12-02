import { useState } from "react";

export default function SimpleQuestionnaire() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);

  console.log('SimpleQuestionnaire render - isOpen:', isOpen, 'step:', step);

  const handleStart = () => {
    console.log('Start button clicked!');
    setIsOpen(true);
  };

  const handleNext = () => {
    console.log('Next button clicked!');
    setStep(step + 1);
  };

  const handleClose = () => {
    console.log('Close button clicked!');
    setIsOpen(false);
    setStep(1);
  };

  if (!isOpen) {
    return (
      <div className="bg-white border-2 border-blue-500 rounded-lg p-6 max-w-md mx-auto">
        <h3 className="text-xl font-bold mb-4">Simple Test Questionnaire</h3>
        <p className="mb-4">This is a simple test to check if buttons work.</p>
        <button
          onClick={handleStart}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Start Test
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Step {step}</h2>
        <p className="mb-4">This is step {step} of the questionnaire.</p>
        
        {step < 3 ? (
          <div className="flex gap-4">
            <button
              onClick={handleNext}
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
            >
              Next Step
            </button>
            <button
              onClick={handleClose}
              className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600"
            >
              Close
            </button>
          </div>
        ) : (
          <button
            onClick={handleClose}
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
          >
            Finish
          </button>
        )}
      </div>
    </div>
  );
}
