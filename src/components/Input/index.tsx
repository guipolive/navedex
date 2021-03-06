import {InputContainer} from './styles';

interface InputProps{
	label: string;
	value: string;
	placeholder: string;
	type?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

	className?: string;
}

export default function Input(props: InputProps) {
	return(
		<InputContainer className={props.className}>
			<label htmlFor="input">{props.label}</label>
			<input 
				type={props.type || 'string'}
				placeholder={props.placeholder}
				onChange={props.onChange}
				value={props.value}
			/>
		</InputContainer>
	)
}