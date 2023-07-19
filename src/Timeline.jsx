import React from 'react';
import {grid} from "./utils";
import Event from "./Event";

const Timeline = ({events, leftSide = false}) => {
	const numSemesters = 2 + Math.floor((Date.now() - new Date(2011, 0, 1).getTime()) / (3600*1000*12*365));

	return (
		<div style={grid(`repeat(${numSemesters}, 100px) / 100%`)}>
			{events.map(event => <Event key={event.description} event={event} leftSide={leftSide}/>)}
		</div>
	);
};

export default Timeline;
