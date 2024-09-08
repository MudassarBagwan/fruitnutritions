import React, { useState } from 'react'
import styled from 'styled-components';
import FruitCard from './FruitCard';
import Pagination from './Pagination';

const FruitCardList = ({fruits}) => {

  const [currentPage,setCurrentPage]=useState(1);
  const [postPerPage,setPostPerPage]=useState(9);
  const lastPostIndex=currentPage*postPerPage;
  const firstPostIndex=lastPostIndex-postPerPage;
  const currentPost=fruits.slice(firstPostIndex,lastPostIndex);




  return (
    <>
    <Wrapper>
        {
          currentPost.map((fruit)=>{

            return <FruitCard key={fruit.id} {...fruit}/>
          })
        }
       
    </Wrapper>
    <Pagination currentPage={currentPage} totalPosts={fruits.length} postsPerPage={postPerPage}  setCurrentPage={setCurrentPage}/>
    </>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

export default FruitCardList
