type SkillItem = {
  name: string;
  img?: string;
};

export type SkillProps = {
  Skill: {
    category: string;
    skills: SkillItem[];
  };
};

const Skill = ({ Skill }: SkillProps) => {
  return (
    <div>
      <div className={`cursor-pointer p-1 px-2 border rounded-md font-bold`}>
        {Skill.category}
      </div>
    </div>
  );
};

export default Skill;
