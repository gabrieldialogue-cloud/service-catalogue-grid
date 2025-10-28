import { cn } from "@/lib/utils";

interface LetterNavProps {
  letters: string[];
  onLetterClick: (letter: string) => void;
}

const LetterNav = ({ letters, onLetterClick }: LetterNavProps) => {
  return (
    <nav className="fixed left-0 top-0 h-screen w-12 bg-card border-r-2 border-primary/30 flex flex-col items-center py-8 overflow-y-auto hide-scrollbar z-50">
      {letters.map((letter) => (
        <button
          key={letter}
          onClick={() => onLetterClick(letter)}
          className={cn(
            "w-8 h-8 flex items-center justify-center text-sm font-extrabold",
            "hover:text-primary hover:scale-125 transition-all duration-300",
            "text-muted-foreground hover:bg-primary/10 rounded"
          )}
        >
          {letter}
        </button>
      ))}
    </nav>
  );
};

export default LetterNav;
