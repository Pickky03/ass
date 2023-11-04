import moment from "moment";
import React, { useEffect, useState } from "react";
import { Badge, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProduct } from "../redux/actions/productAction";

function ProductList() {
	const { data, isLoading } = useSelector((state) => state.products);
	console.log("____", data);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAllProduct());
	}, []);

	return (
		<>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					width: "100%",
					alignItems: "center",
					marginTop: 100,
					gap: 20,
				}}
			>
				{isLoading ? (
					<p>loading...</p>
				) : (
					//data?.filter((products) => products?.status)
					data?.map((products) => (
						<Card style={{ width: "40rem" }} key={products.id}>
							<Card.Header>
								 {products.name}
							</Card.Header>
							<Card.Body>
								<Card.Title>{products.price}</Card.Title>
								<Card.Text>{products.description}</Card.Text> 
								
							</Card.Body>
							<Card.Footer>
								<small className="text-muted">
									{moment(products.timestamp).format("LLL")}
								</small>
							</Card.Footer>
						</Card>
					))
				)}
			</div>
		</>
	);
}

export default ProductList;
