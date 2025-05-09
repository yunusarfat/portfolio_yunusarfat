const Button = ({ children, ...props }) => (
  <button {...props} className="px-4 py-2 bg-blue-600 text-white rounded-md">
    {children}
  </button>
);

export { Button };
