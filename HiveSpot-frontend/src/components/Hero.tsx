const Hero = () => {
  return (
    <section className="bg-orange-500 text-white">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Entdecke die besten Plätze in deiner Nähe</h1>
        <p className="text-lg mb-4">Mit HiveSpot findest du lokale Juwelen im Handumdrehen</p>
        <input
          type="text"
          placeholder="Suchbegriff eingeben..."
          className="px-4 py-2 rounded-lg shadow-md text-gray-800"
        />
        <button className="bg-gray-800 text-white px-4 py-4 rounded ml-2 hover:bg-gray-700">
          Suchen
        </button>
      </div>
    </section>
  )
}

export default Hero;