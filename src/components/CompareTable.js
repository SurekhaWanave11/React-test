import React from 'react'
import { Row, Col} from 'reactstrap';

const CompareTable = (props) => {
    return (
        <div className="CompareTable-container">
         <Row>
            <Col xs={12} md={12}>
               
                <div className="row">
                                <div className="col-md-3">
                                    {props.addPhoto.thumbnailUrl}
                                </div>
                                <div className="col-md-3">
                                {props.addPhoto.id}
                                </div>
                                <div className="col-md-3">
                                {props.addPhoto.url}
                                </div>
                                <div className="col-md-3">
                                {props.addPhoto.title}
                                  </div>
                            </div>
            </Col>
        </Row>
            
        </div>
    )
}

export default CompareTable
