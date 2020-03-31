import React from 'react';

// props.children pega o parâmetro dentro da tag html
export default function Header({ children }) {
	return (
		<header>
			<h1>{children}</h1>
		</header>
	);
}

