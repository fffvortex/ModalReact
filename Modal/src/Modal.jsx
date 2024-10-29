
export default function Modal({ active, setActive, children }) {
  return (
    <div
      onClick={() => setActive(false)}
      className={active ? "modal active" : "modal"}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={active ? "modalContent active" : "modalContent"}
      >
        {children}
      </div>
    </div>
  );
}
