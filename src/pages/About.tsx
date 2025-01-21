const About = () => {
  return (
    <div className="animate-fadeIn max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-accent mb-8">About Me</h1>
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="prose max-w-none">
          <p className="text-lg text-secondary mb-6">
            Hello! I'm Mayur Bhat, a passionate AI developer focused on creating
            practical solutions to real-world problems.
          </p>
          <h2 className="text-2xl font-semibold text-accent mb-4">Background</h2>
          <p className="text-secondary mb-6">
            [Your background details here]
          </p>
          <h2 className="text-2xl font-semibold text-accent mb-4">Skills</h2>
          <ul className="list-disc list-inside text-secondary mb-6">
            <li>Machine Learning & AI Development</li>
            <li>Python Programming</li>
            <li>Natural Language Processing</li>
            <li>Deep Learning</li>
            {/* Add more skills */}
          </ul>
          <h2 className="text-2xl font-semibold text-accent mb-4">Interests</h2>
          <p className="text-secondary">
            [Your interests and hobbies here]
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;