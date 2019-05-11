import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
// import { Link } from "react-router";

export default class Post extends Component {
	render() {
		return (
			<div>
				<h1>this is the post component</h1>
				<figure>
					<div>
						<Link to="#">
							<img alt="cute Boone pic goes here" />
						</Link>
						<CSSTransition
							transitionName="like"
							transitionEnterTimeout={500}
							transitionLeaveTimeout={500}
						>
							<span className="likes-heart">1</span>
						</CSSTransition>
					</div>
					<figcaption>figure caption here</figcaption>
				</figure>
			</div>
		);
	}
}
