import React from 'react'
import widgetStyle from './widgetStyle';


export default class UploadImages extends React.Component{


	uploadWidget = () => {
        debugger
        window.cloudinary.openUploadWidget({ 
        	cloud_name: 'nuno3', 
        	upload_preset: 'od10bb08', 
			tags:['user'],
			stylesheet:widgetStyle
        },
            (error, result)=> {
				debugger
                if(error){
					debugger
                }else{
									
					fetch('http://localhost:3003/images/upload', {
						method: 'POST',
						headers: {
						  Accept: 'application/json',
						  'Content-Type': 'application/json'
						},
						body: JSON.stringify({
						  photo_url:result[0].secure_url, 
							public_id:result[0].public_id,
						}),
						}).then((response) => response.json())
							.then((responseJson) => {
								this.props.getData(result[0].secure_url)
						}).catch((e)=>{
							debugger
						})
							  
                }
            });
		}
	
	
	render(){
		return (
			<div className="flex_upload">
                <div className="upload">
					<button className ="button_small"
                    	onClick={this.uploadWidget} > click me
                    </button>
                </div>
            </div>
		)
	}
}

