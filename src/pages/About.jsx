import React from 'react'
import styled from 'styled-components'

const About = () => {
  return (
    <Wrapper>
    <div>
        <p>
        At Fruit Nutrition info , we are dedicated to highlighting the nutritional value of fruit and helping people build lifelong habits around fruit consumption. We believe that integrating fruit into daily diets is key to vibrant health and well-being. Through engaging content, expert insights, and practical tips, we aim to educate and inspire individuals about the diverse benefits of fruit. Our mission is to make healthy eating simple and enjoyable, empowering people to make fruit a staple in their lives. Join us in our journey to enhance wellness and promote a fruit-filled lifestyle for a healthier tomorrow.
        </p>
      
    </div>
    </Wrapper>
  )
}

const Wrapper= styled.div`
p{
  line-height: 2;
  color:var(--gray-500);
  margin-top:2rem;
}


  
`

export default About
