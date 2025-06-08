
import React from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CreditsDialogProps {
  triggerText: string;
  variant?: "default" | "outline" | "destructive" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

const CreditsDialog: React.FC<CreditsDialogProps> = ({ 
  triggerText, 
  variant = "ghost", 
  size = "sm",
  className 
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={variant} size={size} className={className}>
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>about this quiz - credits</DialogTitle>
          <DialogDescription>
          
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-2">
          <div className="flex justify-center mb-4">
            <Link to="/statistics" className="group">
              <img 
                src="/og-image.png" 
                alt="Welsh Life Quiz logo" 
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer group-hover:opacity-90 max-w-full h-auto"
                style={{ maxHeight: '200px' }}
              />
              <div className="text-center mt-2 text-sm text-blue-600 group-hover:underline flex items-center justify-center">
                <BarChart3 className="w-4 h-4 mr-1" />
                view quiz results to date
              </div>
            </Link>
          </div>
          
          <p>
            This quiz was derived from our 'alternative route to UK citizenship' quiz -    
              <a
              href="https://oli-frost-uk-life-quiz.lovable.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline inline-flex items-center"
            >
               Life in the UK <ExternalLink className="ml-1 h-3 w-3" />
              </a>
          </p>
          <p>
             which was written by Oli Frost while his dad, Roger F made the app in lovable.dev. See Oli's work:-  
              <a 
              href="https://olifro.st" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline inline-flex items-center"
            >
              olifro.st <ExternalLink className="ml-1 h-3 w-3" />
              </a>
          </p>
          <p>
              
            {/* <a 
              href="https://rogerfrost.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline inline-flex items-center"
            > */}
              {/* rogerfrost.com <ExternalLink className="ml-1 h-3 w-3" />
            </a> */}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreditsDialog;
