import React,{useEffect, useState} from 'react'

function Commits() {
  const [data, setData] = useState([]);
  const getCommits  = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", process.env.REACT_APP_REACT_APP_GITHUB_TOKEN);
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
    }
    init();
  }, []); // {item.sha}

  return (
    <section className='my-3 p-5'>
      <div className='font-serif text-4xl font-bold'>Commits List</div>
      {data.map((item)=>(
        <div className='flex flex-row border-collapse'>
          <div className='flex flex-col p-5'>{item.commit.author.name} {item.commit.author.email} </div>
          <div className='flex flex-col p-5'>{item.commit.author.date}</div>
          <div className='flex flex-col p-2'>{item.commit.message}</div>
        </div>
        )
      )
      }
    </section>
  );
}
  
  export default Commits;
  