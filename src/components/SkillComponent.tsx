export interface Skill {
  title: string;
  description: string;
}

export interface SkillProps {
  skill: Skill;
}

const SkillComponent = ({
  skill,
  className,
}: SkillProps & { className?: string }) => {
  return (
    <div className={`col-span-1 border border-gray-500 ${className}`}>
      <div className="border-b border-gray-500 text-xs md:text-base p-2 text-white font-medium">
        {skill.title}
      </div>
      <div className=" text-xs md:text-base p-2 text-gray-500 font-medium">
        {skill.description}
      </div>
    </div>
  );
};

export default SkillComponent;
