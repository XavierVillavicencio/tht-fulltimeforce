import React,{useEffect, useState} from 'react';
import dateFormat from "dateformat";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used
import { useNavigate, useParams } from "react-router-dom";

function Details() {
  const [data, setData] = useState([]);
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();
  let { id } = useParams();
  const getCommits  = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", process.env.REACT_APP_GITHUB_TOKEN);
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };
    fetch( process.env.REACT_APP_GITHUB_BASE_COMMIT_URL+'/'+id, requestOptions)
      .then(response => response.json())
      .then(result => {
        setData(result.commit);
        setFiles(result.files);
        setLoading(false);
        return result;
      })
      .catch(error => console.log('error', error));   
  }
  
  useEffect(() => {
    const init = async () => { 
     await getCommits();
    }
    init();
  }, []);

  return (
    (loading)?
    <section className="bg-gray-200 p-5">
      <div className='font-serif text-4xl font-bold'>
        <button onClick={(e)=>navigate(`/commits/` ,{replace:true})} type="button" className="bg-slate-500 hover:bg-slate-700 text-white font-bold p-1 rounded">
          <FontAwesomeIcon icon={icon({name: 'left-long', style: 'solid'})} />
        </button> &nbsp;
        Loading...
      </div>
    </section>
    :
    <section className="bg-gray-200 p-5">
      <div className='font-serif text-4xl font-bold'>
        <button onClick={(e)=>navigate(`/commits/` ,{replace:true})} type="button" className="bg-slate-500 hover:bg-slate-700 text-white font-bold p-1 rounded">
          <FontAwesomeIcon icon={icon({name: 'left-long', style: 'solid'})} />
        </button> &nbsp;
        Commit Details: 
      </div>
      <br />
      <div className='text-1xl'><span className='font-bold'>Name:</span>
&nbsp;      {data.author.name}
      </div>
      <div className='text-1xl'><span className='font-bold'>Email:</span>&nbsp;
      {data.author.email}
      </div>
      <div className='text-1xl'><span className='font-bold'>Date:</span>
&nbsp;      {dateFormat(new Date(data.author.date), "dddd, mmmm dS, yyyy, h:MM:ss TT")}
      </div>
      <div className='text-1xl'><span className='font-bold'>Message:</span>&nbsp;
      <div style={{whiteSpace: "pre-wrap"}}>{data.message}</div>
      </div>
      <br />
      <div className='text-2xl font-bold pl-5'>Files:</div>
      <div className='p-5'>
        <ul className="list-disc">
          {console.info(data)}
          {files.map(item =>(
            <li>{item.filename}</li>
          ))}
        </ul>  
      </div>
      </section>
  );
}
  
  export default Details;
  