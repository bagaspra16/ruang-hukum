'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import {
  Send,
  Scale,
  BookOpen,
  FileText,
  Briefcase,
  Users,
  Home,
  Gavel,
  Sparkles,
  ChevronDown,
  Copy,
  Check,
  RotateCcw,
  Trash2,
  MessageSquare,
  Plus,
  Bot,
  User,
} from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

// ─── Types ────────────────────────────────────────────────────────────────────

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface SuggestedPrompt {
  icon: React.ElementType;
  label: string;
  prompt: string;
  category: string;
}

// ─── Copy / i18n ──────────────────────────────────────────────────────────────

const copy = {
  id: {
    title: 'Lex AI',
    subtitle: 'Asisten Hukum Indonesia',
    tagline: 'Tanyakan apa saja tentang hukum Indonesia',
    placeholder: 'Tanyakan pertanyaan hukum...',
    send: 'Kirim',
    thinking: 'Lex sedang berpikir...',
    newChat: 'Percakapan Baru',
    clearChat: 'Hapus Percakapan',
    copy: 'Salin',
    copied: 'Disalin!',
    disclaimer: 'Lex AI memberikan informasi hukum umum, bukan nasihat hukum profesional. Untuk kasus spesifik, konsultasikan dengan advokat berlisensi.',
    suggestedTitle: 'Pertanyaan Populer',
    welcomeTitle: 'Halo! Saya Lex 👋',
    welcomeDesc: 'Asisten AI hukum Indonesia Anda. Saya siap membantu menjawab pertanyaan hukum — dari hukum perdata, pidana, bisnis, ketenagakerjaan, hingga hukum tata negara.',
    errorMsg: 'Maaf, terjadi kesalahan. Silakan coba lagi.',
    categories: 'Kategori',
    all: 'Semua',
  },
  en: {
    title: 'Lex AI',
    subtitle: 'Indonesian Law Assistant',
    tagline: 'Ask anything about Indonesian law',
    placeholder: 'Ask a legal question...',
    send: 'Send',
    thinking: 'Lex is thinking...',
    newChat: 'New Chat',
    clearChat: 'Clear Chat',
    copy: 'Copy',
    copied: 'Copied!',
    disclaimer: 'Lex AI provides general legal information, not professional legal advice. For specific cases, consult a licensed attorney.',
    suggestedTitle: 'Popular Questions',
    welcomeTitle: 'Hello! I\'m Lex 👋',
    welcomeDesc: 'Your Indonesian law AI assistant. I\'m ready to answer your legal questions — covering civil law, criminal law, business, employment, and constitutional law.',
    errorMsg: 'Sorry, an error occurred. Please try again.',
    categories: 'Categories',
    all: 'All',
  },
};

// ─── Suggested Prompts ────────────────────────────────────────────────────────

