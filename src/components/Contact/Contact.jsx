const Contact = () => {
  return (
    <div className="bg-white text-[#1e1e1e] py-32">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row justify-between items-start lg:items-center gap-8 px-4">
        <div className="w-full lg:w-2/5 text-center lg:text-left text-base">
          <h2 className="text-4xl lg:text-6xl capitalize font-bold mb-6">Get in touch</h2>
          <p>Email: ina@notyetnormal@gmail.com</p>
          <p className="py-2">Telephone: +49 46092383</p>
          <p>Location: 11th street avenue, California</p>
        </div>
        <di className="flex-1">
          <img
            src="https://d2kq0urxkarztv.cloudfront.net/60117bfd0abfdc009d73e3d1/2580452/upload-2fef47fe-93c4-4e66-a1a6-5f9910a6553c.jpg?e=webp&cX=0&cY=1&cW=948&cH=535"
            alt=""
          />
        </di>
      </div>
    </div>
  );
};

export default Contact;
