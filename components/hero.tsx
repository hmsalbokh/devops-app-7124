import { QrCode, Smartphone, CreditCard } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-100 text-brand-700 font-medium text-sm mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
          </span>
          النظام الأحدث لإدارة المطاعم
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
          حوّل مطعمك إلى تجربة <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-teal-500">
            رقمية ذكية متكاملة
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          دع عملاءك يختارون طاولاتهم، يمسحون الـ QR، يطلبون طعامهم المفضل، ويدفعون بكل سهولة، بينما يركز فريقك على تقديم أفضل خدمة.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="w-full sm:w-auto px-8 py-4 bg-brand-600 text-white rounded-xl font-bold shadow-lg shadow-brand-200 hover:shadow-xl hover:bg-brand-700 transition-all transform hover:-translate-y-1">
            تجربة النظام (Demo)
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all">
            مشاهدة الفيديو
          </button>
        </div>

        {/* Floating Icons Visualization */}
        <div className="relative max-w-4xl mx-auto p-8 bg-white border border-slate-200 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                    <Smartphone size={32} />
                </div>
                <p className="font-bold text-slate-800">اختر الطاولة</p>
            </div>
            <div className="h-1 w-12 bg-slate-200 hidden md:block"></div>
            <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center">
                    <QrCode size={32} />
                </div>
                <p className="font-bold text-slate-800">امسح الـ QR</p>
            </div>
            <div className="h-1 w-12 bg-slate-200 hidden md:block"></div>
            <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center">
                    <CreditCard size={32} />
                </div>
                <p className="font-bold text-slate-800">اطلب وادفع</p>
            </div>
        </div>
      </div>
    </section>
  );
}