import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "bootstrap/dist/css/bootstrap.min.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import NewNote from "./components/NewNote";

function App() {
	return (
		<Container className="my-4">
			<Routes>
				<Route path="/" element={<h1>Home</h1>} />
				<Route path="/new" element={<NewNote />} />
				<Route path="/:id">
					<Route index element={<h1>Show</h1>} />
					<Route path="edit" element={<h1>Edit</h1>} />
				</Route>
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</Container>
	);
}

export default App;