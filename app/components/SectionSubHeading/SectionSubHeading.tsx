interface SectionSubHeadingProps {
  subheading: string;
}

export const SectionSubHeading = ({ subheading }: SectionSubHeadingProps) => {
  const match = subheading.match(/^(.*\{)(.*?)(\}.*)$/);

  if (!match) {
    return (
      <h2 className="font-fira text-xl lg:text-2xl font-medium">
        {subheading}
      </h2>
    );
  }

  const before = match[1]; // includes opening brace {
  const highlighted = match[2]; // inside
  const after = match[3]; // includes closing brace }

  return (
    <h2 className="font-fira text-md sm:text-xl lg:text-2xl font-medium">
      {before}
      <span className="text-primary font-bold">{highlighted}</span>
      {after}
    </h2>
  );
};
