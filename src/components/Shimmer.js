const Shimmer = () => {
  return (
    <div className="flex border-solid border-black">
      <div className="animate-pulse border w-80 h-72 m-4 rounded-lg shadow-lg hover:cursor-pointer hover:scale-110 transition 100ms">
        <img className="w-full h-44 p-1 rounded-lg bg-slate-100" />
        <div className="m-4">
          <h1 className="animate-pulse mt-2 mb-1 h-7 bg-slate-300 rounded-lg"></h1>
          <div className="animate-pulse h-2 bg-slate-200 rounded">
            <img className="w-4" />
            <span className="ml-1 text-lg"></span>
            <span className="ml-3 text-lg "></span>
          </div>
          <h3 className="animate-pulse w-3 bg-slate-200 rounded-lg"></h3>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
