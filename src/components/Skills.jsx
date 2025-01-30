import skills from "../config/skills.js";
export default function Skills({ img, name }) {
  return (
    <>
      <h3 className="skill-title">Skills</h3>
      <div className="skills-container">
        {skills.map((skill) => (
          <div className="skill" key={skill.id}>
            <img className="skill-img" src={skill.img} alt={skill.name} />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}
