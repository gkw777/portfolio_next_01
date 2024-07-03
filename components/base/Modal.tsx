import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import Image from 'next/image';

interface ModalPorps {
  open?: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const Modal = ({ open, onClose, children }: ModalPorps) => {
  return (
    <Dialog className='relative z-10' open={open} onClose={onClose}>
      <DialogBackdrop
        transition
        className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in'
      />
      <div className='fixed inset-0 overflow-y-auto'>
        <div className='flex min-h-full items-center justify-center p-4 text-center'>
          <DialogPanel
            transition
            className='relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5 opacity-100 scale-100 data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95
          '>
            <button
              className='absolute top-2 right-2 z-10 w-fit p-2 bg-blue-50 rounded-full'
              type='button'
              onClick={onClose}>
              <Image src='close.svg' alt='modal-close' width={24} height={24} className='object-contain' />
            </button>
            {children}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;
