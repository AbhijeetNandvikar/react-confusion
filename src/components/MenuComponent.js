import React, { Component } from 'react' ;
// import { Media } from 'reactstrap' ;
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import  DishDetail  from './DishDetailComponent.js' ;


class Menu extends Component{
  constructor(props) {
    super(props);
      this.state = {
        selectedDish: null
    }
}

onDishSelect(dish) {
    this.setState({ selectedDish: dish});
    console.log('clicked')
}

renderDish(dish) {
    if (dish != null)
        return(
          <DishDetail dishSelect={dish}/>
        );
    else
        return(
            <div></div>
        );
}


  render() {
            
      const menu = this.props.dishes.map((dish) => {
        return (
            <Card className="col-12 col-md-5 m-1" key={dish.id}
              onClick={() => this.onDishSelect(dish)}>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardImgOverlay>
                  <CardTitle>{dish.name}</CardTitle>
              </CardImgOverlay>
            </Card>
          
        );
      });
    console.log('rendered menu component')


    

    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
            <div className="row">
                {this.renderDish(this.state.selectedDish)}
            </div>

        </div>
    );
    }
    
}

export default Menu ;
