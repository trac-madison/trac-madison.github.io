import Calendar from "./calendar-wrapper";

export default function Join() {
  return (
    <section className="text-gray-600 body-font flex flex-grow">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img className="object-cover object-center rounded" alt="hero" src="/ftp.jpg"/>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font font-bold sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Get Involved!
          </h1>
          <p className="mb-8 leading-relaxed">
            TRAC's general membership meeting is on the 3rd Saturday of every month at the
            Madison Central Branch library. Come meet us there, or send us a message on 
            {" "}<a className="text-emerald-700 hover:text-emerald-800" href="https://www.instagram.com/madisontrac/">Instagram</a>{" "}
            to get in contact sooner!
          </p>
          <h1 className="title-font font-bold sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Events Calendar
          </h1>
          <Calendar/>
        </div>
      </div>
    </section>
  )
}