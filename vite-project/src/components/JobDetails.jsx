 import React from 'react'
 import { useLoaderData } from 'react-router-dom'
 
 
 const JobDetails = () => {

    const JobDetails = useLoaderData()

   return (
     <div className='job-details'>
       <p><b>Job Title: </b>{JobDetails.title}</p>
       <p><b>Salary: </b>{JobDetails.salary}</p>
       <p><b>Job Location: </b>{JobDetails.location}</p>
       <p><b>Description: </b>Are you passionate about creating exciting and user-friendly websites? We're looking for a friendly and talented Web Developer to join our vibrant team! In this role, you'll collaborate closely with designers and other developers to bring innovative web solutions to life. Your expertise will play a crucial role in enhancing our online presence an creating engaging user experiences. </p>
       <button>Apply Now</button>
     </div>
   )
 }
 
 export default JobDetails

 export const jobDetailsLoader = async ({params})=>{
      const {id} = params;
      const res = await fetch("http://localhost:5001/jobs/" +id);
      if(!res.ok){
        throw Error("Coud not found job details")
      }
      return res.json();
 }
 