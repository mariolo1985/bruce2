import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Picmod extends Component{
    static PropTypes={
        imgSrc:PropTypes.string
    }

    static defaultProps = {
        imgSrc:''
    }

    getImgSrc = () =>{
        const {imgSrc} = this.props;
        const result = !imgSrc ? Picmod.defaultProps.imgSrc : imgSrc;

        return result;
    }

    render(){
        const imgSrc = this.getImgSrc();
        return(
            <div className='pic-mod-container'>
                <img className='pic-mod-img' src={imgSrc}/>

            </div>
        )
    }
}

export default Picmod;