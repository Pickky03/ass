import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addNewProduct } from "../redux/actions/productAction";

function ProductForm() {
	const { isLoading } = useSelector((state) => state.products);

	const [form, setForm] = useState({
		title: "",
		author: "",
		content: "",
		tags: "",
		status: true,
	});

	const dispatch = useDispatch();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const product = {
			...form,
			tags: form.tags.split(","),
			timestamp: new Date(),
		};

		dispatch(addNewProduct(product));
	};

	return (
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
			<Card style={{ width: "40rem" }}>
				<Card.Header as="h5">
					<Form.Text>New product</Form.Text>
				</Card.Header>
				<Card.Body>
					<Form onSubmit={(e) => handleSubmit(e)}>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>product's name</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter Product's name"
								onChange={(e) =>
									setForm({ ...form, name: e.target.value })
								}
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>price</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter price"
								onChange={(e) =>
									setForm({ ...form, price: e.target.value })
								}
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>description</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter content"
								onChange={(e) =>
									setForm({
										...form,
										description: e.target.value,
									})
								}
							/>
						</Form.Group>
						<Form.Group
							className="mb-3"
							controlId="formBasicPassword"
						>
							<Form.Label>catalogs</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter tags"
								onChange={(e) =>
									setForm({
										...form,
										catalogs: e.target.value,
									})
								}
							/>
							<Form.Text className="text-muted">
								Ex: catalogs 1, catalogs 2
							</Form.Text>
						</Form.Group>
						<Form.Group
							className="mb-3"
							controlId="formBasicCheckbox"
						>
							<Form.Check
								type="checkbox"
								label="Public this product"
								checked={form.status}
								onChange={(e) =>
									setForm({
										...form,
										status: e.target.checked,
									})
								}
							/>
						</Form.Group>
						<Button
							type="add to cart"
							variant="primary"
							disabled={isLoading}
							// onClick={!isLoading ? handleSubmit : null}
						>
							{isLoading ? "Loading…" : "Click to submit"}
						</Button>
						{/* <Button variant="primary" type="submit">
              Submit
            </Button> */}
					</Form>
				</Card.Body>
			</Card>
		</div>
	);
}

export default ProductForm;
