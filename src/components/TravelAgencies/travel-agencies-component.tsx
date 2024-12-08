interface ITravelAgency {
  id: number;
  name: string;
  location: string;
  rating: number;
  image: string;
  alt: string;
}

interface TravelAgenciesComponentProps {
  searchQuery: string;
}

const TravelAgenciesComponent = ({ searchQuery }: TravelAgenciesComponentProps) => {
  const travelAgencies: ITravelAgency[] = [
    {
      id: 1,
      name: "Wanderlust Adventures",
      location: "New York, USA",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1474575695008-52c137c36eef?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Agency 1",
    },
    {
      id: 2,
      name: "Global Explorers",
      location: "London, UK",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Agency 2",
    },
    {
      id: 3,
      name: "Paradise Tours",
      location: "Dubai, UAE",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1705510061738-2ef182c8dfa7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Agency 3",
    },
  ];

  const filteredAgencies = travelAgencies.filter((agency) =>
    agency.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="bg-white py-16">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Featured Travel Agencies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredAgencies.map((agency) => (
            <div
              key={agency.id}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition"
            >
              <img
                src={agency.image}
                alt={agency.alt}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">{agency.name}</h3>
                  <div className="flex items-center">
                    <i className="fas fa-star text-yellow-400"></i>
                    <span className="ml-1">{agency.rating}</span>
                  </div>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  <span>{agency.location}</span>
                </div>
                <button className="!rounded-button bg-custom text-white px-4 py-2 w-full hover:bg-custom/90">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelAgenciesComponent;
