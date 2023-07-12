import React from "react";

const Team = () => {
  return (
    <div className="container mx-auto py-32">
      <div className="w-3/5">
        <h2 className="animate-gradient-text text-8xl uppercase ">
          PRACTISED IN DOING THINGS FOR THE FIRST TIME.
        </h2>
      </div>
      {/* Photo Gallery */}
      <div className="grid grid-cols-3 gap-2 text-white mt-20">
        <div className="col-span-1 grid gap-y-2">
          <div>
            <img
              src="https://images.unsplash.com/photo-1616047350141-8496af62158c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt=""
              className="w-full h-full block object-cover"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1613824761393-f8a4f8f4c514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt=""
              className="w-full h-full block object-cover"
            />
          </div>
        </div>
        <div className="col-span-2">
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
