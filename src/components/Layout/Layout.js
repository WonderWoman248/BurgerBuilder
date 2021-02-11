import React from 'react';
import Aux from '../../hoc/auxiliary';
import Classes from './layout.css';

const layout = (props) => (
    <Aux>
        <div>toolbaar, sidedrawer, backdrop</div>
        
        <main className={Classes.Content}>
            {props.children}
        </main>

    </Aux>
);

export default layout;