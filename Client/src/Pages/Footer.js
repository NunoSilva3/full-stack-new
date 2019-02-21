import React, { Component } from 'react';
import StickyFooter from 'react-sticky-footer';


export default class Footer extends React.Component{

render(){

return (

    <div>
        
        <StickyFooter
    bottomThreshold={50}
    normalStyles={{
    backgroundColor: "#999999",
    padding: "2em"
    }}
    stickyStyles={{
    backgroundColor: "rgba(255,255,255,.8)",
    padding: "2em",
    bottomThreshold: 0
    }}
>
    FOOOOOOOOTTTTTTTEEEEERRRRRRRRRR
</StickyFooter>

    </div>

)

}


}