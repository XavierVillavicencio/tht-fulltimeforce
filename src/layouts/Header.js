import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used


function Header() {
  return (
    <header className="flex flex-grow bg-gray-300 mt-10 p-5 pl-24 rounded-t-full border-1 border-gray-700">
      
      <div className='float-left h-16 w-16 m-0 '>
      <FontAwesomeIcon icon={icon({name: 'mug-hot', style: 'solid'})} size="4x" />

      </div>
      <h3 className="float-left mt-5 ml-5 font-extrabold">THT <br /> Fulltime Force</h3>
      <nav className="flex sm:justify-center space-x-5 mt-3 ml-10">
        {[
          ['Home', '/'],
          ['Commits', '/commits'],
          ['Profile', '/profile'],
        ].map(([title, url]) => (
          <a href={url} className="rounded-lg px-3 py-4 text-slate-700 font-bold hover:bg-slate-100 hover:text-slate-900">{title}</a>
        ))}
      </nav>
      
    </header>
  );
}

export default Header;
