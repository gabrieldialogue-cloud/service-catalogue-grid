import { cn } from "@/lib/utils";

interface LetterNavProps {
  letters: string[];
  onLetterClick: (letter: string) => void;
}

const LetterNav = ({ letters, onLetterClick }: LetterNavProps) => {
  return (
    <nav className="fixed left-0 top-0 h-screen w-12 bg-card border-r border-border flex flex-col items-center py-8 overflow-y-auto hide-scrollbar z-50">
      {letters.map((letter) => (
        <button
          key={letter}
          onClick={() => onLetterClick(letter)}
          className={cn(
            "w-8 h-8 flex items-center justify-center text-sm font-semibold",
            "hover:text-primary transition-colors duration-200",
            "text-muted-foreground"
          )}
        >
          {letter}
        </button>
      ))}
    </nav>
  );
};

export default LetterNav;
