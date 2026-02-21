import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { 
  LayoutGrid, 
  ScanLine, 
  ChefHat, 
  CheckCircle2, 
  CreditCard,
  ArrowLeft
} from "lucide-react";

export default function Home() {
  const steps = [
    {
      icon: <LayoutGrid className="w-8 h-8 text-brand-600" />,
      title: "عرض الطاولات المتاحة",
      desc: "واجهة تفاعلية تعرض حالة الطاولات في الوقت الفعلي (متاحة، مشغولة، محجوزة)."
    },
    {
      icon: <ScanLine className="w-8 h-8 text-brand-600" />,
      title: "مسح رمز الاستجابة (QR)",
      desc: "عند جلوس العميل، يقوم بمسح الكود الموجود على الطاولة لفتح القائمة الخاصة بها."
    },
    {
      icon: <ChefHat className="w-8 h-8 text-brand-600" />,
      title: "تصفح القائمة والطلب",
      desc: "قائمة طعام رقمية جذابة بالصور والأسعار، تتيح للعميل اختيار طلباته وإرسالها للمطبخ."
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-brand-600" />,
      title: "قبول الطلب من الموظف",
      desc: "يصل إشعار فوري للكاشير أو النادل لمراجعة الطلب وقبوله ليبدأ التحضير."
    },
    {
      icon: <CreditCard className="w-8 h-8 text-brand-600" />,
      title: "الدفع والإنهاء",
      desc: "إمكانية الدفع الإلكتروني (Apple Pay, مدى) أو نقدًا عند الانتهاء من الوجبة."
    }
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* Workflow Section */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">كيف يعمل النظام؟</h2>
            <p className="text-slate-600">رحلة العميل من الدخول حتى المغادرة في خطوات بسيطة</p>
          </div>

          <div className="relative">
            {/* Vertical Line for Desktop */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-100 rounded-full top-0" />
            
            <div className="space-y-12 relative">
              {steps.map((step, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Content Side */}
                  <div className="flex-1 w-full md:w-1/2 text-center md:text-right">
                    <div className={`p-6 rounded-2xl bg-white border border-slate-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'} max-w-lg`}>
                       <div className="flex items-center gap-4 mb-4 justify-center md:justify-start">
                          <div className="p-3 bg-brand-50 rounded-lg">
                            {step.icon}
                          </div>
                          <h3 className="text-xl font-bold text-slate-800">{step.title}</h3>
                       </div>
                       <p className="text-slate-600 leading-relaxed">
                         {step.desc}
                       </p>
                    </div>
                  </div>
                  
                  {/* Center Node */}
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-brand-600 rounded-full border-4 border-white shadow-lg text-white font-bold">
                    {index + 1}
                  </div>

                  {/* Empty Side for Balance */}
                  <div className="flex-1 hidden md:block w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Staff View Preview Section */}
      <section className="py-20 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-slate-900 rounded-3xl p-8 md:p-16 relative overflow-hidden">
              {/* Decorative Circles */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
              
              <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    لوحة تحكم ذكية للموظفين
                  </h2>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3 text-slate-300">
                      <CheckCircle2 className="text-brand-500" />
                      <span>استقبال الطلبات وقبولها بضغطة زر</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-300">
                      <CheckCircle2 className="text-brand-500" />
                      <span>مراقبة الطاولات المتاحة والمشغولة</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-300">
                      <CheckCircle2 className="text-brand-500" />
                      <span>تتبع حالة الدفع والفواتير</span>
                    </li>
                  </ul>
                  <button className="px-6 py-3 bg-white text-slate-900 rounded-xl font-bold hover:bg-brand-50 transition-colors flex items-center gap-2">
                    سجل مطعمك الآن
                    <ArrowLeft size={20} />
                  </button>
                </div>
                
                {/* Mock UI Card */}
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6">
                   <div className="flex justify-between items-center mb-6">
                      <div className="text-white font-bold">الطلبات الواردة</div>
                      <div className="px-2 py-1 bg-brand-500/20 text-brand-400 text-xs rounded-full">مباشر</div>
                   </div>
                   <div className="space-y-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-slate-800/50 p-4 rounded-lg flex justify-between items-center">
                           <div>
                             <div className="text-white text-sm font-medium">طاولة رقم {i * 4}</div>
                             <div className="text-slate-400 text-xs">منذ دقيقتين</div>
                           </div>
                           <div className="flex gap-2">
                              <button className="px-3 py-1 bg-brand-600 text-white text-xs rounded-lg">قبول</button>
                              <button className="px-3 py-1 bg-red-500/20 text-red-400 text-xs rounded-lg">رفض</button>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}