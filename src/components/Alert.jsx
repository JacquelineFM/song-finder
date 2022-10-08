const Alert = ({ children }) => {
  return (
    <div
      class="bg-red-200 border-red-500 text-red-500 border-b-4 p-4 rounded-lg"
      role="alert"
    >
      <p class="font-bold">Error</p>
      <p>{children}</p>
    </div>
  );
};

export default Alert;
