// -- core
import { Link } from "react-router-dom";

// -- style
import style from "./style.module.scss";

const Button = (props) => {
	const { to, text, type, icon, variant = "primary" } = props;

	let variantStyle = style.btn;
	if (variant === "arrow") {
		variantStyle += " " + style.btnArrow;
	}
	if (variant === "outline") {
		variantStyle += " " + style.btnOutline;
	}

	return (
		<>
			{to && (
				<Link to={to} className={variantStyle}>
					{text}
					{icon && <i className={`fi-${icon}`}></i>}
				</Link>
			)}
			{!to && (
				<button type={type} className={variantStyle}>
					{text}
					{icon && <i className={`fi-${icon}`}></i>}
				</button>
			)}
		</>
	);
};

export default Button;
