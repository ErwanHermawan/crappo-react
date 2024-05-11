// -- style
import style from "./style.module.scss";

// -- atoms
import CryptoItem from "presentation/component/molecules/CryptoItem";

const Cryptocurrencies = (props) => {
	const { data } = props;

	return (
		<div className={style.crypto}>
			<div className="container">
				<h2 className={style.title}>{data.title}</h2>
				<div className={style.list}>
					{data.list?.map((val, idx) => {
						return (
							<div className={style.item} key={`ci-${idx}`}>
								<CryptoItem {...val} />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Cryptocurrencies;
