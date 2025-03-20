export default function About() {
  return (
    <section className="text-gray-600 body-font flex flex-grow">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:w-1/3 md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img className="object-cover object-center rounded" alt="hero" src="/no-to-genocide.jpg"/>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font font-bold sm:text-4xl text-3xl mb-4 font-medium text-gray-900">About </h1>
          <p className="mb-8 leading-relaxed">
            <span className="font-bold font-geist-sans">Trans Resistance Action Committee</span>, founded in 2023, is an organization 
            made of community members who are willing to engage in direct action and community building to achieve their goals of
            liberation for those of marginalized genders, and therefore all people. Our purpose is to support our most
            marginalized members of our community, prioritizing their needs. We aim to create a loving, supportive, and safe
            space for trans, non-binary, and gender nonconforming people within our group and within the world.
          </p>
          <p className="mb-8 leading-relaxed">
            <span className="font-bold font-geist-sans">What does liberation mean to us?</span> <br/>
            Liberation, to us, means freedom from the oppressive systems under which we currently live - institutional racism,
            sexism, homophobia, transphobia, racism, and ableism. Our route to taking down these systems is through the 
            fight for all trans and gender nonconforming people's rights. All struggles are interconnected, the fight
            for trans liberation is the fight for all people's liberation from oppression.
          </p>

          <p className="mb-8 leading-relaxed">
            <span className="font-bold font-geist-sans">What does community mean to us?</span> <br/>
            We are against the archetype of the "Community organizer who isn't on speaking terms with their roommate".
            We believe that real change begins with how you treat the people closest to you, whether that be physically
            (roommates, neighbors, fellow workers), or emotionally (friends, partners, co-organizers).
          </p>


          <h1 className="title-font font-bold sm:text-4xl text-3xl mb-4 font-medium text-gray-900">FAQ</h1>
          <p className="mb-8 leading-relaxed">
            <span className="font-bold font-geist-sans">How can I get Involved?</span> <br/>
            TRAC's general membership meeting is on the 3rd Saturday of every month at the
            Madison Central Branch library. Come meet us there, or send us a message on 
            {" "}<a className="text-emerald-700 hover:text-emerald-800" href="https://www.instagram.com/madisontrac/">Instagram</a>{" "}
            to get in contact sooner!
          </p>
        </div>
      </div>
    </section>
  );
}
