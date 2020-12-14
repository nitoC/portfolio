import * as React from 'react';
import { Component } from 'react';
import CopyRight from './copyright';
import Link from 'next/link';

 
const Contact = () => {
    return (  
        <>
        <style jsx global>
            {
                `
                body{
                    background:rgb(20,20,20)
                }
               
                section{
                    display:flex;
                    justify-content:space-evenly;
                 
                }
                p{
                    font-size:0.8em;
                }
                section .flex{
                     padding:2rem;
                }
                h1{
                    color:crimson;

                }
                h3{
                    color:wheat;
                }
                img{
                    width:50vw;
                    height:80vh;
                }
                .img{
                    
                }
                .span{
                    border:2px solid lightblue;
                    color:lightblue;
                    padding:1.4rem;
                    cursor:pointer;
                }
                @media (max-width:480px){
                    .img{
                        display:none;
                    }
                }
                `
            }
        </style>
        <section>
         <div className="div">
           <div className="flex">
               <h1>Email: </h1>
               <h3>   daren2track@gmail.com</h3>
           </div>
           <div className="flex">
               <h1>Number: </h1>
               <h3>   +2349032672139</h3>
           </div>
           <div className="flex">
               <Link href="nitoc.epizy.com/#contact">
               <span className="span"><a>Message me</a></span>
               </Link>
           </div>
           </div>
           <div className="img">
               <img src="organize.svg" alt=""/>
           </div>
           </section>
           <CopyRight/>
        </>
    );
}
 
export default Contact;