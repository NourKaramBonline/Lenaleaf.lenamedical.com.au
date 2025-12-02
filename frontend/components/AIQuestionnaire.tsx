import { useState } from "react";

interface Question {
  id: string;
  text: string;
  required: boolean;
}

interface Answers {
  [key: string]: boolean;
}

type EligibilityResult = 'eligible' | 'requires_review' | 'not_eligible';

const questions: Question[] = [
  {
    id: 'age_18_plus',
    text: 'I am aged 18 years or older.',
    required: true
  },
  {
    id: 'understand_alternative',
    text: 'I understand that this consultation is for alternative treatment evaluation (including medicinal cannabis) and not for a standard GP or general medical certificate consultation.',
    required: true
  },
  {
    id: 'chronic_condition',
    text: 'My medical condition has been present for three months or longer (i.e., a chronic or persistent condition) and I have already received and completed previous treatments (such as medications, physiotherapy, injections, psychological therapy, specialist referral) with insufficient relief or intolerable side-effects.',
    required: true
  },
  {
    id: 'conventional_therapies',
    text: 'I have been informed that medicinal cannabis may be considered only after conventional therapies have been tried and found inadequate, in line with TGA guidance.',
    required: true
  },
  {
    id: 'limited_evidence',
    text: 'I understand that although medicinal cannabis may offer benefit, the scientific evidence for many conditions remains limited, and it may not be appropriate for all patients.',
    required: true
  },
  {
    id: 'no_psychosis',
    text: 'I do not currently have a diagnosis of schizophrenia, bipolar type 1 or 2, or have I experienced drug-induced psychosis.',
    required: true
  },
  {
    id: 'no_substance_abuse',
    text: 'I do not have a current or recent history of substance abuse or illicit drug dependence.',
    required: true
  },
  {
    id: 'not_pregnant',
    text: 'I am not currently pregnant, breastfeeding, or actively trying to conceive.',
    required: true
  },
  {
    id: 'accept_costs',
    text: 'I am aware of and accept the costs involved in the consultation and any follow-up visits or prescriptions.',
    required: true
  },
  {
    id: 'understand_laws',
    text: 'I understand and accept that state or territory laws (in addition to federal TGA regulations) may apply to the prescribing, dispensing, use and driving/operating machinery restrictions for medicinal cannabis in my jurisdiction.',
    required: true
  },
  {
    id: 'sas_approval',
    text: 'I understand that if my doctor wishes to prescribe a medicinal cannabis product not registered on the Australian Register of Therapeutic Goods (ARTG), it may require approval under the TGA\'s Special Access Scheme (SAS) or the Authorised Prescriber (AP) Scheme, and that supply may involve additional administrative steps.',
    required: true
  },
  {
    id: 'driving_impairment',
    text: 'I understand that medicinal cannabis that contains THC may impair driving or operation of machinery, and I will discuss this with my doctor with respect to my situation.',
    required: true
  },
  {
    id: 'consent_review',
    text: 'I consent to my medical practitioner reviewing my medical history, previous treatments, and discussing the potential benefits, risks and side-effects of medicinal cannabis treatment with me.',
    required: true
  }
];

