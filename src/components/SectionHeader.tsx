interface SectionHeaderProps {
  letter: string;
  id: string;
}

const SectionHeader = ({ letter, id }: SectionHeaderProps) => {
  return (
    <div id={id} className="mb-12 scroll-mt-8">
      <h2 className="text-[12rem] font-black gradient-text leading-none opacity-50">
        {letter}
      </h2>
      <div className="h-2 w-32 bg-gradient-primary rounded-full -mt-8" />
    </div>
  );
};

export default SectionHeader;
