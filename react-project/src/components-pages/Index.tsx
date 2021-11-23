import { useState } from "react"
import { Link } from "react-router-dom"
import RemConverter from "../components-index-content/RemConverter"

export default function Content() {
	const [content, setContent] = useState(<RemConverter />)

	const handleClick = (page: String) => {
		if (page === "RemConverter") {
			setContent(<RemConverter />)
			return
		}

		setContent(<div>{page}</div>)
	}

	return (
		<div id="Index">
			<header>
				<nav>
					<ul>
						<li>
							<button onClick={(e) => handleClick(e.currentTarget.innerHTML)}>
								RemConverter
							</button>
						</li>
						<li>
							<button onClick={(e) => handleClick(e.currentTarget.innerHTML)}>
								Two
							</button>
						</li>
						<li>
							<Link to="/sandbox">
								<button>Sandbox</button>
							</Link>
						</li>
					</ul>
				</nav>
			</header>

			{content}
		</div>
	)
}
