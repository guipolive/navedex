import {InputContainer} from './styles';

interface InputProps{
	label: string;
	value: string;
	placeholder: string;
	type?: string;

	className?: string;
}

export default function Input(props: InputProps) {
	return(
		<InputContainer className={props.className}>
			<label htmlFor="input">{props.label}</label>
			<input 
				type={props.type || 'string'}
				placeholder={props.placeholder} 
				value={props.value}
			/>
		</InputContainer>
	)
}