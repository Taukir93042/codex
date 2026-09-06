import InstructorAuth from "../pages/InstructorAuth";

const InstructorAuthModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <InstructorAuth onClose={onClose} />
      </div>
    </div>
  );
};

export default InstructorAuthModal;