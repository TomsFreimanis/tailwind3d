import Spline from "@splinetool/react-spline";

export const Skills = () => {
  // Define an array of skills with their respective Spline scene URLs and titles
  const skills = [
    {
      title: "React js",
      sceneUrl:
        "https://prod.spline.design/9jfRZfSRh9o7US93/scene.splinecode",
    },
    {
      title: "Javascript",
      sceneUrl:
        "https://prod.spline.design/bbk2ulQQmds0wczR/scene.splinecode",
    },
    {
      title: "Tailwind",
      sceneUrl:
        "https://prod.spline.design/efJ42H2Ex4vlaGco/scene.splinecode",
    },
    {
      title: "Git",
      sceneUrl:
        "https://prod.spline.design/NmVLsuOYXzI76CTU/scene.splinecode",
    },
    {
      title: "PHP",
      sceneUrl:
        "https://prod.spline.design/2Dq-aB4Fm7UhPpAW/scene.splinecode",
    },
    {
      title: "Wordpress",
      sceneUrl:
        "https://prod.spline.design/SkxdZt-SwTvcU41s/scene.splinecode",
    },
    {
      title: "Bootstrap",
      sceneUrl:
        "https://prod.spline.design/JaG2XNbAWjpoYkTF/scene.splinecode",
    },
    {
      title: "Spline design",
      sceneUrl:
        "https://prod.spline.design/DHW6W9tYE-VwAeVj/scene.splinecode",
    },
  ];

  return (
    <section className="skill h-screen flex flex-col justify-center items-center bg-black">
      <div className="container">
        <h1 className="text-center text-4xl md:text-6xl font-extrabold text-teal-400 shadow-2xl leading-tight p-8 md:p-12">
          Skills
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="small-box flex flex-col items-center bg-blend-darken rounded-md p-8 md:p-12 shadow-md"
            >
              <div className="spline">
                <Spline scene={skill.sceneUrl} />
              </div>
              <h3 className="text-center mt-4 text-white text-lg md:text-xl font-extrabold">
                {skill.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
