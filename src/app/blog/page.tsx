import { TypewriterEffectSmooth } from "@/components/ui/typewriter";

const BlogPage = () => {
  const words = [
    {
      text: "Get",
    },
    {
      text: "Easy",
    },
    {
      text: "Access",
    },
    {
      text: "with",
    },
    {
      text: "with",
    },
    {
      text: "MomentumX.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex items-center justify-center h-screen">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
};

export default BlogPage;
