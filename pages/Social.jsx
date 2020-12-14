import * as React from "react";
import Link from "next/link";


 
const Social= ({style}) => {
    return ( 
        <>
        <style jsx global>
           {

               `
              header *{
                   margin:0;
                   padding:0;
                   box-sizing:border-box;
                   
               }
               header{
                   width:93vw;
                   display:flex;
                   align-items:center;
                   height:80px;
                   color:wheat;
                   margin-top:0;
                   padding:1.1rem;
                   justify-content:space-between;
                  

               }
               header div{
                   display:flex;
                   align-items:center;
               }
               nav{
                   display:flex;
               }
               .contact{
                   border:none;
                   color:lightblue;
                   border-top:4px solid lightblue;
                   transition:.5s;
                   cursor:pointer;
               }
               .contact:hover{
                   border:none;
                   opacity:.8;
                   transition:.5s;
               }
               .social{
                   color:crimson;
                padding-right:1.2rem;
               }
               header div a{
                  border-bottom:2px solid wheat;
                  text-decoration:none;
                  padding:1.2rem;
                  transition:.5s;
               }
               header div a:hover{
                   transition:.5s;
                   border:none;
               }
              @media (max-width:950px){
                header{
                    position:fixed;
                    display:flex;
                    flex-direction:column;
                    height:340px;
                    box-shadow: 2px 2px 2px 2px rgb(50,50,25);
                    border-radius:18px;
                    align-items:center;
                    color:wheat;
                    margin-top:0;
                    z-index:5;
                    background:rgb(25,25,25);
                    overflow:hidden;
                    transition:.6s;

                }
                header div{
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                    z-index:5;
                    height:100%;
                }
                nav{
                    display:flex;
                    flex-direction:column;
                    z-index:5;
                    height:100%;
                }
                .contact{
                    border:none;
                    color:lightblue;
                    border-top:4px solid lightblue;
                    transition:.5s;
                    cursor:pointer;
                }
                .contact:hover{
                    border:none;
                    opacity:.8;
                    transition:.5s;
                }
                .social{
                    color:crimson;
                }
                header div a{
                    display:block;
                    width:70vw;
                   border-bottom:2px solid wheat;
                   text-decoration:none;
                   transition:.5s;
                }
                header div a:hover{
                    transition:.5s;
                    border:none;
                }
              }
              @media (max-width:460px){
                  header{
                      width:85vw;
                  }
              }
               `
           }
        </style>
        <header style={style}>
        <div>
            <h1 className="social">Social Handles</h1>
        <nav>
            <a href="www.github.com/nitoc">Github</a>
            <a href="www.linkedin.com/mwlite/in/chinedu-mbaodoh-2297251aa">Linkediln</a>
            <a href="www.twitter.com.com/mbaodoh">Twitter</a>
        </nav>
        </div>
        <h1 className="contact"><a href="Contacts">Contact</a></h1>
        </header>
        </>
     );
}
 
export default Social;