const Contact = () => {
  return (
    <div className="animate-fadeIn max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-accent mb-8">Contact Me</h1>
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="max-w-2xl mx-auto">
          <p className="text-lg text-secondary mb-8">
            I'm always open to discussing new projects, opportunities, or just
            having a chat about AI and technology.
          </p>
          
          {/* Calendly inline widget */}
          <div className="calendly-inline-widget min-h-[700px]" data-url="https://calendly.com/your-calendly-url" />
          
          <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
        </div>
      </div>
    </div>
  );
};

export default Contact;