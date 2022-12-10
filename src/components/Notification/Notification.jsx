import { Toaster } from 'react-hot-toast';

export const Notification = () => {
  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{ duration: 1000 }}
      />
    </>
  );
};
