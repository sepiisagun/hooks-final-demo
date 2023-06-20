import { useState } from 'react';

function UseSate() {
	const [age, setAge] = useState(19);
	return (
		<div className="container">
			<div className="card">
				<div className="card-body text-center">
					<h1>useState Demo</h1>
					<h2>Today I am {age} Years of age</h2>
					<div className="container">
						<button
							className="btn btn-primary m-1"
							onClick={() => setAge(age + 1)}
							type="button"
						>
							Get Older!
						</button>
						<button
							className="btn btn-secondary m-1"
							onClick={() => setAge(19)}
							type="button"
						>
							Reset
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default UseSate;
