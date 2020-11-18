import React,{useState} from 'react'
import './PhotoList.css'
  
const PhotoList = (props) => {
 
const [compareButton, setcompareButton] = useState('Compare')

const handleClick=()=>{
    if(compareButton==='Compare'){
        setcompareButton('Remove')
        props.addCompareTable(props.photo)
    }
    else{
        setcompareButton('Compare')
        props.removeCompareTable(props.photo)
    }

}

    return (
    <div className="card-container">
        <div className="Card">
            <img src={props.photo.thumbnailUrl} alt=""/>
            <div className="CardBody">
                <div className="CardTitle">Title:- {props.photo.title}</div>
                    <div className="CardId">Id:-{props.photo.id}</div>
                <div className="CardUrl">Url:-{props.photo.url}</div>
            </div>
    <button onClick={handleClick}>{compareButton}</button>
        </div>
    </div>
    )
}

export default PhotoList
