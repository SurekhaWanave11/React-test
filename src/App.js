import Axios from 'axios';
import React, { Component } from 'react'
import { Row, Col} from 'reactstrap';
import PhotoList from './components/PhotoList';
import CompareTable from './components/CompareTable';
import './App.css'

 class App extends Component {

  constructor(props){
    super(props)
    this.state={
      photos:[],
      addPhoto:[]     
}
  }

  componentDidMount(){
  Axios.get('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5').then((res)=>{
      this.setState({
        photos:res.data
      })
    })
  }

 addCompareTable=(photo)=>{

 this.setState({
   addPhoto:[...this.state.addPhoto,photo]
 })
}

removeCompareTable=(photo)=>{
  this.setState({
    addPhoto:[...this.state.addPhoto,photo]
  })
 }


  render() {
    return (
      <div className="App">
        <div className="photoList">
          { this.state.photos.map((photo)=>{
            return <PhotoList key={photo.id} photo={photo} addCompareTable={this.addCompareTable} removeCompareTable={this.removeCompareTable} />
          })}  
          </div>

          <Row>
            <Col xs={12} md={12}>
            <div className="page-title pl-5">
                        <div className="row mb-1 align-items-center">
                            <div className="col-md-12">
                                    Comparison Table
                            </div>
                        </div>
              </div>
                <div className="row">
                              <div className="col-md-3">
                                  Image
                              </div>
                                <div className="col-md-3">
                                 Id
                                </div>
                                <div className="col-md-3">
                                 Url
                                </div>
                                <div className="col-md-3">
                                 title
                                  </div>
                            </div>
            </Col>
        </Row>
          {this.state.addPhoto && this.state.addPhoto.map((item)=>{
            return <CompareTable addPhoto={item}/>
          }) }
        
      </div>
    )
  }
}
export default App
