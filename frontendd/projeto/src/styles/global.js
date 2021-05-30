import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400;500;600&display=swap');

*body
/* CSS reset */
*, *:before, *:after { 
  margin:0;
  padding:0;
  font-family: 'Montserrat', sans-serif;;
}

body{
  margin:0px;
  background-color:rgb(247, 247, 247);
}

a{
  text-decoration: none;
}

/* content que contem os formulários */
.content{
  margin: 0px auto;
  position: relative;	
}

/* formatando o cabeçalho dos formulários */
header{
  margin: 0px auto;
  position: relative;
  background-color:#066a75;
  height: 100px;
  text-align: center;
  padding: 20px;
 
}
h1{
  font-size: 48px;
  color: blanchedalmond;
  padding: 10px 0;
  font-family: 'montserrat';
  font-weight: 200;
  text-align: center;
  padding-bottom: 30px;
}

.caixa{
  max-width:600px;
  margin: 0px auto;
  position: relative;
  align-items:center;
}
.caixa1{
  background: white;
    margin: 40px auto;
    max-width: 350px;
    min-height: 10vw;
    box-shadow: 5px 5px 10px rgba(49, 38, 25, 0.5); 
    padding: 2rem;
    border-radius: 8px;
  
}

p{
  margin-bottom:4px;
  font-weight:200;
  font-size: 10px;
}
p:first-child{
  margin: 0px;
}

/**** advanced input styling ****/
/* placeholder */
form{
    display: flex;
    flex-direction: column;
    
}

form .input-field{
    position: relative;
}

form .input-field{
    margin-bottom: 1.5rem;
}

.input-field .underline::before {
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
    bottom: -5px;
    left: 0;
    background:  rgba(94, 75, 53, 0.2);
}

.input-field .underline::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
    bottom: -5px;
    left: 0;
    background: linear-gradient(45deg, rgb(187, 170, 152), rgb(94, 75, 53) );
    transform: scaleX(0);
    transition: all .3s ease-in-out;
    transform-origin: left;
}

.input-field input:focus ~ .underline::after {
    transform: scaleX(1);
}
.input-field input::placeholder {
    color:  #066a75;
}
.input-field input[type='text']{
    outline:none;
    font-size: 0.9rem;
    color:  #066a75 ;  
}


input:not([type="checkbox"]){
  width:90%;
  margin-top: 4px;
  padding: 10px;	
  border: 0px;
  background-color: white;
  outline: none;
}

/*estilo do botão submit */
input[type="submit"]{
  width: 90%!important;
  cursor: pointer;	
  background: #066a75;
  padding: 8px 5px;
  color: #fff;
  font-size: 20px;	
  border: 1px solid #fff;
  margin-bottom: 10px auto;	
  text-shadow: 0 1px 1px #333;

  
  -webkit-border-radius: 10px;
  border-radius: 10px;
  
  transition: all 0.2s linear;
}
input[type="submit"]:hover{
  background: #088896;
}

/* estilos para o formulário */
#cadastro, 
#login{
  -webkit-animation-duration: 0.5s;
  -webkit-animation-timing-function: ease;
  -webkit-animation-fill-mode: both;

  animation-duration: 0.5s;
  animation-timing-function: ease;
  animation-fill-mode: both;
}


.adiciona{
    padding: 10px;
    border-radius: 10px;
    width: 250px;
    margin: 10px auto;
    color:white;
    font-size: 20px;
    color:white;
    text-align:center;
    background: #066a75;
    text-decoration: none;
}
.adiciona:hover{
  background: #088896;
}

.link{
  padding: 8px 5px;
  color: #fff;
  font-size: 20px;	
  margin-bottom: 10px auto;	
  text-shadow: 0 1px 1px #333;
  
}

table {
  font-weight: 400;
  min-width: 420px;
  width: 100%;
  margin: 40px auto;
  background-color: white;
  
  thead {
    display: none;
    font-weight: 500;
    color:#066a75;
  }
 
  tbody {
    box-shadow: 5px 5px 10px rgba(49, 38, 25, 0.5);
    tr {
      border: 1px solid #dad6eb;
      border-radius: 5px;
      display: block;
      padding: 30px;
      margin-bottom: 30px;
      
      td {
        display: block;
        font-weight: 500;
        padding: 5px;
        position: relative;
        text-align: right;
        color: #066a75;
        
        button {
          background: #066a75;
          border: none;
          border-radius: 5px;
          box-shadow: 0 4px 8px transparentize(#222, .8);
          bottom: -30px;
          color: #fff;
          font-weight: 700;
          left: 50%;
          padding: 10px 0;
          position: absolute;
          transform: translate(-50%, 50%);
          width: 50%;
          margin:3px;

          &:hover,
          &:focus {
            background: lighten(#927cfe, 5%);
            cursor: pointer;
          }
        }
        
      }
    }
  }
}

@media all and (min-width: 768px) {
  table {
    border: 1px solid #eee;
    border-collapse: collapse;
    max-width: 992px;
    text-align: left;
    width: 100%;
    
    thead {
      display: table-header-group;
      
      th {
        padding: 10px;
      }
    }
    
    tbody {
      font-size: .875em;
      
      tr {
        border: none;
        display: table-row;
        
        &:nth-child(odd) {
          background: #eee;
        }
        
        td {
          display: table-cell;
          font-weight: 400;
          padding: 10px;
          text-align: left;
          
          button {
            display: inline-block;
            padding: 10px 15px;
            position: initial;
            transform: translate(0);
            width: auto;
          }
          
          &:before {
            display: none;
          }
          
          &:last-child {
            text-align: right;
          }
        }
      }
    }
  }
}
`;