const suggestedPrompts: SuggestedPrompt[] = [
  {
    icon: Briefcase,
    label: 'Pendirian PT',
    prompt: 'Apa saja syarat dan prosedur mendirikan PT (Perseroan Terbatas) di Indonesia setelah UU Cipta Kerja? Sebutkan dasar hukum, modal minimum, dan kewajiban hukumnya.',
    category: 'bisnis',
  },
  {
    icon: Briefcase,
    label: 'Kepailitan & PKPU',
    prompt: 'Apa perbedaan antara Kepailitan dan PKPU (Penundaan Kewajiban Pembayaran Utang)? Bagaimana prosedurnya berdasarkan UU No. 37/2004?',
    category: 'bisnis',
  },
  {
    icon: Users,
    label: 'PHK & Pesangon',
    prompt: 'Bagaimana aturan PHK dan perhitungan pesangon berdasarkan PP No. 35/2021 (turunan UU Cipta Kerja)? Apa saja hak pekerja yang di-PHK sepihak?',
    category: 'ketenagakerjaan',
  },
  {
    icon: Users,
    label: 'PKWT vs PKWTT',
    prompt: 'Apa perbedaan hukum antara PKWT (kontrak) dan PKWTT (tetap)? Kapan PKWT bisa diubah menjadi PKWTT demi hukum berdasarkan PP No. 35/2021?',
    category: 'ketenagakerjaan',
  },
  {
    icon: Home,
    label: 'HM, HGB & HGU',
    prompt: 'Apa perbedaan Hak Milik, HGB, dan HGU berdasarkan UUPA No. 5/1960 dan PP No. 18/2021? Siapa yang bisa memiliki masing-masing hak tersebut?',
    category: 'pertanahan',
  },
  {
    icon: Home,
    label: 'Sengketa Tanah',
    prompt: 'Bagaimana prosedur penyelesaian sengketa tanah di Indonesia? Apa saja jalur yang tersedia: mediasi BPN, gugatan perdata, atau PTUN?',
    category: 'pertanahan',
  },
  {
    icon: Gavel,
    label: 'KUHP Baru 2026',
    prompt: 'Apa saja perubahan penting dalam KUHP baru (UU No. 1/2023) yang berlaku mulai 2 Januari 2026? Apa perbedaannya dengan KUHP lama (WvS)?',
    category: 'pidana',
  },
  {
    icon: Gavel,
    label: 'Praperadilan',
    prompt: 'Apa yang dimaksud dengan praperadilan dalam KUHAP? Apa saja objek praperadilan dan bagaimana prosedur pengajuannya?',
    category: 'pidana',
  },
  {
    icon: FileText,
    label: 'Syarat Sah Kontrak',
    prompt: 'Jelaskan 4 syarat sahnya perjanjian berdasarkan Pasal 1320 KUHPerdata. Apa akibat hukum jika salah satu syarat tidak terpenuhi (batal demi hukum vs. dapat dibatalkan)?',
    category: 'perdata',
  },
  {
    icon: FileText,
    label: 'Wanprestasi & PMH',
    prompt: 'Apa perbedaan antara Wanprestasi (Pasal 1243 KUHPerdata) dan Perbuatan Melawan Hukum/PMH (Pasal 1365 KUHPerdata)? Bagaimana cara menuntut ganti rugi masing-masing?',
    category: 'perdata',
  },
  {
    icon: BookOpen,
    label: 'Hukum Waris',
    prompt: 'Bagaimana sistem hukum waris di Indonesia? Jelaskan perbedaan antara waris BW (KUHPerdata), waris Islam (KHI), dan waris adat beserta dasar hukumnya.',
    category: 'perdata',
  },
  {
    icon: Scale,
    label: 'Gugatan Perdata',
    prompt: 'Bagaimana prosedur lengkap mengajukan gugatan perdata di Pengadilan Negeri? Jelaskan dari tahap pendaftaran, mediasi wajib (PERMA No. 1/2016), persidangan, hingga putusan.',
    category: 'acara',
  },
  {
    icon: Scale,
    label: 'Judicial Review MK',
    prompt: 'Bagaimana prosedur pengujian undang-undang (judicial review) di Mahkamah Konstitusi? Siapa yang berhak mengajukan dan apa syarat legal standing-nya?',
    category: 'tata-negara',
  },
  {
    icon: Sparkles,
    label: 'UU ITE Revisi 2024',
    prompt: 'Apa saja perubahan dalam UU ITE No. 1/2024 (revisi terbaru)? Bagaimana perubahan Pasal 27 tentang pencemaran nama baik dan apa sanksi pidananya?',
    category: 'siber',
  },
  {
    icon: Sparkles,
    label: 'Perlindungan Konsumen',
    prompt: 'Apa hak-hak konsumen berdasarkan UU No. 8/1999? Bagaimana mekanisme pengaduan ke BPSK dan apa bedanya dengan gugatan ke pengadilan?',
    category: 'konsumen',
  },
  {
    icon: BookOpen,
    label: 'Hak Cipta & Paten',
    prompt: 'Apa perbedaan antara Hak Cipta (UU No. 28/2014) dan Paten (UU No. 13/2016) di Indonesia? Kapan perlindungan mulai berlaku dan berapa lama masa perlindungannya?',
    category: 'hki',
  },
];


// ─── Markdown-like Renderer ───────────────────────────────────────────────────

