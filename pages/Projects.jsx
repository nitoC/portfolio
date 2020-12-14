import * as React from 'react';
import { Component } from 'react';
import Link from 'next/link';
import Social from './Social';
import {useState, useEffect} from "react";
import CopyRight from "./copyright";


var style={top:"-342px"}
var cover={display:"none"}


const Projects= () => {
    const [change,setChange]=useState(false)
    
    const toggle=()=>{
        if(change===false){
            setChange(true)
            style= {top:"46px"}
            cover={display:"block"}
            return style
        }else{
            setChange(false)
           style={top:"-342px"}
           cover={display:"none"} 
           return style
        }
    }
    useEffect(()=>{
          console.log("")
          console.log("")
    },[change,style])
    return ( 
        <>
        <style jsx global>
             {`
             .hamburger{
                 width:100vw;
                 height:55px;
                 display:flex;
                 align-items:center;
                 background-color:rgb(25,25,25);
                 position:fixed;
                 top:0;
                 z-index:15;
                 visibility:hidden;
             }
             .ham-cover div{
                  height:5px;
                  width:35px;
                  background-color:wheat;
             }
             #first{
            transform:translateY(13px);
             }
             #second{

             }
             #third{
                transform:translateY(-13px);
             }
           .projects  *{
                 padding:1rem;
                 font-family:cursive,arial,"courier new";
             }
             body{
                 background-color:rgb(25,25,25);
                 padding:1.3rem;
             }
             .projects{
                 position:relative;
                 top:0;
                 width:25vw;
                 height:300px;
                 padding:1rem;
                 object-fit:contain;
              
             }
             .over{
                 background-color:rgba(0,0,0,.2);
                 position:fixed;
                 top:0;
                 bottom:0;
                 right:0;
                 left:0;
                 z-index:4;
             }
             .projects img{
                 object-fit:contain;
                 width:25vw;
                 height:300px;
             }
             h2{
                 color:wheat;
                 border:5px solid wheat;
                 width:180px;
                 margin:auto;
                 padding:.8rem;
                 text-align:center;

             }
             .row{
                 display:flex;
                 justify-content:center;
                
             }
             .image{
                 padding:1.2rem;
                 overflow-x:hidden;
             }
             .rrow{
                 padding:1rem;
             }
             .overlay{
                 width:100%;
                 height:100%;
                 transform:translate(30vw);
                 transition:1s;
             }
           .image:hover .overlay{
                   transform:translate(0);
                   transition:1s;
             }
             .image:hover .h3{
                 display:none;
             }
             .overlay img{
                 width:60px;
                 height:60px;
                 border-radius:50%;
                 border:2px solid lightblue;
             }
             .overlay h3{
                 
             }
             .h3{
                 position:absolute;
                 text-align:center;
                 color:lightblue;
             }
             @media (max-width:950px){
                 .rrow{
                     margin-top:17px;
                 }
                 .hamburger{
                     visibility:visible;
                 }
                 .h3{
                     z-index:3;
                 }
             }
             @media (max-width:800px){
                .projects{
                    position:relative;
                    top:0;
                    width:55vw;
                    height:300px;
                    padding:1rem;
                    object-fit:contain;
                 
                }
                .projects img{
                    object-fit:contain;
                    width:55vw;
                    height:300px;
                }
                .overlay img{
                    width:60px;
                    height:60px;
                    border-radius:50%;
                    border:2px solid lightblue;
                }
                .overlay{
                    width:100%;
                    height:100%;
                    transform:translate(60vw);
                    transition:1s;
                }
              .image:hover .overlay{
                      transform:translate(0);
                      transition:1s;
                }
                @media (max-width:460px){
                    *{
                        padding:.1rem;
                    }
                    .projects{
                        position:relative;
                        top:0;
                        width:70vw;
                        height:300px;
                        padding:.4rem;
                        object-fit:contain;
                     
                    }
                    .projects img{
                        object-fit:contain;
                        width:70vw;
                        height:300px;
                    }
                    .overlay img{
                        width:55px;
                        height:55px;
                        border-radius:50%;
                        border:2px solid lightblue;
                    }
                    .overlay{
                        width:100%;
                        height:100%;
                        transform:translate(75vw);
                        transition:1s;
                    }
                  .image:hover .overlay{
                          transform:translate(-5vw);
                          transition:1s;
                    }
                    .icon{
                        margin-left:1.2rem;
                    }
             }
             `}
        </style>
        <div className="over" style={cover}></div>
        <div id="projects">
            <div className="hamburger" onClick={toggle}>
                <div className="ham-cover">
                    <div id="first"></div>
                    <div id="second"></div>
                    <div id="third"></div>
                </div>
            </div>
            <Social style={style}/>
              <div className="rrow">
                  <h2>Completed</h2>
                  <div className="row">
                      <div className="image">
                      <h3 className="h3">Ivote.ng</h3>
                  <a href="ivote.ng">
                      <div className="projects">
                      <img src="projects.png" alt=""/>
                      <div className="overlay">
                      <h3 >Ivote.ng</h3>
                          <div className="icon"><a><img src="icon.jpg" alt=""/></a></div>
                      </div>
                      </div>
                  </a>
                  </div>
                  <div className="image">
                  <h3 className="h3">Podiousplus</h3>
                  <a  href="podiousplus.netlify.app">
                      <div className="projects">
                      <img src="projects1.png" alt=""/>
                      <div className="overlay">
                          <h3>Podiousplus</h3>
                          <div className="icon"><a><img src="icon.jpg" alt=""/></a></div>
                      </div>
                      </div>
                  </a>
                  </div>
                  <div className="image">
                  <h3 className="h3">Employable</h3>
                  <a href="jobsnitoc.netlify.app">
                     <div className="projects">
                      <img src="projects.png" alt=""/>
                      <div className="overlay">
                      <h3>Employable</h3>
                          <div className="icon"><a><img src="icon.jpg" alt=""/></a></div>
                      </div>
                      </div>
                  </a>  
                  </div>
                  <div className="image">
                  <h3 className="h3">Shoppoint</h3>
                  <a href="shoppoint.herokuapp.com">
                     <div className="projects">
                      <img src="projects1.png" alt=""/>
                      <div className="overlay">
                      <h3>Shoppoint</h3>
                          <div className="icon"><a><img src="icon.jpg" alt=""/></a></div>
                      </div>
                      </div>
                  </a> 
                  </div>
                  <div className="image">
                  <h3 className="h3">Todo app</h3>
                  <a href="todo-chinedu.herokuapp.com">
                     <div className="projects">
                      <img src="projects.png" alt=""/>
                      <div className="overlay">
                      <h3>Todo app</h3>
                          <div className="icon"><a><img src="icon.jpg" alt=""/></a></div>
                      </div>
                      </div>
                  </a> 
                  </div>
                  <div className="image">
                      <h3 className="h3">Timeline</h3>
                  <a href="postnitoc.netlify.app">
                      <div className="projects">
                      <img src="projects1.png" alt=""/>
                      <div className="overlay">
                      <h3>Timeline</h3>
                          <div className="icon"><a><img src="icon.jpg" alt=""/></a></div>
                      </div>
                      </div>
                  </a>
                  </div>
                  </div> 
                  </div>
                  <div className="rrow">
                      <h2>Unfinished</h2>
                      <div className="row">
                      <div className="image">
                        <h3 className="h3">Proxat ecommerce</h3>
                  <a href="proxat.com">
                      <div className="projects">
                      <img src="projects2.png" alt=""/>
                      <div className="overlay">
                      <h3>Proxat ecommerce</h3>
                          <div className="icon"><a><img src="icon.jpg" alt=""/></a></div>
                      </div>
                      </div>
                  </a>  
                  </div>
                 <div className="image">
                 <h3 className="h3">React chatapp</h3>
                  <a href="chatappnitoc.netlify.app">
                      <div className="projects">
                      <img src="projects2.png" alt=""/>
                      <div className="overlay">
                      <h3>React chatapp</h3>
                          <div className="icon"><a><img src="icon.jpg" alt=""/></a></div>
                      </div>
                      </div>
                  </a>
                  </div>
                  <div className="image">
                  <h3 className="h3">3reen ecommerce</h3>
                  <a href="3reen.netlify.app">
                      <div className="projects">
                      <img src="projects2.png" alt=""/>
                      <div className="overlay">
                      <h3>3reen ecommerce</h3>
                          <div className="icon"><a><img src="icon.jpg" alt=""/></a></div>
                      </div>
                      </div>
                  </a>  
                  </div>
                  </div>
              </div>
                  
             <div className="rrow">
                      <h2 style={{width:"230px"}}>Coming Soon</h2>
                    <div className="row">
                        <div className="image">
                        <h3 className="h3">React calculator</h3>
                  <a href="https://codepen.io/nitoc/pen/ZEWVEpz">
                      <div className="projects">
                      <img src="projects2.png" alt=""/>
                      <div className="overlay">
                      <h3>React calculator</h3>
                          <div className="icon"><a><img src="icon.jpg" alt=""/></a></div>
                      </div>
                      </div>
                  </a>  
                  </div>
                  <div className="image">
                  <h3 className="h3">Countdown Timer</h3>
                  <a href="https://codepen.io/nitoc/pen/zYrbVmj">
                      <div className="projects">
                      <img src="projects2.png" alt=""/>
                      <div className="overlay">
                      <h3>countdown Timer</h3>
                          <div className="icon"><a><img src="icon.jpg" alt=""/></a></div>
                      </div>
                      </div>
                  </a>  
                  </div>
                 </div>
                 <CopyRight/>
              </div>
        </div>
        </>
     );
}
 
export default Projects;