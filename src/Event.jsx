import React from 'react';
import {item} from "./utils";

const Event = ({event, leftSide}) => {
	const {name, when, where, description, url, what, died} = event;
	const semesterIndex = 2 +  Math.floor((Date.now() - when.getTime()) / (3600 * 1000 * 12 * 365));

	return (
		<div style={{
			...item(`${semesterIndex} / 1 / ${semesterIndex} / 1`),
			position: "relative",
		}}>
			<div style={{
				marginRight: leftSide ? "30px" : "auto",
				marginLeft: leftSide ? "auto" : "30px",
				opacity: died ? '0.4':'1'
			}}> {died && '👎'} { url ? <a href={url} style={{color: died ? 'grey' : leftSide ? '#333':'#dedede'}} target="_blank" rel="noopener noreferrer">{name}</a> : name}
				<div>{description}</div>
				<div><small>{what}</small></div>
				<div><small>{when.getFullYear()} {where}</small></div>
			</div>
			<div style={{
				position: "absolute",
				right: leftSide ? "-22px" : "auto",
				left: leftSide ? "auto" : "-22px",
				backgroundColor: leftSide ? "#ededed": "#fbd040",
				border: "8px solid #325f9f",
				borderRadius: 18,
				height: 20,
				width: 20,
				top: 19
			}}/>
		</div>
	);
};

export default Event;