function renderMarkdown(text: string): React.ReactNode {
  const lines = text.split('\n');
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // H1
    if (line.startsWith('# ')) {
      elements.push(
        <h1 key={i} className="text-xl font-bold font-serif text-[#3e0b0b] mt-4 mb-2 border-b border-[#7a1c1c]/20 pb-1">
          {processInline(line.slice(2))}
        </h1>
      );
    }
    // H2
    else if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="text-base font-bold font-serif text-[#3e0b0b] mt-3 mb-1.5">
          {processInline(line.slice(3))}
        </h2>
      );
    }
    // H3
    else if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} className="text-sm font-bold text-gray-800 mt-2 mb-1">
          {processInline(line.slice(4))}
        </h3>
      );
    }
    // Unordered list
    else if (line.match(/^[-*•]\s/)) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].match(/^[-*•]\s/)) {
        listItems.push(lines[i].replace(/^[-*•]\s/, ''));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="my-2 space-y-1">
          {listItems.map((item, j) => (
            <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#7a1c1c] shrink-0" />
              <span>{processInline(item)}</span>
            </li>
          ))}
        </ul>
      );
      continue;
    }
    // Ordered list
    else if (line.match(/^\d+\.\s/)) {
      const listItems: { num: string; text: string }[] = [];
      while (i < lines.length && lines[i].match(/^\d+\.\s/)) {
        const match = lines[i].match(/^(\d+)\.\s(.+)/);
        if (match) listItems.push({ num: match[1], text: match[2] });
        i++;
      }
      elements.push(
        <ol key={`ol-${i}`} className="my-2 space-y-1.5">
          {listItems.map((item, j) => (
            <li key={j} className="flex items-start gap-2.5 text-sm text-gray-700">
              <span className="shrink-0 w-5 h-5 rounded-full bg-[#7a1c1c] text-white text-[10px] font-bold flex items-center justify-center mt-0.5">
                {item.num}
              </span>
              <span>{processInline(item.text)}</span>
            </li>
          ))}
        </ol>
      );
      continue;
    }
    // Blockquote
    else if (line.startsWith('> ')) {
      elements.push(
        <blockquote key={i} className="border-l-3 border-[#7a1c1c] pl-3 my-2 text-sm text-gray-600 italic bg-[#7a1c1c]/5 py-1 rounded-r-lg">
          {processInline(line.slice(2))}
        </blockquote>
      );
    }
    // Horizontal rule
    else if (line.match(/^---+$/)) {
      elements.push(<hr key={i} className="my-3 border-gray-200" />);
    }
    // Empty line
    else if (line.trim() === '') {
      elements.push(<div key={i} className="h-1" />);
    }
    // Normal paragraph
    else {
      elements.push(
        <p key={i} className="text-sm text-gray-700 leading-relaxed">
          {processInline(line)}
        </p>
      );
    }
    i++;
  }

  return <div className="space-y-0.5">{elements}</div>;
}

function processInline(text: string): React.ReactNode {
  // Bold **text**
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="font-semibold text-gray-900">{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={i} className="italic">{part.slice(1, -1)}</em>;
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code key={i} className="bg-[#7a1c1c]/10 text-[#7a1c1c] text-xs px-1.5 py-0.5 rounded font-mono">
          {part.slice(1, -1)}
        </code>
      );
    }
    return part;
  });
}

// ─── Chat Bubble ──────────────────────────────────────────────────────────────

