const HeroComponent = () => {
  return (
    <section className="relative h-[500px] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1684228696914-b66b5da26a05?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Hero"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white max-w-4xl px-4">
          <h1 className="text-5xl font-bold mb-6">
            Find Your Perfect Travel Partner
          </h1>
          <p className="text-xl mb-8">
            Connect with top-rated travel agencies, tour operators, and service
            providers
          </p>
          <div className="flex justify-center space-x-4">
            <button className="!rounded-button bg-custom text-white px-8 py-3 text-lg hover:bg-custom/90">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
