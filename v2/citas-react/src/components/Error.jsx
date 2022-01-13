const Error = ({ children }) => {
  return (
    <div className="text-white bg-red-800 text-center font-bold uppercase p-3 mb-3 rounded-md">
      {children}
    </div>
  );
}

export default Error
