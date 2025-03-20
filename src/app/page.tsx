export default function Home() {
  return (
    <section className="text-gray-600 body-font flex flex-grow">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img className="object-cover object-center rounded" alt="hero" src="/pride-flag.jpg"/>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font font-bold sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Fighting for Trans Liberation!
          </h1>
          <p className="mb-8 leading-relaxed">
            <span className="font-bold font-geist-sans">Trans Resistance Action Committee</span> is fighting for the liberation of marginalized genders
            through action and community building. We seek to build a world where trans, non-binary, and gender-nonconforming people
            can safely and confidently live and thrive as their true, authentic selves; where the community, support, and resources
            that they need and want are easily accessible and reliable.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Get Involved!</button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Community Resources</button>
          </div>
        </div>
      </div>
    </section>
  );
}
