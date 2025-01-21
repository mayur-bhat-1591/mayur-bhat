const Resume = () => {
  return (
    <div className="animate-fadeIn max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-accent mb-8">Resume</h1>
      <div className="bg-white rounded-lg shadow-md p-8">
        <iframe
          src="/path-to-your-resume.pdf"
          className="w-full h-[800px]"
          title="Resume"
        />
      </div>
    </div>
  );
};

export default Resume;