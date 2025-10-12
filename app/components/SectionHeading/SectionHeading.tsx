interface SectionHeadingProps {
  heading: string | React.ReactNode;
}

export const SectionHeading = ({ heading }: SectionHeadingProps) => {
  return (
    <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-primary font-bold mb-2.5 leading-tight">
      {heading}
    </h1>
  );
};
