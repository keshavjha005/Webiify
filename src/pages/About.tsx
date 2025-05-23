
import { AnimatedText } from "@/components/AnimatedText";

export default function About() {

  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 -z-10"></div>
        
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-webiify-purple animate-fade-in font-medium mb-4">About Us</p>
            <AnimatedText 
              text="We Turn Your Vision Into Reality" 
              element="h1" 
              className="text-3xl md:text-5xl font-bold mb-6"
              gradient="default"
              animation="fade"
            />
            <p className="text-foreground/80 text-lg animate-fade-in animate-delay-100">
              Discover the story behind webiify and our mission to create exceptional digital experiences.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-fade-in">
              <p className="text-webiify-blue font-medium mb-4">Our Story</p>
              <h2 className="text-2xl md:text-4xl font-bold mb-6">
                From a Small Idea to a <span className="text-gradient">Digital Powerhouse</span>
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  webiify was founded with a simple yet powerful belief: that every business deserves an exceptional digital presence, regardless of size or industry.
                </p>
                <p>
                  What started as a small team of passionate developers has grown into a full-service web development agency with a reputation for excellence, innovation, and reliability.
                </p>
                <p>
                  Our journey has been defined by our commitment to our clients' success. We understand that your website is more than just a digital asset—it's the face of your business in the online world.
                </p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative animate-fade-in animate-delay-100">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                  alt="Our Team Working" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-webiify-blue to-webiify-purple rounded-2xl blur-3xl opacity-20 -z-10"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Values Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-webiify-purple font-medium mb-4 animate-fade-in">Our Mission & Values</p>
            <AnimatedText 
              text="What Drives Us Forward" 
              element="h2" 
              className="text-2xl md:text-4xl font-bold mb-6"
              gradient="default"
              animation="fade"
            />
            <p className="text-foreground/80 animate-fade-in animate-delay-100">
              At the heart of webiify are core values that guide every project we undertake and every line of code we write.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "We stay at the forefront of web technology, constantly exploring new tools and techniques to deliver cutting-edge solutions.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-webiify-blue mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                delay: 0
              },
              {
                title: "Excellence",
                description: "We are committed to delivering work of the highest quality, with attention to detail and a focus on exceeding expectations.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-webiify-purple mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
                delay: 100
              },
              {
                title: "Client Partnership",
                description: "We believe in true collaboration, working alongside our clients to understand their needs and achieve their goals.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-webiify-green mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
                delay: 200
              },
              {
                title: "Reliability",
                description: "We deliver on our promises, meeting deadlines and staying within budget while maintaining the highest standards.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-webiify-blue mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                delay: 300
              },
              {
                title: "Integrity",
                description: "We operate with transparency and honesty in all our interactions, building trust with our clients and partners.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-webiify-purple mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                delay: 400
              },
              {
                title: "Continuous Growth",
                description: "We are committed to learning and improvement, constantly expanding our skills and knowledge base.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-webiify-green mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
                delay: 500
              },
            ].map((value, index) => (
              <div 
                key={index} 
                className={`bg-white dark:bg-gray-900 p-8 rounded-xl text-center card-hover animate-fade-in animate-delay-${value.delay}`}
              >
                <div className="flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-foreground/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Clients" },
              { number: "100+", label: "Projects" },
              { number: "2+", label: "Years" },
              { number: "10", label: "Team Members" },
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in animate-delay-100">
                <p className="text-3xl md:text-5xl font-bold text-gradient mb-2">{stat.number}</p>
                <p className="text-foreground/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
