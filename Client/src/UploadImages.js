import React from 'react'
import widgetStyle from './widgetStyle';
import axios from 'axios';


export default class UploadImages extends React.Component{


	uploadWidget = () => {
        
        window.cloudinary.openUploadWidget({ 
        	cloud_name: 'nuno3', 
        	upload_preset: 'od10bb08', 
			tags:['user'],
			stylesheet:widgetStyle
        },
            (error, result)=> {
                if(error){
					
                }else{
										function gcd (a, b) {
											return (b == 0) ? a : gcd (b, a%b);
										}
										var w = result[0].width;
										var h = result[0].height;
										var r = gcd (w, h);
										var aspect_ratio = parseFloat((w/r) +  "." + (h/r));

										if(/*aspect_ratio !== 16.9 || */w < 299 || h < 299) return async function(){
											var url = 'http://localhost:3003/images/delete'
											await axios.post(url,
												{
													public_id: result[0].public_id
												})
										}()
									
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

