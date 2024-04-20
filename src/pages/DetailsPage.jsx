/** @format */

import React from "react";
import { FOOD } from "../Food";
import Details from "./Details";

const DetailsPage = () => {
	return (
		<div>
			{FOOD.map((food) => (
				<Details
					key={food.id}
					food={food}
				/>
			))}
		</div>
	);
};

export default DetailsPage;
