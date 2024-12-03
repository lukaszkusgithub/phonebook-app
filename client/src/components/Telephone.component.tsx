export const Telephone = (props: { tel: number }) => (
	<a href={"tel:" + props.tel}>{props.tel}</a>
);
