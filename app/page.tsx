export const metadata = {
  title: "Homepage | Scholarship Gate",
  description: "Scholarship Gate - Unlocking global education opportunities abroad",
};

export default function Home() {
  return (
    <div className="font-sans bg-sky-50 min-h-screen">
      
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-4 bg-blue-900 text-white">
        <h2 className="text-xl font-bold">Scholarship Gate</h2>
        <ul className="flex gap-6">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#offer" className="hover:underline">What We Offer</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>

      {/* Header */}
      <header className="text-center py-16 bg-gradient-to-r from-blue-900 to-blue-500">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
          Welcome to Scholarship Gate
        </h1>
        <p className="text-sky-100 text-lg">
          Your trusted partner in unlocking global education opportunities.
        </p>
      </header>

      {/* About Section */}
      <section id="about" className="max-w-3xl mx-auto py-12 px-6">
        <h2 className="text-blue-900 text-2xl font-semibold mb-4">About Scholarship Gate</h2>
        <p className="text-slate-700 leading-relaxed">
          At Scholarship Gate, we connect students with the best <b>scholarship opportunities abroad </b> 
          tailored to their goals. Our mission is to make quality education accessible to everyone, 
          guiding you every step of the way from finding scholarships to securing <b>admission </b> 
          and visa support.
        </p>
      </section>

      {/* What We Offer */}
      <section id="offer" className="bg-sky-100 py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-blue-900 text-2xl font-semibold mb-4">What We Offer:</h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-2">
            <li>Latest international scholarship programs</li>
            <li>Step-by-step guidance for studying abroad</li>
            <li>Expert support throughout the application process</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="text-center py-6 mt-12 bg-blue-900 text-white">
        © {new Date().getFullYear()} Scholarship Gate. Helping students achieve their dreams abroad.
      </footer>
    </div>
  );
}
