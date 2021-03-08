import {ModalWrapper} from '../Modal__Simple/styles';

import {ModalContainer, ModalChildren} from './styles';

interface ModalProps {
	onClose(): void; 
}

const Modal__ShowNaver: React.FC<ModalProps> = (props) => {
	return(
		<ModalWrapper>
			<ModalContainer>
				<img 
					src="/cross.svg"
					alt="Close"
					className="close_button"
					onClick={props.onClose}
				/>



				<ModalChildren className="children">
					{props.children}
				</ModalChildren>
			</ModalContainer>
		</ModalWrapper>
	)
}

export default Modal__ShowNaver;