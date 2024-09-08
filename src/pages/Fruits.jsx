import React from 'react'
import { fruits } from '../assets/fruits'
import { useParams   } from 'react-router-dom'
import {Navigate,useNavigate} from 'react-router-dom'
import styled from 'styled-components';


const Fruits = () => {
  const   { id }  = useParams();
  const  fruit=fruits[id-1];
  const navigate = useNavigate();
  if(!fruit) return <Navigate to='/'/>;


   const {family , genus,img,name,order  }=fruit;
  const {calories,carbohydrates,fat,protein,sugar}=fruit.nutritions;
  return (
    <Wrapper>
    
    <header>
    <button onClick={() => navigate(-1)} className='btn'>Back to Home</button>
      <h1>{name}  </h1>
      </header>
      <div className='fruit'>
      <img src={img} alt={name} className='img'/>
      
      <div className="fruit-info">
      <p>
          <span className='fruit-data'>
            name:</span>{name}
        </p>
      
    
      <p><span className='fruit-data'>
      family:</span>{family}</p>
      <p ><span className='fruit-data'>genus :</span>{genus}</p>
      <p><span className='fruit-data'>order:</span>{order}</p>
  
      <p style={{fontWeight:'bold',fontSize:'2rem'}}>Nutrition  Amount Per  100 gm</p>
    <p ><span className='fruit-data'>calories :</span>{calories}</p>
    <p ><span className='fruit-data'>carbohydrates:</span> {carbohydrates}</p>
    <p ><span className='fruit-data'>fat :</span>{fat}</p>
    <p ><span className='fruit-data'>protein :</span>{protein}</p>
    <p ><span className='fruit-data'>sugar :</span>{sugar}</p>

    </div>
    
    </div>
    <button onClick={() => navigate(-1)} className='btn'>Back to Home</button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
header{
  text-align: center;
  margin-bottom: 3rem;
  .btn{
    margin-bottom: 1rem;
  }
}

.img{
  border-radius: var(--borderRadius);
  width: 100%;
  height: 90%;

}

.fruit-data{
  margin: 0.5rem;
  background: var(--primary-300);
  padding:0.25rem 0.5rem;
  border-radius:var(--borderRadius);
  color:var(--primary-700);
  letter-spacing: var(--letterSpacing);
}

.fruit-info{
  padding-top: 2rem;

}

.fruit  p{
  font-weight: 700;
  text-transform: capitalize;
  line-height: 2;
  margin-bottom: 1rem;

}

@media  (min-width:992px) {
.fruit{
    display: grid;
    grid-template-columns: 2fr 3fr;
    gap:3rem;
    align-items: center;
  }

}
`;
export default Fruits
