/** @format */

import React, { useContext } from "react";
import { not_found_1, not_found_2 } from "../assets";
import { House, CaretLeft } from "phosphor-react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/navbar";
import { FOOD } from "../Food";
import { ShopContext } from "../context/shopContext";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Details = (props) => {
	const { id } = useParams();
	const food = FOOD.find((food) => food.id === parseInt(id));
	const { addToCart } = useContext(ShopContext);
	const handlerToCart = () => {
		addToCart(id);
		toast.success(`${food.foodName} has been added to the cart!!!`, {
			position: "bottom-right",
		});
	};

	const navigate = useNavigate();
	return (
		<div>
			<Navbar />

			<div className="details">
				<button
					onClick={() => navigate("/menu")}
					className="back">
					<CaretLeft size={20} />
					MENU
				</button>
				<div className="flex">
					<div className="img-con">
						<img
							src={food.foodImage}
							alt={food.foodName}
						/>
					</div>
					<div className="info">
						<h3>{food.foodName}</h3>
						<p className="dec">{food.dec}</p>
						<p className="price">${food.price}</p>
						<button
							className="back"
							onClick={handlerToCart}>
							Add to cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Details;
