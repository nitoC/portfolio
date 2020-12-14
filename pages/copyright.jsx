import * as React from 'react';
import { Component } from 'react';


 
class CopyRight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() { 
        return (
            <div>
                <style jsx global>
                {
                    `
                    .copywrite{
                       color:wheat;
                       text-align:center;
                       
                    }
                    .copy{
                        color:crimson;
                    }
                    
                    `
                 }
                </style>
                <p className="copywrite copycolor" id="copy">powered by  VScode, Chrome and coffee</p>
        <p className="copywrite">Copyright<span className="copy"  >&copy;</span> 2020 Chinedu Mbaodoh</p>
            </div>
          );
    }
}
 
export default CopyRight;