
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useQuiz } from '@/context/QuizContext';
import { questions } from '@/data/welshQuizQuestions';
import CreditsDialog from './CreditsDialog';

interface WelcomeScreenProps {
  onStartQuiz: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStartQuiz }) => {
  const { resetQuiz } = useQuiz();

  const handleStartQuiz = () => {
    resetQuiz();
    onStartQuiz();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-red-50">
      <Card className="w-full max-w-md border-2 border-red-600 shadow-lg">
        <CardHeader className="bg-red-600 text-white text-center relative">
          <CardTitle className="text-2xl font-bold">Life in Wales Quiz</CardTitle>
          <CardDescription className="text-gray-200">
            Questions about Welsh culture, customs, and daily life
          </CardDescription>
          <div className="absolute top-4 right-4">
            <CreditsDialog triggerText="credits/about" size="sm" variant="ghost" className="text-gray-200 hover:text-gray-800 text-xs" />
          </div>
        </CardHeader>
        
        <CardContent className="pt-6 pb-4">
          <div className="space-y-4">
            <p>Test your knowledge of Welsh culture, language, geography, and traditions with our interactive Life in Wales quiz!</p>
            
            <p>There are <span className="font-semibold">{questions.length}</span> questions - about 5-10 minutes:</p>
            
            <ul className="list-disc pl-5 space-y-1">
              <li>Food & Drink</li>
              <li>Culture & Customs</li>
              <li>Geography & Places</li>
              <li>Language & Social</li>
              <li>Nature</li>
              <li>Shops & Commerce</li>
            </ul>
            
            <p>Croeso! Ready to test your knowledge of Wales?</p>
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-center pb-6">
          <Button 
            onClick={handleStartQuiz}
            className="bg-red-600 hover:bg-red-700 text-white w-full max-w-xs"
          >
            start quiz
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default WelcomeScreen;
