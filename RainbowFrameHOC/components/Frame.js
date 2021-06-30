import React from 'react';
import PropTypes from 'prop-types';

import DoubleButton from './DoubleButton';

import { WithRainbowFrame } from './WithRainbowFrame';

let colors=['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
let FramedDoubleButton = WithRainbowFrame(colors)(DoubleButton);

class Frame extends React.Component {   

    render() {
         
        return (
            <div>
                <DoubleButton caption1="однажды" caption2="пору" cbPressed={ num => alert(num) } >в студёную зимнюю</DoubleButton>
                <br/>
                <br/>
                <FramedDoubleButton caption1="я из лесу" caption2="мороз" cbPressed={ num => alert(num) }>вышел, был сильный</FramedDoubleButton>
            </div>
        )
    }
 
}






export default Frame;