import * as React from 'react';
import { Component } from 'react';

export interface CopyRightProps {
    Name:String;
    
}
 
export interface CopyRightState {
    
}
 
class CopyRight extends React.Component<CopyRightProps, CopyRightState> {
    constructor(props: CopyRightProps) {
        super(props);
        this.state = {name :"Chinedu Mbaodoh"  };
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
        <p className="copywrite">Copyright<span className="copy"  >&copy;</span> 2020 {this.state.name}</p>
            </div>
          );
    }
}
 
export default CopyRight;