function ChatBubble({ message, onCopy }: { message: Message; onCopy: (text: string) => void }) {
  const isUser = message.role === 'user';
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    onCopy(message.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`flex gap-3 group ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
      {/* Avatar */}
      <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center shadow-sm ${
        isUser ? 'bg-[#7a1c1c] text-white' : 'bg-gradient-to-br from-[#d4af37] to-[#b8941e] text-white'
      }`}>
        {isUser ? <User size={14} /> : <Scale size={14} />}
      </div>

      {/* Bubble */}
      <div className={`max-w-[80%] relative ${isUser ? 'items-end' : 'items-start'} flex flex-col gap-1`}>
        <div className={`px-4 py-3 rounded-2xl shadow-xs ${
          isUser
            ? 'bg-[#7a1c1c] text-white rounded-tr-sm'
            : 'bg-white border border-gray-100 rounded-tl-sm'
        }`}>
          {isUser ? (
            <p className="text-sm leading-relaxed text-white">{message.content}</p>
          ) : (
            <div className="prose-sm">{renderMarkdown(message.content)}</div>
          )}
        </div>

        {/* Actions */}
        <div className={`flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity ${isUser ? 'flex-row-reverse' : ''}`}>
          <span className="text-[10px] text-gray-400">
            {message.timestamp.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}
          </span>
          {!isUser && (
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 text-[10px] text-gray-400 hover:text-[#7a1c1c] transition-colors px-1.5 py-0.5 rounded hover:bg-gray-100"
            >
              {copied ? <Check size={10} /> : <Copy size={10} />}
              <span>{copied ? 'Disalin' : 'Salin'}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Typing Indicator ─────────────────────────────────────────────────────────

function TypingIndicator() {
  return (
    <div className="flex gap-3">
      <div className="shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#d4af37] to-[#b8941e] text-white flex items-center justify-center shadow-sm">
        <Scale size={14} />
      </div>
      <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 shadow-xs">
        <div className="flex gap-1.5 items-center h-4">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-[#7a1c1c]/40"
              style={{ animation: `bounce 1.4s ease-in-out ${i * 0.2}s infinite` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function LexAIPage() {
  const { lang } = useLanguage();
  const t = copy[lang] ?? copy.id;

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [streamingContent, setStreamingContent] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState<{ id: string; title: string; date: Date }[]>([]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, streamingContent, scrollToBottom]);

  // Auto-resize textarea
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = `${Math.min(inputRef.current.scrollHeight, 120)}px`;
    }
  }, [input]);

  const handleSend = async (text?: string) => {
    const content = text ?? input.trim();
    if (!content || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setStreamingContent('');

    const allMessages = [...messages, userMessage];

    // Save to chat history (first message = title)
    if (messages.length === 0) {
      setChatHistory((prev) => [
        { id: Date.now().toString(), title: content.slice(0, 50), date: new Date() },
        ...prev,
      ]);
    }

    abortControllerRef.current = new AbortController();

    try {
      const response = await fetch('/api/lex-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: allMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
        signal: abortControllerRef.current.signal,
      });

      if (!response.ok) {
        const errorJson = await response.json().catch(() => null);
        console.error('Lex AI API error response:', errorJson);
        const errMsg = errorJson?.error === 'Groq API key not configured'
          ? (lang === 'id' ? 'Kunci Groq API belum dikonfigurasi di server.' : 'Groq API key is not configured on server.')
          : t.errorMsg;
        throw new Error(errMsg);
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let accumulated = '';

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value, { stream: true });
          const lines = chunk.split('\n');

          for (const line of lines) {
            if (line.startsWith('data: ')) {
              const data = line.slice(6);
              if (data === '[DONE]') continue;
              try {
                const parsed = JSON.parse(data);
                const delta = parsed.choices?.[0]?.delta?.content;
                if (delta) {
                  accumulated += delta;
                  setStreamingContent(accumulated);
                }
              } catch {
                // skip malformed JSON
              }
            }
          }
        }
      }

      if (!accumulated.trim()) {
        throw new Error(t.errorMsg);
      }

      // Finalize message
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: accumulated,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setStreamingContent('');
    } catch (error: unknown) {
      if (error instanceof Error && error.name === 'AbortError') return;
      const messageText = error instanceof Error && error.message ? error.message : t.errorMsg;
      const errMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: messageText,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errMessage]);
      setStreamingContent('');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleClearChat = () => {
    setMessages([]);
    setStreamingContent('');
    abortControllerRef.current?.abort();
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).catch(() => {});
  };

  const categories = [
    { id: 'all', label: 'Semua' },
    { id: 'bisnis', label: 'Bisnis' },
    { id: 'ketenagakerjaan', label: 'Tenaga Kerja' },
    { id: 'perdata', label: 'Perdata' },
    { id: 'pidana', label: 'Pidana' },
    { id: 'pertanahan', label: 'Pertanahan' },
    { id: 'acara', label: 'Hukum Acara' },
    { id: 'tata-negara', label: 'Tata Negara' },
    { id: 'siber', label: 'Siber & ITE' },
    { id: 'hki', label: 'HKI' },
    { id: 'konsumen', label: 'Konsumen' },
  ];


  const filteredPrompts = selectedCategory === 'all'
    ? suggestedPrompts
    : suggestedPrompts.filter((p) => p.category === selectedCategory);

  const showWelcome = messages.length === 0 && !isLoading;

  return (
    <div className="min-h-screen bg-[#f9f5ef] flex flex-col">
      <Navbar />

      {/* Page Shell */}
      <div className="flex-1 flex overflow-hidden" style={{ height: 'calc(100vh - 64px)' }}>

        {/* ── Left Sidebar ── */}
        <aside className={`
          flex-col bg-white border-r border-gray-100 shadow-xs transition-all duration-300 z-10
          hidden lg:flex w-64
        `}>
          {/* Lex Brand Header */}
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#7a1c1c] to-[#4a0e0e] flex items-center justify-center shadow-sm">
                <Scale size={17} className="text-[#d4af37]" />
              </div>
              <div>
                <h2 className="font-cinzel font-bold text-[#3e0b0b] text-base leading-none">LEX AI</h2>
                <p className="text-gray-400 text-[10px] mt-0.5">Powered by Ruang Hukum</p>
              </div>
            </div>

            <button
              onClick={handleClearChat}
              className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl border border-[#7a1c1c]/30 text-[#7a1c1c] hover:bg-[#7a1c1c]/5 text-xs font-semibold transition-colors"
            >
              <Plus size={14} />
              {t.newChat}
            </button>
          </div>

          {/* Chat History */}
          <div className="flex-1 overflow-y-auto p-3">
            {chatHistory.length > 0 ? (
              <div className="space-y-1">
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider px-2 mb-2">Riwayat</p>
                {chatHistory.map((chat) => (
                  <button
                    key={chat.id}
                    className="w-full text-left flex items-start gap-2 px-2.5 py-2 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <MessageSquare size={13} className="text-gray-400 mt-0.5 shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs text-gray-700 font-medium truncate">{chat.title}</p>
                      <p className="text-[10px] text-gray-400">
                        {chat.date.toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-32 text-center">
                <MessageSquare size={24} className="text-gray-200 mb-2" />
                <p className="text-xs text-gray-400">Belum ada riwayat percakapan</p>
              </div>
            )}
          </div>

          {/* Disclaimer */}
          <div className="p-3 border-t border-gray-100">
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-3">
              <p className="text-[10px] text-amber-700 leading-relaxed">
                ⚠️ {t.disclaimer}
              </p>
            </div>
          </div>
        </aside>

        {/* ── Main Chat Area ── */}
        <main className="flex-1 flex flex-col overflow-hidden">

          {/* Chat Header */}
          <div className="bg-white border-b border-gray-100 px-4 sm:px-6 py-3 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              {/* Mobile: Lex brand */}
              <div className="flex items-center gap-2.5 lg:hidden">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#7a1c1c] to-[#4a0e0e] flex items-center justify-center shadow-sm">
                  <Scale size={15} className="text-[#d4af37]" />
                </div>
                <div>
                  <h1 className="font-cinzel font-bold text-[#3e0b0b] text-sm leading-none">LEX AI</h1>
                  <p className="text-gray-400 text-[10px]">Asisten Hukum Indonesia</p>
                </div>
              </div>
              {/* Desktop */}
              <div className="hidden lg:block">
                <h1 className="font-cinzel font-bold text-[#3e0b0b] text-base">Lex AI — Asisten Hukum Indonesia</h1>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <p className="text-[11px] text-gray-400">Online · Siap membantu</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {messages.length > 0 && (
                <button
                  onClick={handleClearChat}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 text-gray-500 hover:bg-red-50 hover:text-red-600 hover:border-red-200 text-xs font-medium transition-colors"
                >
                  <Trash2 size={13} />
                  <span className="hidden sm:inline">{t.clearChat}</span>
                </button>
              )}
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-6 space-y-5">

            {/* Welcome Screen */}
            {showWelcome && (
              <div className="max-w-2xl mx-auto">
                {/* Hero */}
                <div className="text-center mb-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#7a1c1c] to-[#4a0e0e] flex items-center justify-center shadow-lg relative">
                    <Scale size={36} className="text-[#d4af37]" />
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                      <span className="text-white text-[8px]">✓</span>
                    </div>
                  </div>
                  <h2 className="font-cinzel font-bold text-[#3e0b0b] text-2xl mb-1">{t.welcomeTitle}</h2>
                  <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">{t.welcomeDesc}</p>
                </div>

                {/* Capability pills */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {[
                    'Hukum Perdata', 'Hukum Pidana', 'Hukum Bisnis', 'Ketenagakerjaan',
                    'Hukum Tanah', 'HKI', 'Hukum Acara', 'Tata Negara',
                    'Siber & ITE', 'Perpajakan', 'Perlindungan Konsumen', 'Kepailitan',
                  ].map((cap) => (
                    <span key={cap} className="px-3 py-1 bg-white border border-gray-200 text-gray-600 text-xs rounded-full font-medium shadow-xs">
                      {cap}
                    </span>
                  ))}
                </div>

                {/* Category filter */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                          selectedCategory === cat.id
                            ? 'bg-[#7a1c1c] text-white shadow-sm'
                            : 'bg-white text-gray-500 border border-gray-200 hover:border-[#7a1c1c]/30 hover:text-[#7a1c1c]'
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Suggested prompts grid */}
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">{t.suggestedTitle}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {filteredPrompts.map((prompt, i) => {
                      const Icon = prompt.icon;
                      return (
                        <button
                          key={i}
                          onClick={() => handleSend(prompt.prompt)}
                          className="group flex items-start gap-3 p-3.5 bg-white border border-gray-100 hover:border-[#7a1c1c]/30 hover:shadow-sm rounded-xl text-left transition-all hover:bg-[#7a1c1c]/2"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#7a1c1c]/10 group-hover:bg-[#7a1c1c]/15 flex items-center justify-center shrink-0 transition-colors">
                            <Icon size={15} className="text-[#7a1c1c]" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-xs font-semibold text-[#7a1c1c] mb-0.5">{prompt.label}</p>
                            <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{prompt.prompt}</p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Messages */}
            {messages.map((message) => (
              <div key={message.id} className="max-w-3xl mx-auto w-full animate-fadeIn">
                <ChatBubble message={message} onCopy={copyToClipboard} />
              </div>
            ))}

            {/* Streaming message */}
            {streamingContent && (
              <div className="max-w-3xl mx-auto w-full animate-fadeIn">
                <div className="flex gap-3">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#d4af37] to-[#b8941e] text-white flex items-center justify-center shadow-sm">
                    <Scale size={14} />
                  </div>
                  <div className="max-w-[80%] bg-white border border-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 shadow-xs">
                    <div className="prose-sm">{renderMarkdown(streamingContent)}</div>
                    <span className="inline-block w-0.5 h-4 bg-[#7a1c1c] animate-pulse ml-0.5 align-text-bottom" />
                  </div>
                </div>
              </div>
            )}

            {/* Typing indicator */}
            {isLoading && !streamingContent && (
              <div className="max-w-3xl mx-auto w-full">
                <TypingIndicator />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* ── Input Area ── */}
          <div className="bg-white border-t border-gray-100 px-4 sm:px-6 py-4 shrink-0">
            <div className="max-w-3xl mx-auto">
              {/* Quick prompts row (after chat started) */}
              {messages.length > 0 && messages.length < 3 && (
                <div className="flex gap-2 mb-3 overflow-x-auto pb-1 no-scrollbar">
                  {suggestedPrompts.slice(0, 4).map((p, i) => (
                    <button
                      key={i}
                      onClick={() => handleSend(p.prompt)}
                      className="shrink-0 px-3 py-1.5 bg-gray-50 border border-gray-200 text-gray-600 text-xs rounded-full hover:border-[#7a1c1c]/30 hover:text-[#7a1c1c] transition-all"
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              )}

              <div className="flex gap-3 items-end">
                <div className="flex-1 relative">
                  <textarea
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={t.placeholder}
                    rows={1}
                    className="w-full resize-none border border-gray-200 rounded-2xl px-4 py-3 pr-12 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#7a1c1c] focus:ring-2 focus:ring-[#7a1c1c]/10 transition-all bg-gray-50/50 focus:bg-white overflow-hidden leading-relaxed"
                    style={{ maxHeight: '120px' }}
                    disabled={isLoading}
                  />
                  {/* Char hint */}
                  <span className="absolute right-3 bottom-3 text-[10px] text-gray-300">⏎</span>
                </div>

                <button
                  onClick={() => handleSend()}
                  disabled={!input.trim() || isLoading}
                  className="shrink-0 w-11 h-11 rounded-2xl bg-[#7a1c1c] hover:bg-[#631414] active:bg-[#520f0f] text-white flex items-center justify-center transition-all shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <RotateCcw size={16} className="animate-spin" />
                  ) : (
                    <Send size={16} />
                  )}
                </button>
              </div>

              <p className="text-[10px] text-gray-400 mt-2 text-center">
                {t.disclaimer}
              </p>
            </div>
          </div>
        </main>
      </div>

      {/* Bounce animation */}
      <style jsx global>{`
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-6px); }
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
