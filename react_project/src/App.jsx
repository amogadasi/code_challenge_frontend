import HomePage from "./pages/HomePage";
import LayoutPage from "./pages/LayoutPage";
import Navbar from "./components/Navbar";
import SearchBarPage from "./pages/SearchBarPage";
import TablePage from "./pages/TablePage";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<main>
			<Navbar />

			<Routes>
				<Route path="/" element={<HomePage />}></Route>
				<Route path="/layout" element={<LayoutPage />}></Route>
				<Route path="/table" element={<TablePage />}></Route>
				<Route path="/searchbar" element={<SearchBarPage />}></Route>
			</Routes>
		</main>
	);
}

export default App;
