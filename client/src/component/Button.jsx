function Button({ name, className, handleClick, disabled }) {
	return (
		<div className={className} disabled={disabled} onClick={handleClick}>
			{name}
		</div>
	);
}

export default Button;
