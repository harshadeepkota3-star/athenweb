
import React from 'react';
import { ArrowIcon } from '../constants';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    // You can get your Access Key from web3forms.com (it's free)
    formData.append("access_key", "72d81713-8ed2-469a-87d1-1d79ab393ad7");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.message || "Uplink failure. Please try again.");
      }
    } catch (err) {
      setError("Neutral connection lost. Please check your network.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="bg-[#111111] py-10 px-6 md:px-12 min-h-[calc(100vh-5rem)] flex items-center justify-center">
        <div className="text-center animate-in fade-in zoom-in duration-500">
          <div className="w-20 h-20 bg-neon rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(0,234,211,0.5)]">
            <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">Message Synced.</h2>
          <p className="text-white/50 text-lg max-w-md mx-auto">Your inquiry has been uploaded to our servers. Our architects will review it and get back to you shortly.</p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-8 text-neon font-black uppercase text-sm tracking-widest hover:underline"
          >
            Send another message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#111111] py-10 px-6 md:px-12 min-h-[calc(100vh-5rem)] flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 w-full max-w-7xl mx-auto">

        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-3 h-3 bg-neon rotate-45"></span>
            <span className="text-xs font-bold uppercase text-white/50 tracking-[0.3em]" style={{ fontFamily: "'Inter', sans-serif" }}>GET IN TOUCH</span>
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.85] tracking-tighter uppercase mb-8">
            LET'S <br /> BUILD <br /> <span className="text-outline italic">FUTURE.</span>
          </h2>

          <div className="space-y-8">
            <div>
              <h4 className="text-neon text-xs font-bold uppercase tracking-widest mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>Email Us</h4>
              <p className="text-white text-2xl font-bold tracking-tighter hover:text-neon transition-colors cursor-pointer underline underline-offset-8">athenwebservices@gmail.com</p>
            </div>
            <div>
              <h4 className="text-neon text-xs font-bold uppercase tracking-widest mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>Socials</h4>
              <div className="flex flex-wrap gap-6 text-white font-bold uppercase text-sm">
                <a href="https://www.instagram.com/athenwebservices?igsh=MXZiMmNqa2M1eGlvZQ==" target="_blank" rel="noopener noreferrer" className="hover:text-neon transition-colors text-xs whitespace-nowrap">Instagram</a>
                <a href="https://www.facebook.com/profile.php?id=61576352673682" target="_blank" rel="noopener noreferrer" className="hover:text-neon transition-colors text-xs whitespace-nowrap">Facebook</a>
                <a href="https://wa.me/917671855226" target="_blank" rel="noopener noreferrer" className="hover:text-neon transition-colors text-xs whitespace-nowrap">WhatsApp</a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#1c1c1c] p-6 md:p-10 border border-white/5 rounded-2xl flex flex-col justify-center">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-[10px] font-semibold text-white/30 uppercase tracking-[0.3em]" style={{ fontFamily: "'Inter', sans-serif" }}>Full Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="JOHN DOE"
                className="w-full bg-transparent border-b-2 border-white/10 py-3 text-white font-black text-lg focus:outline-none focus:border-neon transition-colors placeholder:text-white/5"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-semibold text-white/30 uppercase tracking-[0.3em]" style={{ fontFamily: "'Inter', sans-serif" }}>Email Address</label>
              <input
                type="email"
                name="email"
                required
                placeholder="YOUR@EMAIL.COM"
                className="w-full bg-transparent border-b-2 border-white/10 py-3 text-white font-black text-lg focus:outline-none focus:border-neon transition-colors placeholder:text-white/5"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-semibold text-white/30 uppercase tracking-[0.3em]" style={{ fontFamily: "'Inter', sans-serif" }}>Tell us about your project</label>
              <textarea
                name="message"
                required
                rows={3}
                placeholder="WHATS ON YOUR MIND?"
                className="w-full bg-transparent border-b-2 border-white/10 py-3 text-white font-black text-lg focus:outline-none focus:border-neon transition-colors placeholder:text-white/5 resize-none"
              ></textarea>
            </div>

            {error && <p className="text-red-500 text-xs font-bold uppercase tracking-widest">{error}</p>}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-5 bg-neon text-black font-black uppercase text-lg rounded-full flex items-center justify-center gap-3 hover:bg-white transition-colors group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'UPLOADING...' : 'SEND MESSAGE'}
              <span className="group-hover:translate-x-4 transition-transform"><ArrowIcon /></span>
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
