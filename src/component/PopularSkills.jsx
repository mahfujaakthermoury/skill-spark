import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const PopularSkills = () => {

  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch('./skills.json')
      .then(res => res.json())
      .then(data => setSkills(data))
      .catch(err => console.log(err))
  }, [])

  //console.log(skills);

  return (
    <div className='px-10 pt-20'>
      <h3 className='font-bold text-3xl text-center pb-15'>Popular Skills</h3>

      <div className="px-[100px] grid grid-cols-3 gap-10">
        {
          skills.slice(0,6).map(skill =>
            <div className="card bg-base-100 w-96 shadow-sm">
              <figure>
                <img className='w-full h-[300px] object-cover'
                  src={skill?.image}
                  alt="image" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{skill?.skillName}</h2>
                <div className='flex justify-between py-5'>
                  <p>Rating: {skill?.rating} </p>
                  <p>Price: {skill?.price}$ </p>
                </div> 
                <div className="card-actions justify-end">
                 <Link to={`/SkillDetails/${skill?.skillId}`}> <button className="btn bg-[#ffbf00] mt-5">View Details</button></Link>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default PopularSkills;