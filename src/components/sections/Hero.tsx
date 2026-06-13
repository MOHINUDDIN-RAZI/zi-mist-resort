export default function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-6xl md:text-7xl font-bold mb-6">
          Escape To Nature
        </h1>

        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Luxury homestay experience surrounded by breathtaking views.
        </p>

        <div className="flex gap-4">
          <button className="bg-green-700 hover:bg-green-800 px-8 py-3 rounded-lg">
            Book Now
          </button>

          <button className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-black">
            Explore Rooms
          </button>
        </div>
      </div>
    </section>
  );
}
