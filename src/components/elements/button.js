import * as React from "react";
import "./elements.css";
class Button extends React.Component {
	render() {
		return <button className="btn">{this.props.name}</button>;
	}
}
export default Button;
