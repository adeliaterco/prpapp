import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, AlertCircle, Calendar } from 'lucide-react';

export interface QuestionOption {
  label: string;
  value: string;
}

export interface Question {
  id: string;
  type: 'number' | 'radio' | 'textarea' | 'text';
  question: string;
  placeholder?: string;
  options?: QuestionOption[];
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
  icon?: string;
  required?: boolean;
}

interface QuestionFieldProps {
  question: Question;
  value: string;
  onChange: (value: string) => void;
  showError?: boolean;
  index: number;
}

const QuestionField = ({ question, value, onChange, showError, index }: QuestionFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const isAnswered = value.trim().length > 0;
  const hasError = showError && !isAnswered && question.required !== false;

  // Simple change handler
  const handleChange = (newValue: string) => {
    onChange(newValue);
  };

  const getFieldStatus = () => {
    if (hasError) return 'error';
    if (isAnswered) return 'success';
    if (isFocused) return 'focus';
    return 'default';
  };

  const status = getFieldStatus();

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: index * 0.1,
        duration: 0.5,
        ease: [0.34, 1.56, 0.64, 1]
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`question-card ${status === 'success' ? 'question-answered' : ''} ${status === 'error' ? 'question-error' : ''}`}
    >
      {/* Question Header */}
      <div className="flex items-start gap-3 mb-4">
        <div className="icon-container shrink-0">
          {question.icon || '❓'}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Pregunta {index + 1}
            </span>
            {question.required !== false && (
              <span className="text-xs text-accent font-medium">(Obligatoria)</span>
            )}
          </div>
          <h3 className="font-display text-lg font-semibold text-foreground">
            {question.question}
          </h3>
        </div>

        {/* Status Indicator */}
        <AnimatePresence mode="wait">
          {isAnswered && (
            <motion.div
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0 }}
              className="w-8 h-8 rounded-full bg-success flex items-center justify-center"
            >
              <Check className="w-4 h-4 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input Field based on type */}
      <div className="mt-4">
        {question.type === 'number' && (
          <div className="relative">
            <Calendar className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="number"
              inputMode="numeric"
              min={question.min || 0}
              max={question.max || 365}
              placeholder={question.placeholder || 'Ej: 5'}
              value={value}
              onChange={(e) => handleChange(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className={`input-premium w-full pl-10 sm:pl-12 ${status === 'success' ? 'input-success' : ''} ${status === 'error' ? 'input-error' : ''}`}
            />
            {question.max && (
              <span className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                días
              </span>
            )}
          </div>
        )}

        {question.type === 'text' && (
          <input
            type="text"
            placeholder={question.placeholder || 'Escribe aquí...'}
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            maxLength={question.maxLength || 200}
            className={`input-premium w-full ${status === 'success' ? 'input-success' : ''} ${status === 'error' ? 'input-error' : ''}`}
          />
        )}

        {question.type === 'radio' && question.options && (
          <div className="space-y-2 sm:space-y-3">
            {question.options.map((option, optIndex) => (
              <label
                key={option.value}
                className={`radio-premium ${value === option.value ? 'radio-selected' : ''}`}
              >
                <div className="radio-dot shrink-0">
                  {value === option.value && (
                    <div className="w-2 h-2 rounded-full bg-white" />
                  )}
                </div>
                <span className="flex-1 font-medium text-sm sm:text-base">{option.label}</span>
                <input
                  type="radio"
                  name={question.id}
                  value={option.value}
                  checked={value === option.value}
                  onChange={(e) => handleChange(e.target.value)}
                  className="sr-only"
                />
              </label>
            ))}
          </div>
        )}

        {question.type === 'textarea' && (
          <div className="relative">
            <textarea
              placeholder={question.placeholder || 'Escribe tu respuesta aquí...'}
              value={value}
              onChange={(e) => handleChange(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              maxLength={question.maxLength || 500}
              rows={4}
              className={`input-premium w-full resize-none min-h-[100px] sm:min-h-[120px] ${status === 'success' ? 'input-success' : ''} ${status === 'error' ? 'input-error' : ''}`}
            />
            <div className="flex justify-between items-center mt-2 text-xs text-muted-foreground">
              {question.minLength && value.length < question.minLength ? (
                <span className="text-warning">
                  Mínimo {question.minLength - value.length} caracteres más
                </span>
              ) : (
                <span className="text-success">✓ Longitud válida</span>
              )}
              <span>{value.length}/{question.maxLength || 500}</span>
            </div>
          </div>
        )}
      </div>

      {/* Error Message */}
      <AnimatePresence>
        {hasError && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-2 mt-3 text-destructive"
          >
            <AlertCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Esta pregunta es obligatoria</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Answered Feedback */}
      <AnimatePresence>
        {isAnswered && !hasError && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-2 mt-3 text-success"
          >
            <Check className="w-4 h-4" />
            <span className="text-sm font-medium">✓ Respondida</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default QuestionField;