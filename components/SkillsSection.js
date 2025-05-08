// components/SkillsSection.js
export default function SkillsSection({ skills }) {
  return (
    <section
      id="skills"
      className="py-20 px-6 bg-black text-white border-l-4 border-neonGreen pl-6"
    >
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">
        Skills
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <div key={skill} className="p-4 bg-gray-900 rounded-lg text-center">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
