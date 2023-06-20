import React from 'react';

function NavBar() {
	const page = window.location.pathname;
	return (
		<div className="container-fluid">
			<header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
				<a
					href="/"
					className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
				>
					<svg className="bi me-2" width="40" height="32"></svg>
					<span className="fs-4">Hooks Demo</span>
				</a>

				<ul className="nav nav-pills">
					<li className="nav-item">
						<a
							href="/state"
							className={`nav-link ${page === '/state' && 'active'}`}
						>
							State
						</a>
					</li>
					<li className="nav-item">
						<a href="/reducer" className={`nav-link ${page === '/reducer' && 'active'}`}>
							Reducer
						</a>
					</li>
					<li className="nav-item">
						<a href="/context" className={`nav-link ${page === '/context' && 'active'}`}>
							Context
						</a>
					</li>
					<li className="nav-item">
						<a href="/ref" className={`nav-link ${page === '/ref' && 'active'}`}>
							Ref
						</a>
					</li>
					<li className="nav-item">
						<a href="/effect" className={`nav-link ${page === '/effect' && 'active'}`}>
							Effect
						</a>
					</li>
					<li className="nav-item">
						<a href="/memo" className={`nav-link ${page === '/memo' && 'active'}`}>
							Memo
						</a>
					</li>
					<li className="nav-item">
						<a href="/callback" className={`nav-link ${page === '/callback' && 'active'}`}>
							Callback
						</a>
					</li>
				</ul>
			</header>
		</div>
	);
}

export default NavBar;
