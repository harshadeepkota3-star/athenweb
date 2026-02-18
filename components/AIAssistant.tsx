
import React, { useState, useRef, useEffect } from 'react';
import { askAurelia } from '../services/geminiService';
import { AthenWebLogo } from '../constants';

interface Message {
  role: 'user' | 'assistant';
  text: string;
}

interface AIAssistantProps {
  onClose: () => void;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', text: "Neural uplink established. I am Athen AI. How shall we evolve your project today?" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const response = await askAurelia(userMsg);
    setMessages(prev => [...prev, { role: 'assistant', text: response || "Node timeout." }]);
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
      <div className="w-full max-w-xl bg-[#0a0a0a] border border-[#00ead3]/20 rounded-3xl overflow-hidden flex flex-col shadow-[0_0_100px_rgba(0,234,211,0.1)] animate-in fade-in zoom-in duration-300">
        
        <div className="p-6 bg-[#111] border-b border-white/5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <AthenWebLogo className="w-10 h-10" />
            <div>
              <h3 className="text-white font-black text-sm uppercase tracking-widest">Athen AI Node</h3>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-[#00ead3] rounded-full animate-pulse shadow-[0_0_10px_#00ead3]"></span>
                <span className="text-[10px] text-[#00ead3] font-black uppercase tracking-widest">Uplink Active</span>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="text-white/30 hover:text-white transition-colors p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-6 min-h-[450px]">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-5 rounded-2xl text-sm leading-relaxed border ${
                msg.role === 'user' 
                ? 'bg-[#00ead3] text-black font-black border-[#00ead3] rounded-tr-none' 
                : 'bg-white/5 text-white border-white/10 rounded-tl-none'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-white/5 p-5 rounded-2xl animate-pulse">
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-[#00ead3] rounded-full"></div>
                  <div className="w-2 h-2 bg-[#00ead3] rounded-full"></div>
                  <div className="w-2 h-2 bg-[#00ead3] rounded-full"></div>
                </div>
              </div>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="p-8 border-t border-white/5">
          <div className="relative flex items-center">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Query node..."
              className="w-full bg-[#111] border border-white/10 rounded-full px-8 py-4 text-white text-sm focus:outline-none focus:border-[#00ead3] transition-all placeholder:text-white/10"
            />
            <button 
              type="submit"
              disabled={loading}
              className="absolute right-3 bg-[#00ead3] text-black p-3 rounded-full hover:scale-110 active:scale-95 transition-transform disabled:opacity-50 shadow-[0_0_20px_rgba(0,234,211,0.3)]"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AIAssistant;
