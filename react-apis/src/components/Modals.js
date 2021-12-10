import React from 'react';
import { useModal } from '../hooks/useModal';
import ContactForm from './ContactForm';
import Modal from './Modal';
import ModalPortal from './ModalPortal';
import SongSearch from './SongSearch';

const Modals = () => {
    const [isOpenModal1, openModal1, closeModal1] = useModal(false);
    const [isOpenModal2, openModal2, closeModal2] = useModal(false);
    const [isOpenContact, openContactModal, closeContactModal] = useModal(false);
    const [isOpenSong, openSongModal, closeSongModal] = useModal(false);
    const [isOpenPortal, openModalPortal, closeModalPortal] = useModal(false);
    return (
        <div>
            <h2>Modals</h2>
            <button onClick={openModal1}>Modal 1</button>
            <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
                <h3>Modal 1</h3>
                <p>Hello! This is the content</p>
                <img src='https://placeimg.com/400/400/animals' alt='animals' />
            </Modal>

            <button onClick={openModal2}>Modal 2</button>
            <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
                <h3>Otro modal</h3>
                <p>Lorem ipsum hola como estas todo ok solo escribo pq ns q mas ponr en este texto de ejemplpo, vale, kapichi, sale?</p>
                <img src='https://placeimg.com/400/400/nature' alt='nature' />
            </Modal>

            <button onClick={openContactModal}>Form Modal</button>
            <Modal isOpen={isOpenContact} closeModal={closeContactModal}>
                <ContactForm />
            </Modal>

            <button onClick={openSongModal}>Song Modal</button>
            <Modal isOpen={isOpenSong} closeModal={closeSongModal}>
                <SongSearch />
            </Modal>

            <button onClick={openModalPortal}>Portal Modal</button>
            <ModalPortal isOpen={isOpenPortal} closeModal={closeModalPortal}>
                <h3>Portal modal</h3>
                <p>This is the modal content charge from other DOM node , thanks Portal´s :)</p>
                <img src='https://placeimg.com/400/400/tech' alt='tech' />
            </ModalPortal>
        </div>
    );
}

export default Modals;