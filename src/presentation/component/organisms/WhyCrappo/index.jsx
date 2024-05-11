// -- style
import style from "./style.module.scss";

// -- atoms
import Button from "presentation/component/atoms/Button";

const WhyCrappo = (props) => {
	const { data } = props;
	return (
		<div className={style.crappo}>
			<div className={"container"}>
				<div className={style.inner}>
					<div className={style.image}>
						<img src={data.image} alt={data.title} />
					</div>
					<div className={style.text}>
						<h2 className={style.title}>{data.title}</h2>
						<p className={style.desc}>{data.description}</p>
						<Button to={data.button?.to} text={data.button?.text} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhyCrappo;
