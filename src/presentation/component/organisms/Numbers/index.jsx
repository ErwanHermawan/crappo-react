// -- style
import style from "./style.module.scss";

// -- molecule
import NumbersItem from "presentation/component/molecules/NumbersItem";

const Numbers = (props) => {
	return (
		<div className={style.numbers}>
			<div className="container">
				<div className={style.list}>
					{props.list.map((val, idx) => {
						return (
							<div className={style.item} key={`f-${idx}`}>
								<NumbersItem {...val} />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Numbers;