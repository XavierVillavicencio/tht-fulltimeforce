import React,{useEffect, useState} from 'react';
import dateFormat from "dateformat";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used
import { useNavigate } from "react-router-dom";

function Commits() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate()
  const getCommits  = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", process.env.REACT_APP_GITHUB_TOKEN);
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };
    fetch( process.env.REACT_APP_GITHUB_BASE_COMMIT_URL, requestOptions)
      .then(response => response.json())
      .then(result => setData(result))
      .catch(error => console.log('error', error));
  }

  useEffect(() => {
    const init = async () => { 
      await getCommits();
      setLoading(false);
    }
    init();
  }, []);

  return (
    (loading)?
    <section className="bg-gray-200 p-5">
      <div className='font-serif text-4xl font-bold'>
        Loading...
      </div>
    </section>
    :
    <section className="bg-gray-200 p-5">
      <div className='font-serif text-4xl font-bold'>Commits History</div>
      <br />
      <table className="border-collapse border-spacing-1 border border-slate-500 ...">
           <thead className='bg-blend-lighten hover:bg-blend-darken'>
            <tr>
              <th className="border p-1 border-slate-600 ">Author</th>
              <th className="border p-1 border-slate-600 ">Date</th>
              <th className="border p-1 border-slate-600 ">Message</th>
              <th className="border p-1 border-slate-600 ">Options</th>
            </tr>
          </thead>
          <tbody>
      {data.map((item)=>(
        <tr key={`tr-item-${item.sha}`}>
          <td className='border p-1 border-slate-500'>{item.commit.author.name}<br />{item.commit.author.email} </td>
          <td className='border border-slate-500'>
          {dateFormat(new Date(item.commit.author.date), "dddd, mmmm dS, yyyy, h:MM:ss TT")}
          </td>
          <td className='border p-1 border-slate-500'>
            <div style={{whiteSpace: "pre-wrap"}}>{item.commit.message.slice(0,30)}</div>
          </td>
          <td className='border p-1 border-slate-500'>
            <button onClick={(e)=>navigate(`/commit/${item.sha}` ,{replace:true})} type="button" className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded">
              <FontAwesomeIcon icon={icon({name: 'eye', style: 'solid'})} />
            </button>
          </td>
        </tr>
        )
      )
      }
      </tbody>
      </table>
    </section>
  );
}
  
  export default Commits;
  