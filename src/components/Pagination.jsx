import React from 'react'
import styled from 'styled-components';

const Pagination = ({totalPosts,postsPerPage,setCurrentPage,currentPage}) => {
  let pages=[];

  for (let i=1; i<=Math.ceil(totalPosts/postsPerPage);i++){
    pages.push(i);

  }
  return (
    <Wrapper>
      {pages.map((page,index)=>{
        

        return <button className={page == currentPage ?'btn':'normal'} key={index} onClick={()=>setCurrentPage(page)}>{page}</button>

      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;

  gap:2rem;
  padding:2rem;

  .normal{
    height: 2rem;
    width: 2rem;
  }
  
`;


export default Pagination
