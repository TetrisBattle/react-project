import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Notepad from './Notepad/Notepad'
import RemConverter from './RemConverter'
import Sandbox from './Sandbox'

export default function App() {
	function Menu() {
		return (
			<div className='Menu'>
				<h1>TetrisBattle</h1>
				
				<div className='container'>
					<Link to='/notepad'>Notepad</Link>
					<Link to='/RemConverter'>RemConverter</Link>
					<Link to='/sandbox'>Sandbox</Link>
				</div>
			</div>
		)
	}
	
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Menu />} />
				<Route path='/notepad' element={<Notepad />} />
				<Route path='/RemConverter' element={<RemConverter />} />
				<Route path='/sandbox' element={<Sandbox />} />
			</Routes>
		</Router>
	)
}