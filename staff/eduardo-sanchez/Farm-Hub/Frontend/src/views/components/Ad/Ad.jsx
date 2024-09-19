import { useNavigate, Link } from 'react-router-dom';

import { useState } from 'react';

import Button from '../../../components/core/Button';

import logic from '../../../logic';

import useContext from '../../../useContext';

import Confirm from '../Confirm/Confirm';

import './Ad.css';

export const Ad = ({ ad, onAdDeleted }) => {
    console.log('Ad -> render');

    const [confirmDeleteVisible, setConfirmDeleteVisible] = useState(false);

    const { alert } = useContext();

    const navigate = useNavigate();

    const handleDeleteAd = (event) => {
        event.stopPropagation();
        setConfirmDeleteVisible(true);
    };
    // if (confirm('Are you sure you want to delete this ad?')) {
    const handleConfirmDelete = (event) => {
        event.stopPropagation();
        setConfirmDeleteVisible(false);
        try {
            logic
                .deleteAd(ad._id)
                .then(() => {
                    console.log(`Ad ${ad._id} deleted`);
                    onAdDeleted();
                })
                .catch((error) => {
                    console.error('Could not delete ad:', error);

                    alert(error.message);
                });
        } catch (error) {
            console.error('Failed to delete ad:', error);

            alert(error.message);
        }
    };

    const handleCancelDelete = (event) => {
        event.stopPropagation();

        setConfirmDeleteVisible(false);
    };
    const handleUpdateAd = (event) => {
        event.stopPropagation();
        navigate(`/updateadform/${ad._id}`);
    };

    return (
        <>
            <div className="AdActions">
                <Button
                    className="DeleteButton"
                    type="button"
                    onClick={handleDeleteAd}
                >
                    Delete
                </Button>

                <button
                    className="DeleteButton"
                    type="button"
                    onClick={handleUpdateAd}
                >
                    Update
                </button>
            </div>

            {confirmDeleteVisible && (
                <Confirm
                    message="Are you sure you want to delete this ad?"
                    onAccept={handleConfirmDelete}
                    onCancel={handleCancelDelete}
                />
            )}
        </>
    );
};
