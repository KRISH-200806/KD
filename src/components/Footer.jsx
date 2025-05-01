import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-amber-800 text-white py-8">
        <div className="max-w-7xl w-full mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-4">સંપર્ક માહિતી</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 mt-1">📍</span>
                  <span>સંસ્કારધામ ગુરુકુલ, માર્ગ ક્ર. ૧૨૩, શહેર - ૪૦૦૦૦૧</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">📞</span>
                  <span>+૯૧ ૯૮૭૬૫ ૪૩૨૧૦</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">✉️</span>
                  <span>info@sanskardhamgurukul.org</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">ઝડપી લિંક્સ</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-yellow-200">
                    અમારા વિશે
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-200">
                    પ્રવેશ પ્રક્રિયા
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-200">
                    શૈક્ષણિક કાર્યક્રમો
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-200">
                    શિક્ષકગણ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-200">
                    ઇવેન્ટ્સ અને સમાચાર
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">અમારી સાથે જોડાઓ</h3>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="hover:text-yellow-200 text-2xl">
                  <span>📱</span>
                </a>
                <a href="#" className="hover:text-yellow-200 text-2xl">
                  <span>📷</span>
                </a>
                <a href="#" className="hover:text-yellow-200 text-2xl">
                  <span>▶️</span>
                </a>
                <a href="#" className="hover:text-yellow-200 text-2xl">
                  <span>🐦</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">ન્યૂઝલેટર</h3>
              <p className="mb-2">અમારા ન્યૂઝલેટર માટે સબ્સ્ક્રાઇબ કરો</p>
              <div className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="તમારું ઇમેઇલ"
                  className="p-2 rounded-l text-gray-800 w-full mb-2 sm:mb-0"
                />
                <button className="bg-yellow-500 text-gray-900 font-bold p-2 rounded-r sm:rounded-l-none rounded-l">
                  સબમિટ
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-yellow-700 mt-6 pt-6 text-center">
            <p className="mb-2">
              "અમારું લક્ષ્ય: શિક્ષણ દ્વારા સંસ્કૃતિ અને મૂલ્યોનું જતન"
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-2">
              <a href="#" className="hover:text-yellow-200">
                ગોપનીયતા નીતિ
              </a>
              <span className="hidden sm:inline">|</span>
              <a href="#" className="hover:text-yellow-200">
                ઉપયોગની શરતો
              </a>
            </div>
            <p>© ૨૦૨૫ સંસ્કારધામ ગુરુકુલ. સર્વાધિકાર સુરક્ષિત.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
