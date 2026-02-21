import Link from "next/link";
import { Menu, UtensilsCrossed } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
              <UtensilsCrossed size={20} />
            </div>
            <span className="font-bold text-xl text-slate-800 tracking-tight">
              سمارت تيبل <span className="text-brand-600">كونكت</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            <Link href="#features" className="text-slate-600 hover:text-brand-600 transition-colors font-medium">
              المميزات
            </Link>
            <Link href="#how-it-works" className="text-slate-600 hover:text-brand-600 transition-colors font-medium">
              كيف يعمل؟
            </Link>
            <Link href="#pricing" className="text-slate-600 hover:text-brand-600 transition-colors font-medium">
              الأسعار
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <button className="hidden md:block px-4 py-2 text-brand-600 font-bold hover:bg-brand-50 rounded-lg transition-colors">
              دخول الموظفين
            </button>
            <button className="px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white rounded-xl shadow-md transition-all font-bold">
              ابدأ الآن مجاناً
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}