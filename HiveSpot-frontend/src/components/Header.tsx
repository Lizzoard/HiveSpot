const Header = () => { 
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-orange-500 text-2xl font-bold">HiveSpot</div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="text-gray-600 hover:text-orange-500">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-orange-500">Explore</a></li>
            <li><a href="#" className="text-gray-600 hover:text-orange-500">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
};

export default Header;