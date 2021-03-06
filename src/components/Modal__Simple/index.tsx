import { ReactChildren } from 'react';
import {ModalContainer, ModalWrapper} from './styles';

interface ModalProps{
	title: string;
	body: string;

}

export default function Modal__Simple(props: ModalProps) {
	return(
		<ModalWrapper>
			<ModalContainer>
				<img src="cross.svg" alt="Close"/>

				<h2>{props.title}</h2>
				<p>{props.body}</p>
			</ModalContainer>
		</ModalWrapper>
	)
}