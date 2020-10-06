import styled from 'styled-components';

export const Wrapper = styled.div`
   width:100%;
   height:100vh;
   display:flex;
   align-items:center;
   justify-content:center;
   flex-direction:column;

   h1{
    font-family: 'Bangers', cursive;
    font-size: 4rem;
    color:#eee;
    text-shadow: #000 2px 3px 2px;
    -webkit-text-stroke-width: 2px; 
    -webkit-text-stroke-color: #000; 
   }
   @media (max-width: 700px){
     h1{
       font-size: 3rem;
    -webkit-text-stroke-width: 0.5px; 
    
     }
   }
`;

export const Card = styled.div`
  background: #222831;
  width:  550px;
  border-radius: 8px;
  padding:20px;
  margin-top:15px;
  box-shadow: 0 6px 10px 0 #01024e;

  h2{
    font-size: 22px;
    color: #eee;
    margin-bottom: 10px;
  }
  @media (max-width: 700px){
   width: 450px;
   padding:15px;
   margin-top:20px;
   h2{
     font-size:20px;
   }
      
}
`;

export const Templates = styled.div`
  width:100%;
  height:90px;
  background:#222831;
  border-radius:8px;
  overflow-y:auto; 
  display:flex;
  align-items:center; 
  padding: 0 15px;
  margin-bottom:  30px; 
  
  button{
    border:0;
    background:transparent;
    margin-right:10px;
    border: 2px solid transparent;
    &.selected{
     border-color:#4395D8;
   }
    img{
      width:53px;
      height:53px;
    }
  }
`;

export const Form = styled.form`
  input{
   width:100%;
   height:40px;
   border-radius:8px;
   border: 1px solid #DBDBDB;
   padding: 0 15px;
   font-size: 14px;
   margin-bottom:10px;
  }
`;
export const Button = styled.button`
   width:100%;
   height:40px;
   border-radius:8px; 
   border: 0;
   background: #01024e;
   color:#fff;
   font-size:14px;
   font-weight:bold;
   transition: background 0.3s ease-in;
   border: 2px solid transparent;
  
   &:hover{
     background: #3872A3;
   }
`;