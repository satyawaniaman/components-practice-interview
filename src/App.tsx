import { BrowserRouter, Routes, Route } from 'react-router';
import { ThemeProvider } from '@/components/theme-provider';
import Home from '@/pages/Home';
import ComponentPage from '@/pages/ComponentPage';
import './App.css';

function App() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<BrowserRouter>
				<Routes>
					<Route index element={<Home />} />
					<Route path="/component/:componentName" element={<ComponentPage />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
