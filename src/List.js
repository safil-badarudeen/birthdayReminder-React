import React from 'react';

const List = ({people}) => {
  
  
  return (
    <>
    {people.map((humans)=>{
      const {id,name,age,image}=humans
     

      return <article key={id} className='person'>

       <img src={image} alt={name}></img>
       <div>
        <h4>{name}</h4>
        <p>{age}</p>
       </div>
      </article>
    })}
    
      
    </>
  );
};

export default List;
