import React from 'react';

import {ModalContainer, ModalWrapper} from './styles';

interface ModalProps{
	title: string;
	body: string;

	onClose(): void;
}

// export default function Modal__Simple(props: ModalProps) {
const Modal__Simple: React.FC<ModalProps> = (props)=> {
	return(
		<ModalWrapper>
			<ModalContainer>
				<img 
					src="/cross.svg"
					alt="Close"
					onClick={props.onClose}
				/>

				<h2>{props.title}</h2>
				<p>{props.body}</p>

				<div className="children">
					{props.children}
				</div>
			</ModalContainer>
		</ModalWrapper>
	)
}

export default Modal__Simple;