export function Topbar() {
  return (
    <header className="w-full fixed top-0 left-0 bg-blue-500 text-white z-50">
      <div className="max-w-7xl mx-auto flex items-center p-4 md:p-6">
        <div className="flex-1" />
        <h1 className="flex-1 text-center italic text-xl md:text-2xl">LaConChinChine</h1>
        <nav className="flex-1 flex justify-end space-x-4 md:space-x-8 text-sm md:text-base">
          <a href="/" className="transition-all duration-300 hover:text-yellow-200 active:text-yellow-300 hover:scale-105">Home</a>
          <a href="/menu" className="transition-all duration-300 hover:text-yellow-200 active:text-yellow-300 hover:scale-105">Menu</a>
          <a href="/about" className="transition-all duration-300 hover:text-yellow-200 active:text-yellow-300 hover:scale-105">About Us</a>
        </nav>
      </div>
    </header>
  );
}
