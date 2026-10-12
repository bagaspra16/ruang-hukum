import type { Metadata } from "next";
import { Inter, Poppins, Playfair_Display, Cinzel } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-playfair",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-cinzel",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ruang Hukum — Learn Law. Understand More.",
  description: "Ruang Hukum adalah platform belajar hukum interaktif untuk mahasiswa hukum dan pemula. Akses materi hukum terstruktur, kuis interaktif, dan konten dari para ahli.",
  keywords: ["hukum", "belajar hukum", "mahasiswa hukum", "ilmu hukum", "ruang hukum"],
  openGraph: {
    title: "Ruang Hukum — Learn Law. Understand More.",
    description: "Platform edukasi hukum interaktif untuk mahasiswa dan pemula.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        {/* Suppress unhandled errors and rejections from third-party browser extensions
            (such as Bitdefender: TypeError: Cannot read properties of undefined reading 'M_ID'
            from chrome-extension://eppiocemhmnlbhjplcgkofciiegomcon/executors/200.js)
            and strip injected DOM attributes (bis_skin_checked) before React hydrates. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){function isExt(e){if(!e)return false;var s=(e.stack||'')+(e.message||'')+(e.filename||'')+(e.reason?(e.reason.stack||'')+(e.reason.message||''):'');return s.indexOf('chrome-extension://')!==-1||s.indexOf('M_ID')!==-1;}window.addEventListener('unhandledrejection',function(e){if(isExt(e.reason)){e.preventDefault();e.stopImmediatePropagation();}},true);window.addEventListener('error',function(e){if(isExt(e.error)||(e.filename&&e.filename.indexOf('chrome-extension://')!==-1)||(e.message&&e.message.indexOf('M_ID')!==-1)){e.preventDefault();e.stopImmediatePropagation();}},true);var A='bis_skin_checked';function s(n){if(n.nodeType===1&&n.hasAttribute&&n.hasAttribute(A))n.removeAttribute(A);if(n.querySelectorAll){var l=n.querySelectorAll('['+A+']');for(var i=0;i<l.length;i++)l[i].removeAttribute(A);}}s(document);try{new MutationObserver(function(ms){for(var i=0;i<ms.length;i++){var m=ms[i];if(m.type==='attributes'&&m.attributeName===A&&m.target.hasAttribute(A))m.target.removeAttribute(A);else if(m.type==='childList'){for(var j=0;j<m.addedNodes.length;j++)s(m.addedNodes[j]);}}}).observe(document.documentElement,{subtree:true,attributes:true,attributeFilter:[A],childList:true});}catch(e){}})();`,
          }}
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} ${playfair.variable} ${cinzel.variable} antialiased`} suppressHydrationWarning>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
