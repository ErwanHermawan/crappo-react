// -- style
import style from "./style.module.scss";

// -- atoms
import Button from "presentation/component/atoms/Button";

const WhyCrappo = (props) => {
	return (
		<div className={style.crappo}>
			<div className={style.container}>
				<div className={style.inner}>
					<div className={style.img}>
						<img src={props.image} alt={props.title} />
					</div>
					<div className={style.text}>
						<h2 className={style.title}>{props.title}</h2>
						<p className={style.desc}>{props.description}</p>
						<Button
							variant="accent"
							category="icon"
							to={props.button.to}
							icon="chevron-right"
						>
							{props.button.text}
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhyCrappo;
