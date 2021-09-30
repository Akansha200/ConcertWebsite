import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../utils/MyButton';

  class Discount extends Component {
      state = {
          discountStart: 0,
          discountEnd: 25
      }
      porcentage = () => {
          if(this.state.discountStart < this.state.discountEnd){
              this.setState({
                  discountStart: this.state.discountStart + 1
              })
          }
      }
      componentDidUpdate(){
          setTimeout(() => {
              this.porcentage()
          }, 25)
      }
    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade onReveal={()=> this.porcentage()}>
                    <div className="discount_porcentage">
                        <span>{this.state.discountStart}%</span>
                        <span>OFF</span>
                    </div>
                    </Fade>
                    <Slide>
                    <div className="discount_description">
                        <h3>Discount on buying minimum 4 tickets</h3>
                        <p>
                            Special Discount for people of group of 4 or more.
This dicount is specially made for this festive year. for families anf friends.The offer is only valid till 1 October.Please Book fast tickets.
                        </p>
<div>
    <MyButton 
    text="Purchase Tickets"
    bck="#ffa800"
    color="#ffffff"
    link="http://gooogle.com"
    />
</div>
                    </div>
                    </Slide>
                </div>
                
            </div>
        );
    }
}

export default Discount;
