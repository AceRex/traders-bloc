function Button({ text, onClick }: { text: string; onClick?: () => void }) {
  return (
    <div className="bg-secondary w-full text-center font-bold text-lg rounded-xl p-3 text-primary" onClick={onClick}>
      {text}
    </div>
  );
}

export default Button;
