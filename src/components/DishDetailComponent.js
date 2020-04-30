import React, { Component } from 'react' ;
import { Card, CardBody, CardTitle, CardText, CardImg , Container } from 'reactstrap';


class DishDetail extends Component{
    renderComments(cmt){
        const comments = cmt.map( (comment) => {
            //converting date to string format
            const ndate = comment.date.split('T')[0].split('-') ;
            const sdate = new Date(ndate[0],ndate[1],ndate[2]).toDateString() ;
            console.log(sdate.split(" ").splice(1).toString()) ;
            if(cmt != null){
                return(
                    <li className='list-unstyled '  key={comment.id}>
                        <li className="">
                           {comment.comment} 
                        </li>
                        <li className="">
                            {`--`+comment.author+` , `+sdate}
                        </li>
                    </li>
                );
            }
            else{
                return(<div></div>)
            }
            
        })
        return(
        <div className="col-12 col-md-5 m-1 text-left">
            <h4>Comments</h4>
            {comments}
       </div>
        );
    }
    render(){
        console.log(this.props.dish)
        return(
            <Container className="row">
                <div className="col-12 col-md-5 m-1">
                <Card>
                <CardImg top src={this.props.dishSelect.image} alt={this.props.dishSelect.name} />
                <CardBody>
                  <CardTitle>{this.props.dishSelect.name}</CardTitle>
                  <CardText>{this.props.dishSelect.description}</CardText>
                </CardBody>
            </Card>

                </div>
                {this.renderComments(this.props.dishSelect.comments)}
        
        </Container>
            
        );
    }

}

export default DishDetail ;
