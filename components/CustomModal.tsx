import React, { Fragment } from "react";
import { Transition } from "@headlessui/react";

interface CustomModalProps {
  title: string;
  subtitle: string;
  body: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const CustomModal: React.FC<CustomModalProps> = ({
  title,
  subtitle,
  body,
  isOpen,
  onClose,
}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <div className="fixed inset-0 flex items-start justify-center z-50 overflow-y-auto pt-12">
        {/* Backdrop with subtle blur */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm"
            onClick={onClose}
          ></div>
        </Transition.Child>

        {/* Modal Panel */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 scale-95"
          enterTo="opacity-100 translate-y-0 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 scale-100"
          leaveTo="opacity-0 translate-y-4 scale-95"
        >
          <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-2xl w-full p-6">
            <h2 className="text-xl font-bold text-gray-800">{title}</h2>
            <h3 className="text-lg text-gray-600 mt-1">{subtitle}</h3>
            <p className="mt-4 text-gray-700">{body}</p>
            <div className="mt-6 flex justify-end">
              <button
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition duration-200"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </Transition.Child>
      </div>
    </Transition>
  );
};
