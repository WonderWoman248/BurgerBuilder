import React ,{ Component } from "react";
import Aux from '../../hoc/auxiliary';
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component{
    render() {
        return (
            <Aux>
                <Burger/>
                <div>build controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;