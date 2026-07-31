type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  className?: string;
};

export function SectionHeading({ eyebrow, title, className = "" }: SectionHeadingProps) {
  return (
    <div className={className}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="display-font mt-5 max-w-3xl text-5xl leading-[0.92] tracking-[-0.045em] text-bone sm:text-6xl lg:text-7xl">
        {title}
      </h2>
    </div>
  );
}
