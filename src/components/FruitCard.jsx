import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FruitCard = ({id,name,img}) => {
 


  return (
    <Wrapper>
          <div className="img-container">
            <img src={img} alt={name} className='img'/>
        </div>
        <div className="footer">
            <h4>{name}</h4>
            <Link to={`fruits/${id}`} className='btn'>Details</Link>
        </div>
    
      </Wrapper>
  )
}

const Wrapper = styled.article`
background: var(--white);
box-shadow: var(--shadow-2);
transition: var(--transition);
display: grid;
grid-template-rows: auto 1fr;
border-radius: var(--borderRadius);
:hover{
    box-shadow: var(--shadow-4);
}
img{
    height: 15rem;
    border-top-left-radius:var(--borderRadius);
    border-top-right-radius:var(--borderRadius);
}
.footer{
    padding: 1.5rem;
    h4,h5{
        margin-bottom: 0.5rem;
    }
    h4{
        font-weight: 700;
    }
    p{
        margin-bottom: 1rem;
        color: var(--gray-500);
    }
}

`
export default FruitCard
