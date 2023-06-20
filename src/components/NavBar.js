import React from 'react';

function NavBar() {
	return (
		<div class="container">
			<header class="d-flex justify-content-center py-3">
				<ul class="nav nav-pills">
					<li class="nav-item">
						<a href="/state" class="nav-link" aria-current="page">
							State
						</a>
					</li>
					<li class="nav-item">
						<a href="/reducer" class="nav-link">
							Reducer
						</a>
					</li>
					<li class="nav-item">
						<a href="/context" class="nav-link">
							Context
						</a>
					</li>
					<li class="nav-item">
						<a href="/ref" class="nav-link">
							Ref
						</a>
					</li>
					<li class="nav-item">
						<a href="/effect" class="nav-link">
							Effect
						</a>
					</li>
                    <li class="nav-item">
						<a href="/memo" class="nav-link">
							Memo
						</a>
					</li>
                    <li class="nav-item">
						<a href="/callback" class="nav-link">
							Callback
						</a>
					</li>
				</ul>
			</header>
		</div>
	);
}

export default NavBar;
