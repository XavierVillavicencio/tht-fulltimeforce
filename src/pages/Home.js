import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- 

function Home() {
    return (
      <section className="bg-gray-200 p-5">
        <div className='font-serif text-4xl font-bold'>Take Home - Test</div>
        <p className='mt-2 p-5'>
            <FontAwesomeIcon icon={icon({name: 'text-width', style: 'solid'})} size="5x" /> &nbsp;
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur congue sollicitudin dolor eget tempus. Nullam posuere varius sapien. Vivamus varius sem in dui venenatis, eget bibendum purus feugiat. Cras ex magna, placerat in metus a, pulvinar ultrices leo. Donec nec quam venenatis, ullamcorper quam in, rhoncus nibh. Praesent nec odio eu lorem tristique hendrerit. Mauris lobortis molestie erat vel lobortis. Etiam vulputate sit amet nulla sed faucibus. Quisque tincidunt velit ac lectus sollicitudin, quis posuere nulla porttitor. Vivamus consectetur non tortor eu eleifend. Nullam eu mollis mauris. Aliquam id porta eros.</p>
      </section>
    );
  }
  
  export default Home;
  