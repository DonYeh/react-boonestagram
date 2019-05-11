import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router";

export default function Post() {
	return (
		<div>
			<h1>this is the post component</h1>
			<figure>
				<div>
					<Link to="#">
						<img alt="cute Boone pic goes here" />
					</Link>
				</div>
				<figcaption>figure caption here</figcaption>
			</figure>
		</div>
	);
}
