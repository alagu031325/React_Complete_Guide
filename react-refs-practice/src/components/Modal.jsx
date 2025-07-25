import { useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import Button from './Button';

export default function Modal({ children, buttonCaption, ref }) {
    const dialogRef = useRef();
    // To expose a function that can be called from other components 
    useImperativeHandle(ref, () => {
        // returns object that contains any properties or functions that needs to be exposed to other components
        return {
            open () {
                dialogRef.current.showModal();
            }
        }
    });

    // createPortal helps to display this dialog in the correct place
    return createPortal(<dialog ref={dialogRef} className='backdrop:bg-stone-900/90 p-4 rounded-md shadow-md'>
        {children}
        <form method="dialog" className='mt-4 text-right'>
            <Button>{buttonCaption}</Button>
        </form>
    </dialog>, document.getElementById('modal-root'));
}