export default function AIQuestionnaire() {
  const [currentStep, setCurrentStep] = useState<'intro' | 'consent' | 'questions' | 'results'>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);

  console.log('AIQuestionnaire render - currentStep:', currentStep, 'showQuestionnaire:', showQuestionnaire);

  const calculateEligibility = (answers: Answers): EligibilityResult => {
    // Auto disqualify conditions
    if (!answers.age_18_plus || !answers.no_psychosis || !answers.no_substance_abuse) {
      return 'not_eligible';
    }
    
    // High priority if chronic condition and previous treatments
    if (answers.chronic_condition && answers.conventional_therapies) {
      return 'eligible';
    }
    
    // Requires doctor review for other cases
    return 'requires_review';
  };

  const handleAnswer = (questionId: string, answer: boolean) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setCurrentStep('results');
    }
  };

  const handleStart = () => {
    setCurrentStep('consent');
  };

  const handleConsent = () => {
    setCurrentStep('questions');
  };

  const handleRestart = () => {
    setCurrentStep('intro');
    setCurrentQuestionIndex(0);
    setAnswers({});
  };

  const getResultMessage = (result: EligibilityResult) => {
    switch (result) {
      case 'eligible':
        return {
          title: '✅ Likely Eligible',
          message: 'Based on your answers, you may be suitable for medicinal cannabis consultation.',
          action: 'Book Consultation Now',
          color: '#19b4bc'
        };
      case 'requires_review':
        return {
          title: '⚠️ Requires Doctor Review',
          message: 'Your case requires doctor evaluation before approval.',
          action: 'Speak with a Doctor',
          color: '#e9762b'
        };
      case 'not_eligible':
        return {
          title: '❌ Not Eligible Currently',
          message: 'Based on your current answers, medicinal cannabis may not be appropriate at this time.',
          action: 'Request General Medical Advice',
          color: '#64748b'
        };
    }
  };

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  if (!showQuestionnaire) {
    console.log('Rendering initial card view');
    return (
      <div className="bg-gradient-to-br from-[#19b4bc]/10 via-white to-[#e9762b]/10 rounded-3xl p-8 shadow-xl ring-2 ring-[#19b4bc]/20">
        <div className="text-center space-y-6">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#19b4bc] to-[#15a2aa] shadow-lg mx-auto">
            <span className="text-white text-2xl">🧠</span>
          </div>
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#19b4bc] to-[#e9762b] bg-clip-text text-transparent mb-3">
              AI Pre-Consultation Eligibility Check
            </h3>
            <p className="text-slate-600 max-w-md mx-auto">
              This assessment helps determine whether you may be suitable for medicinal cannabis consultation. It does not replace a doctor's diagnosis.
            </p>
          </div>
          <button
            onClick={() => {
              console.log('Start Assessment clicked');
              setShowQuestionnaire(true);
            }}
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white rounded-full shadow-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-xl"
            style={{ backgroundColor: "#19b4bc" }}
          >
            ✅ Start Assessment
          </button>
        </div>
      </div>
    );
  }

  if (currentStep === 'intro') {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl">
          <div className="text-center space-y-6">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#19b4bc] to-[#15a2aa] shadow-lg mx-auto">
              <span className="text-white text-2xl">🧠</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-[#19b4bc] to-[#e9762b] bg-clip-text text-transparent mb-3">
                AI Pre-Consultation Eligibility Check
              </h2>
              <p className="text-slate-600">
                This assessment helps determine whether you may be suitable for medicinal cannabis consultation. It does not replace a doctor's diagnosis.
              </p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={handleStart}
                className="flex-1 inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white rounded-full shadow-lg transition-all duration-200 hover:scale-[1.02]"
                style={{ backgroundColor: "#19b4bc" }}
              >
                Continue
              </button>
              <button
                onClick={() => setShowQuestionnaire(false)}
                className="flex-1 inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-full bg-white shadow-lg transition-all duration-200 hover:scale-[1.02]"
                style={{
                  borderWidth: "2px",
                  borderColor: "#e9762b",
                  color: "#e9762b",
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 'consent') {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl max-h-[80vh] overflow-y-auto">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#19b4bc" }}>
                Legal Consent & Information
              </h2>
              <p className="text-slate-600 mb-6">
                Before proceeding, please read and confirm the following:
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-[#e9762b] mt-1">✓</span>
                <p className="text-sm text-slate-700">Information provided is truthful and accurate</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#e9762b] mt-1">✓</span>
                <p className="text-sm text-slate-700">This is not a medical diagnosis</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#e9762b] mt-1">✓</span>
                <p className="text-sm text-slate-700">A doctor will review all answers</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#e9762b] mt-1">✓</span>
                <p className="text-sm text-slate-700">Data is handled securely and privately</p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-4 border border-blue-200">
              <p className="text-xs text-blue-800">
                <strong>Privacy Notice:</strong> Your responses are confidential and will only be shared with healthcare professionals involved in your care.
              </p>
            </div>

            <div className="flex gap-4">
              <button
                onClick={handleConsent}
                className="flex-1 inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white rounded-full shadow-lg transition-all duration-200 hover:scale-[1.02]"
                style={{ backgroundColor: "#19b4bc" }}
              >
                ✅ I Agree & Continue
              </button>
              <button
                onClick={handleRestart}
                className="px-6 py-3 text-sm font-semibold rounded-full bg-white shadow-lg transition-all duration-200 hover:scale-[1.02]"
                style={{
                  borderWidth: "2px",
                  borderColor: "#e9762b",
                  color: "#e9762b",
                }}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 'questions') {
    const currentQuestion = questions[currentQuestionIndex];
    
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl">
          <div className="space-y-6">
            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-slate-500">
                <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all duration-300 ease-out"
                  style={{ 
                    width: `${progress}%`,
                    background: 'linear-gradient(90deg, #19b4bc, #e9762b)'
                  }}
                />
              </div>
            </div>

            {/* Question */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div 
                  className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold text-white shadow-sm"
                  style={{ backgroundColor: "#e9762b" }}
                >
                  {currentQuestionIndex + 1}
                </div>
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                  Pre-Consultation Screening
                </span>
              </div>
              
              <p className="text-lg leading-relaxed text-slate-800 font-medium">
                {currentQuestion.text}
              </p>

              <div className="flex gap-4">
                <button
                  onClick={() => handleAnswer(currentQuestion.id, true)}
                  className="flex-1 inline-flex items-center justify-center px-6 py-4 text-sm font-semibold text-white rounded-full shadow-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-xl"
                  style={{ backgroundColor: "#19b4bc" }}
                >
                  Yes
                </button>
                <button
                  onClick={() => handleAnswer(currentQuestion.id, false)}
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-full bg-white shadow-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-xl"
                  style={{
                    borderWidth: "2px",
                    borderColor: "#e9762b",
                    color: "#e9762b",
                  }}
                >
                  No
                </button>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-4">
              <button
                onClick={() => setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1))}
                disabled={currentQuestionIndex === 0}
                className="text-sm text-slate-500 hover:text-slate-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ← Previous
              </button>
              <button
                onClick={() => setShowQuestionnaire(false)}
                className="text-sm text-slate-500 hover:text-slate-700"
              >
                Exit Assessment
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 'results') {
    const result = calculateEligibility(answers);
    const resultMessage = getResultMessage(result);
    
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl">
          <div className="text-center space-y-6">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full shadow-lg mx-auto"
                 style={{ backgroundColor: resultMessage.color }}>
              <span className="text-white text-2xl">
                {result === 'eligible' ? '✓' : result === 'requires_review' ? '!' : '✕'}
              </span>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-3" style={{ color: resultMessage.color }}>
                {resultMessage.title}
              </h2>
              <p className="text-slate-600">
                {resultMessage.message}
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-4 text-left">
              <p className="text-xs text-slate-600 font-medium mb-2">Your Responses Summary:</p>
              <div className="space-y-1">
                {Object.entries(answers).map(([key, value]) => {
                  const question = questions.find(q => q.id === key);
                  return (
                    <div key={key} className="flex items-center gap-2 text-xs">
                      <span className={`w-2 h-2 rounded-full ${value ? 'bg-green-500' : 'bg-red-500'}`} />
                      <span className="text-slate-700 truncate">
                        {question?.text.substring(0, 50)}...
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="space-y-3">
              <button
                className="w-full inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white rounded-full shadow-lg transition-all duration-200 hover:scale-[1.02]"
                style={{ backgroundColor: resultMessage.color }}
              >
                {resultMessage.action}
              </button>
              
              <div className="flex gap-3">
                <button
                  onClick={handleRestart}
                  className="flex-1 px-6 py-3 text-sm font-semibold rounded-full bg-white shadow-lg transition-all duration-200 hover:scale-[1.02]"
                  style={{
                    borderWidth: "2px",
                    borderColor: "#e9762b",
                    color: "#e9762b",
                  }}
                >
                  Retake Assessment
                </button>
                <button
                  onClick={() => setShowQuestionnaire(false)}
                  className="flex-1 px-6 py-3 text-sm font-semibold rounded-full bg-white shadow-lg transition-all duration-200 hover:scale-[1.02]"
                  style={{
                    borderWidth: "2px",
                    borderColor: "#19b4bc",
                    color: "#19b4bc",
                  }}
                >
                  Close
                </button>
              </div>
            </div>

            <p className="text-xs text-slate-500">
              A doctor will make the final determination during your consultation.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
