// -- core
import { Link } from "react-router-dom";

// -- style
import style from "./style.module.scss";

const Button = (props) => {
	const { to, text, type, icon, variant = "primary", ...otherProps } = props;

	let variantStyle = style.btn;
	if (variant === "rounded") {
		variantStyle += " " + style.btnRounded;
	}
	if (variant === "icon") {
		variantStyle += " " + style.btnIcon;
	}
	if (variant === "white") {
		variantStyle += " " + style.btnWhite;
	}

	return (
		<>
			{to && (
				<Link {...otherProps} to={to} className={variantStyle}>
					{text}
					{icon && <i className={`ci-${icon}`}></i>}
				</Link>
			)}
			{!to && (
				<button {...otherProps} type={type} className={variantStyle}>
					{text}
					{icon && <i className={`ci-${icon}`}></i>}
				</button>
			)}
		</>
	);
};

export default Button;
