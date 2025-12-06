import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const SkillDetails = () => {

    const [skills, setSkills] = useState([]);
    const {myId} = useParams();

    useEffect(() => {
        fetch('/skills.json')
            .then(res => res.json())
            .then(data => setSkills(data))
            .catch(err => console.log(err))
    }, [])

    const findResult = skills.find(skill => skill.skillId == myId);
    console.log(findResult);


    return (
        <div>
            <img src={findResult?.image} alt="" />
        </div>
    );
};

export default SkillDetails;