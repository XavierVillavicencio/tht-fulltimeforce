function Header() {
  return (
    <header className="flex flex-grow bg-slate-300 mt-10 p-5">
      <img className="float-left h-16 w-16 m-0 rounded-full ring-2 ring-red-600" src="https://avatars.githubusercontent.com/u/31714314?v=4" />
      <h3 className="float-left mt-5 ml-5 font-extrabold">THT - Fulltime Force</h3>
      <nav className="flex sm:justify-center space-x-5 mt-3 ml-10">
        {[
          ['Home', '/'],
          ['Commits', '/commits'],
          ['Profile', '/profile'],
        ].map(([title, url]) => (
          <a href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
        ))}
      </nav>
      
    </header>
  );
}

export default Header;
