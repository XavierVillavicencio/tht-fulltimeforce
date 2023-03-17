import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- 

function Profile() {
    return (
      <section className="bg-gray-200 p-5">
        <div className='font-serif text-4xl font-bold'>Profile</div>
        <p className='p-5'>
            <FontAwesomeIcon icon={icon({name: 'user', style: 'solid'})} size="3x" /> &nbsp;
            Hello, my name is Xavier and I am a software developer.
            <br /><br />
            I really like the world of programming and technology; I have been dedicated to it for the last 20 years, when I learned to program in Visual Fox Pro, where I have been growing in different languages, frameworks such as PHP, CSS, HTML5, JQuery, Perl, Java, DotNet, Javascript, IONIC, Bootstrap and any other that has fallen into my hands.
            <br /><br />
            As a programmer, I have been involved in application development where I needed to work with Linux and Windows servers; as well as using SVN and Git to maintain code among the team. I have been part of several teams, where we have used agile methodologies like Scrum to keep us organized using tools like Asana or Azure Devops.
            <br /><br />
            Teamwork is something very important and despite the remote distances in my last job with On-Meet I kept in touch with the team we had at that time and we organized ourselves in such a way that we could fulfill the tasks and requirements that were requested by the client without any problem. Eventually I was assigned to monitor and update everything related to test and production servers as part of my job as a FrontEnd programmer which later became FullStack.
            <br /><br />
            The latest thing I've learned is the use of Docker and Kubernates, which I've found very good for deploying applications; I haven't fully mastered it yet, but I like to keep an eye on it.
            <br /><br />
            Well, not everything in life is work, I am a happy husband and father of a 2 year old girl; with whom I enjoy every day at home; since when the pandemic started I was hired as a remote and I'm used to be at home. 
            <br /><br />
            I like to be at home, but I also enjoy the world of motorcycles; which has made me know many places in Ecuador and spending time riding them helps me to release the stress of everyday life.
            <br /><br />
            Thank you very much for your attention to my resume and this video, I hope it will be of your interest and we can share more experiences as a team. 
        </p>
      </section>
    );
  }
  
  export default Profile;
  