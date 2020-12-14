import * as React from 'react';
import {useState, useEffect} from 'react'; 
import Particles from 'react-tsparticles';
import { Wave } from 'react-animated-text';
import { Random } from 'react-animated-text';
import Link from 'next/link';
 
class App extends React.Component{
  
    render(){
        return (
            <div id="part">
            <Particles
            id="tsparticles"
            options={{
              background: {
                color: {
                  value: "#000000",
                  size:"cover"
                },
                
              },
              fpsLimit: 60,
              interactivity: {
                detectsOn: "canvas",
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.8,
                    size: 40,
                  },
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#ffaa22",
                },
                links: {
                  color: "#ffbcca",
                  distance: 150,
                  enable: true,
                  opacity: 0.3,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outMode: "bounce",
                  random: false,
                  speed: 6,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    value_area: 300,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "triangle",
                },
                size: {
                  random: true,
                  value: 5,
                },
              },
              detectRetina: true,
            }}
          />
          </div>
        );
    };
 
}



/*<Wave text="EXAMPLE TEXT" effect="stretch" effectChange={2.2} />

<Random
  text={this.props.children}
  paused={this.state.paused}
  effect="verticalFadeOut"
  effectDirection="down"
  effectChange={3.0}
/>*/
 const Language=()=>{
     
     const [data,setData]=useState(false)
    var langStyle={
        position:"fixed",
        bottom:0,
        right:-10,
        zIndex:8,
        backgroundColor:"wheat",
        color:"#333",
        padding:"1.11rem",
        borderRadius:"8px",
        transition:".3s"
    }
    var langStyle1={
        position:"fixed",
        bottom:-310,
        right:-200,
        zIndex:8,
        backgroundColor:"wheat",
        color:"#333",
        padding:"1.1rem",
        borderRadius:"8px",
        transition:".3s"
    }
    function toggleCheck(){
        
        (!data)?setData(true):setData(false)
    }
      return(
          <div id="lang" onClick={toggleCheck} style={data?langStyle:langStyle1}>
              <h2  className="h">Languages</h2>
              <div id="front-end">
                 <h2>Front end</h2>
                 <h3>Html</h3>
                 <h3>Css</h3>
                 <h3>Javascript</h3>
              </div>
              <div id="back-end">
                 <h2>Back end</h2>
                 <h3>Node js</h3>
                 <h3>firebase</h3>
              </div>
              <div id="frameworks">
                 <h2>Frameworks&Libraries</h2>
                 <h3>React js</h3>
                 <h3>Bootstrap</h3>
                 <h3>Gsap</h3>
              </div>
          </div>
      )
 }
 //Home component
const Home = () => {
    const [name,setName]=useState([])
    const disp="Chinedu Mbaodoh";
    const nameArray=disp.split("");
    
    const array=[]

    return ( 
        <div className="wrp" >
          <style jsx global>
            {
                `
                *{
                
                    margin:0;
                    padding:0;
                    box-sizing:border-box;
                }
               #t-cover{
                   width:100vw;
                   height:100vh;
                   position:fixed;
                   Z-index:3;
                   top:17vh;
                   left:0;
                   color:white;
                   text-align:center;
                   font-family:"Concert one",roboto,arial;

               } 
               #t-cover p{
                   font-size:1.2rem;
               }
               span{
                font-size:1.7rem;
               }
               span span{
                   color:#33ccff;
                   
               }
               #tsparticles{
    
                width:100vw;
                height:100vh;
                position:fixed;
                top:0;
                left:0;
              
               }
               #text-span{
                   display:flex;
                   justify-content:center;
               }
               #about{
                   position:absolute;
                   z-index:4;
                   left:0;
                   background-color:#33ccff3f;
                   padding:2em;
                   color:wheat;
                   transition:1s;
               }
               #about:hover{
                background-color:#33ccff6f;
                
                color:white;
                transition:.6s;
               }
           #about a{
                   background-color:crimson;
                   padding:0.5rem 1.2rem 0.5rem 1.2rem;
                   display:block;
                   width:100px;
                   text-align:center;
                   margin-top:10px;
                   border-radius:4px;
                   text-decoration:none;
                   transition:.5s;
               }
               #about a:hover{
                 transform:scale(1.05);
                 transition:.5s;
                 background-color:rgba(230,22,22,.7);
               }
               #lang{
                 width:400px;
               }
              
               #lang h2{
                   color:crimson;
                     
               }
               #lang .h{
                cursor:pointer;
                color:#999;
                  
            }
            #lang div{
              margin-right:15px;
            }
        @media (min-width:800px){
            #about{
                position:fixed;
                z-index:4;
                left:0;
                top:0;
                bottom:0;
                width:30vw;
                background-color:#33ccff3f;
                padding:2em;
                color:wheat;
                transition:1s;
                display:flex;
                flex-direction:column;
                justify-content:center;
            }
        }
        @media (max-width:400px){
          #lang{
            width:100vw;
          }
        }
                `
            }
              </style>
             <div id="cover">
            
               <div id="t-cover"> 
                   <h1>Hi</h1>
                  <span id="text-span"> I am <span><Wave text=" chinedu mbaodoh" effect="stretch" effectChange={1.2}/></span></span>
                   <p>your clever web developer</p>
                </div>
                <div id="about">
                   <p> Nice to meet you, I am known as NitoC by  friends and clients, I started my journey three years ago  
                       as front-end web developer and I have done remote and freelance jobs for agencies/clients as a front-end/fullstack web developer. I am confident, curious and quite obssesed with improvment.
                       </p>
                       <Link href="Projects"><a>Projects</a></Link>
                </div>
             </div>
             <div className="cover" >
             <App/>
             </div>
             <Language/>
        </div>
     );
}
 
export default Home;

