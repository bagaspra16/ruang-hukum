'use client';

import { useState, useCallback } from 'react';
import {
  BookOpen,
  Scale,
  Shield,
  Users,
  Search,
  Briefcase,
  ChevronRight,
  CheckCircle,
  XCircle,
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  Target,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import { moduleContent, quizContent } from '@/lib/mock-data-i18n';
import { useLanguage } from '@/lib/LanguageContext';

const iconMap: Record<string, React.ElementType> = {
  Scale, BookOpen, Shield, Users, Search, Briefcase,
};

export default function QuizPage() {
  const { t, lang } = useLanguage();
  const [activeSlug, setActiveSlug] = useState('legal-science');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);

  const modules = moduleContent[lang];
  const questions = quizContent[lang][activeSlug] || [];
  const question = questions[currentQuestion];

  const correctCount = Object.entries(selectedAnswers).filter(([idx, ans]) => {
    const q = questions[parseInt(idx)];
    return q && ans === q.correct_answer;
  }).length;

  const incorrectCount = Object.keys(selectedAnswers).length - correctCount;
  const score = questions.length > 0 ? Math.round((correctCount / questions.length) * 100) : 0;
  const progressPercent = questions.length > 0 ? Math.round(((currentQuestion + 1) / questions.length) * 100) : 0;

  const handleSelectAnswer = useCallback((key: string) => {
    if (selectedAnswers[currentQuestion] !== undefined) return;
    setSelectedAnswers(prev => ({ ...prev, [currentQuestion]: key }));
  }, [currentQuestion, selectedAnswers]);

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) setCurrentQuestion(prev => prev - 1);
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResult(false);
  };

  const handleChangeModule = (slug: string) => {
    setActiveSlug(slug);
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResult(false);
  };

  const selectedAnswer = selectedAnswers[currentQuestion];
  const isAnswered = selectedAnswer !== undefined;
  const isCorrect = isAnswered && question && selectedAnswer === question.correct_answer;

  return (
    <div className="min-h-screen bg-[#f9f5ef]">
      <Navbar />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Mobile Category Switcher (visible < lg) */}
        <div className="lg:hidden mb-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-serif font-bold text-gray-800 text-xs">{t.quiz.categories}</h3>
            <span className="text-[11px] text-gray-500">
              {modules.find((m) => m.slug === activeSlug)?.title}
            </span>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            {modules.map((m) => {
              const MIcon = iconMap[m.icon] || BookOpen;
              const isActive = m.slug === activeSlug;
              return (
                <button
                  key={m.id}
                  onClick={() => handleChangeModule(m.slug)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#7a1c1c] text-white border-[#7a1c1c] shadow-xs'
                      : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <MIcon size={14} className={isActive ? 'text-[#d4af37]' : 'text-gray-400'} />
                  <span>{m.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 xl:gap-8 items-start">
          {/* Left Sidebar - Quiz Categories (hidden < lg, shown on desktop) */}
          <aside className="hidden lg:block lg:w-64 xl:w-72 shrink-0">
            <div className="flex items-center gap-2 mb-3">
              <ArrowLeft size={16} className="text-gray-500" />
              <span className="text-gray-500 text-sm">{t.quiz.backToQuiz}</span>
            </div>
            <h3 className="font-serif font-bold text-gray-800 text-sm mb-3 px-1">{t.quiz.categories}</h3>
            <nav className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-xs">
              {modules.map((m) => {
                const MIcon = iconMap[m.icon] || BookOpen;
                const mQuizzes = quizContent[lang][m.slug] || [];
                const mAnswered = Object.keys(selectedAnswers).length;
                const isActive = m.slug === activeSlug;
                return (
                  <button
                    key={m.id}
                    onClick={() => handleChangeModule(m.slug)}
                    className={`w-full flex items-center justify-between gap-3 px-4 py-3.5 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors text-left cursor-pointer ${
                      isActive ? 'bg-[#7a1c1c]/10 text-[#7a1c1c]' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <MIcon size={16} className={isActive ? 'text-[#7a1c1c]' : 'text-gray-400'} />
                      <div>
                        <p className={`text-sm font-semibold leading-tight ${isActive ? 'text-[#7a1c1c]' : 'text-gray-700'}`}>
                          {m.title}
                        </p>
                        <p className="text-xs text-gray-400">
                          {isActive ? `${mAnswered}/${mQuizzes.length}` : `0/${mQuizzes.length}`} {t.quiz.quizzes}
                        </p>
                      </div>
                    </div>
                    <ChevronRight size={14} className={isActive ? 'text-[#7a1c1c]' : 'text-gray-300'} />
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Main Quiz Area */}
          <div className="flex-1">
            {/* Quiz Header Banner */}
            <div
              className="relative rounded-2xl overflow-hidden mb-6"
              style={{ background: 'linear-gradient(135deg, #4a0e0e 0%, #7a1c1c 100%)' }}
            >
              <div
                className="absolute inset-0 opacity-20 bg-cover bg-center"
                style={{ backgroundImage: `url('/wallpapers/wallpaper-3.jpg')` }}
              />
              <div className="relative z-10 p-6 flex items-center gap-5">
                <div className="w-16 h-16 rounded-full border-2 border-white/30 bg-white/10 flex items-center justify-center shrink-0">
                  <BookOpen size={28} className="text-white" />
                </div>
                <div>
                  <p className="text-[#d4af37] text-xs font-semibold tracking-widest uppercase mb-1">
                    {modules.find(m => m.slug === activeSlug)?.title?.toUpperCase()}
                  </p>
                  <h1 className="text-white font-bold text-2xl mb-1">{t.quiz.interactiveQuiz}</h1>
                  <p className="text-white/70 text-sm">{t.quiz.quizDesc}</p>
                  <div className="flex items-center gap-5 mt-3">
                    <div className="flex items-center gap-1.5 text-white/70 text-xs">
                      <BookOpen size={13} />
                      <span>{t.quiz.quizOf} {currentQuestion + 1} {t.quiz.of} {questions.length}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-white/70 text-xs">
                      <Target size={13} />
                      <span>{t.quiz.estimatedTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {showResult ? (
              /* Results Screen */
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center">
                <div className="w-24 h-24 mx-auto mb-6 relative">
                  <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                    <circle cx="50" cy="50" r="42" fill="none" stroke="#f3f4f6" strokeWidth="10" />
                    <circle
                      cx="50" cy="50" r="42" fill="none"
                      stroke={score >= 70 ? '#16a34a' : '#7a1c1c'}
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeDasharray={`${(score / 100) * 264} 264`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-900">{score}%</span>
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {score >= 80 ? t.quiz.excellent : score >= 60 ? t.quiz.goodJob : t.quiz.keepPracticing}
                </h2>
                <p className="text-gray-500 mb-6">
                  {t.quiz.youAnswered} {correctCount} {t.quiz.outOf} {questions.length} {t.quiz.questionsCorrectly}
                </p>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-2xl font-bold text-gray-900">{questions.length}</p>
                    <p className="text-gray-500 text-sm">{t.quiz.totalQuestions}</p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-4">
                    <p className="text-2xl font-bold text-green-600">{correctCount}</p>
                    <p className="text-gray-500 text-sm">{t.quiz.correctAnswers}</p>
                  </div>
                  <div className="bg-red-50 rounded-xl p-4">
                    <p className="text-2xl font-bold text-red-500">{incorrectCount}</p>
                    <p className="text-gray-500 text-sm">{t.quiz.incorrectAnswers}</p>
                  </div>
                </div>
                <button
                  onClick={handleReset}
                  className="flex items-center gap-2 bg-[#7a1c1c] hover:bg-[#6b1414] text-white font-semibold px-6 py-3 rounded-xl transition-colors mx-auto"
                >
                  <RotateCcw size={16} />
                  {t.quiz.retryQuiz}
                </button>
              </div>
            ) : (
              question && (
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                  {/* Question Progress */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-500 text-sm font-medium">
                      {t.quiz.questionOf} {currentQuestion + 1} {t.quiz.of} {questions.length}
                    </span>
                    <span className="text-gray-500 text-sm">{progressPercent} %</span>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="h-2 bg-gray-100 rounded-full mb-6">
                    <div
                      className="h-full bg-[#7a1c1c] rounded-full transition-all"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>

                  {/* Question */}
                  <h2 className="text-xl font-serif font-bold text-gray-900 mb-6">{question.question}</h2>

                  {/* Options */}
                  <div className="space-y-3 mb-8">
                    {question.options.map((option) => {
                      const isSelected = selectedAnswer === option.key;
                      const isCorrectOption = option.key === question.correct_answer;
                      
                      let optionStyle = 'border-gray-200 bg-white hover:border-[#7a1c1c]/30 hover:bg-[#7a1c1c]/5';
                      if (isAnswered) {
                        if (isSelected && isCorrectOption) optionStyle = 'border-green-500 bg-green-50';
                        else if (isSelected && !isCorrectOption) optionStyle = 'border-red-400 bg-red-50';
                        else if (!isSelected && isCorrectOption) optionStyle = 'border-green-400 bg-green-50/50';
                        else optionStyle = 'border-gray-200 bg-white opacity-60';
                      }

                      return (
                        <button
                          key={option.key}
                          id={`option-${option.key}`}
                          onClick={() => handleSelectAnswer(option.key)}
                          disabled={isAnswered}
                          className={`w-full flex items-center gap-4 p-4 border-2 rounded-xl text-left transition-all ${optionStyle}`}
                        >
                          {/* Key circle */}
                          <div
                            className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${
                              isAnswered && isCorrectOption
                                ? 'bg-green-500 text-white'
                                : isAnswered && isSelected && !isCorrectOption
                                ? 'bg-red-400 text-white'
                                : 'bg-gray-100 text-gray-600'
                            }`}
                          >
                            {option.key}
                          </div>
                          <span className="text-gray-800 text-sm flex-1">{option.text}</span>
                          {isAnswered && isCorrectOption && <CheckCircle size={18} className="text-green-500 shrink-0" />}
                          {isAnswered && isSelected && !isCorrectOption && <XCircle size={18} className="text-red-400 shrink-0" />}
                        </button>
                      );
                    })}
                  </div>

                  {/* Feedback */}
                  {isAnswered && (
                    <div className={`p-4 rounded-xl mb-6 ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                      <div className="flex items-center gap-2 mb-1">
                        {isCorrect ? (
                          <CheckCircle size={16} className="text-green-600" />
                        ) : (
                          <XCircle size={16} className="text-red-500" />
                        )}
                        <span className={`font-semibold text-sm ${isCorrect ? 'text-green-700' : 'text-red-600'}`}>
                          {isCorrect ? t.quiz.correct : `${t.quiz.incorrect} ${question.correct_answer}.`}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Navigation */}
                  <div className="flex items-center justify-between">
                    <button
                      id="prev-question-btn"
                      onClick={handlePrev}
                      disabled={currentQuestion === 0}
                      className="flex items-center gap-2 border border-[#7a1c1c] text-[#7a1c1c] hover:bg-[#7a1c1c]/5 font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      <ArrowLeft size={16} />
                      {t.quiz.previous}
                    </button>
                    <button
                      id="next-question-btn"
                      onClick={handleNext}
                      disabled={!isAnswered}
                      className="flex items-center gap-2 bg-[#7a1c1c] hover:bg-[#6b1414] text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      {currentQuestion === questions.length - 1 ? t.quiz.finishQuiz : t.quiz.nextQuestion}
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              )
            )}
          </div>

          {/* Right Sidebar - Score */}
          <div className="lg:w-60 shrink-0 space-y-5">
            {/* Progress Ring */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <div className="flex items-center gap-2 mb-4">
                <Target size={18} className="text-[#7a1c1c]" />
                <h3 className="font-serif font-bold text-gray-900">{t.quiz.yourProgress}</h3>
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                {/* Ring */}
                <div className="w-20 h-20 relative shrink-0">
                  <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                    <circle cx="50" cy="50" r="42" fill="none" stroke="#f3f4f6" strokeWidth="12" />
                    <circle
                      cx="50" cy="50" r="42" fill="none"
                      stroke="#7a1c1c"
                      strokeWidth="12"
                      strokeLinecap="round"
                      strokeDasharray={`${(score / 100) * 264} 264`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold text-gray-900">{score}%</span>
                  </div>
                </div>
                <div>
                  <p className="text-gray-500 text-xs">{t.quiz.quizOf} {currentQuestion + 1} {t.quiz.of} {questions.length}</p>
                  <p className="text-gray-700 text-sm font-medium">
                    {modules.find(m => m.slug === activeSlug)?.title}
                  </p>
                  <div className="flex items-center gap-1.5 mt-2">
                    <CheckCircle size={13} className="text-green-500" />
                    <span className="text-xs text-green-600">{correctCount} {t.quiz.correctAnswer}</span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-1">
                    <XCircle size={13} className="text-red-400" />
                    <span className="text-xs text-red-500">{incorrectCount} {t.quiz.incorrectAnswer}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Summary */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-serif font-bold text-gray-900 mb-4">{t.quiz.quickSummary}</h3>
              <div className="space-y-2">
                {[
                  { label: t.quiz.totalQuestions, value: questions.length },
                  { label: t.quiz.correctAnswers, value: correctCount },
                  { label: t.quiz.incorrectAnswers, value: incorrectCount },
                  { label: t.quiz.score, value: `${score}%` },
                ].map(item => (
                  <div key={item.label} className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{item.label}</span>
                    <span className="font-semibold text-gray-900">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Motivation quote */}
            <div className="bg-[#7a1c1c]/5 border border-[#7a1c1c]/10 rounded-2xl p-5 text-center">
              <Scale size={24} className="text-[#d4af37] mx-auto mb-3" />
              <blockquote className="text-gray-700 text-sm italic leading-relaxed mb-2">
                {t.quiz.quote}
              </blockquote>
              <p className="text-[#7a1c1c] text-xs font-semibold">— RUANG HUKUM —</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
