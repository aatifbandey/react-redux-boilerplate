import React from "react";
import { container } from "./styles";

const Layout = (props) => {
	return(
		<div className={container}>
			{props.children}
		</div>
	)
}
export default Layout;