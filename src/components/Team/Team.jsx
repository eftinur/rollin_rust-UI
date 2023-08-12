import React from "react";

const Team = () => {
  return (
    <div className="container mx-auto py-32">
      <div className="w-full lg:w-2/4 mx-auto px-4">
        <h2 className="animate-gradient-text text-4xl md:text-7xl text-center capitalize font-bold py-6">
          Keep your vehicle shielded with us.
        </h2>
      </div>
      {/* Photo Gallery */}
      <div className="flex flex-col lg:flex-row gap-4 text-white mt-20">
        <div className="w-full lg:w-2/6 grid gap-4">
          <div>
            <img
              src="https://images.unsplash.com/photo-1616047350141-8496af62158c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt=""
              className="w-full object-cover"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1613824761393-f8a4f8f4c514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt=""
              className="w-full object-cover"
            />
          </div>
        </div>
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1640291167497-d9e994ad2b52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
            alt=""
            className="w-full h-full block"
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
