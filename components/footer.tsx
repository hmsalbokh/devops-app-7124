import { UtensilsCrossed } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white">
                <UtensilsCrossed size={16} />
              </div>
              <span className="font-bold text-white text-lg">سمارت تيبل</span>
            </div>
            <p className="text-sm leading-relaxed">
              الحل الأمثل للمطاعم العصرية. نجمع بين التكنولوجيا والضيافة لتوفير تجربة استثنائية.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">المنتج</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-500">المميزات</a></li>
              <li><a href="#" className="hover:text-brand-500">الأسعار</a></li>
              <li><a href="#" className="hover:text-brand-500">للموظفين</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">الشركة</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-500">من نحن</a></li>
              <li><a href="#" className="hover:text-brand-500">تواصل معنا</a></li>
              <li><a href="#" className="hover:text-brand-500">سياسة الخصوصية</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">اشترك معنا</h3>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="البريد الإلكتروني" 
                className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:border-brand-600"
              />
              <button className="bg-brand-600 hover:bg-brand-700 text-white px-4 py-2 rounded-lg text-sm font-bold">
                أرسل
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm">
          © 2024 سمارت تيبل كونكت. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
}