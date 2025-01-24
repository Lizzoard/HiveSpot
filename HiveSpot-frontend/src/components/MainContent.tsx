const MainContent = () => { 
  return (
    <main className="container mx-auto px-4 py-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* <!-- Beispielkarte --> */}
      <div className="bg-white shadow rounded overflow-hidden">
        <img src="https://via.placeholder.com/300" alt="Beispiel" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-lg font-bold text-gray-800">Business Name</h2>
          <p className="text-sm text-gray-600">Beschreibung des Ortes...</p>
          <a href="#" className="text-orange-500 hover:underline mt-2 block">Mehr erfahren</a>
        </div>
      </div>
      {/* <!-- Weitere Karten hier... --> */}
    </div>
  </main>
  )
}

export default MainContent;