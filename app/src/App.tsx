import { useEffect, useState, useRef } from 'react';
import { Mail, Shield, Check, ChevronRight } from 'lucide-react';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const homeRef = useRef<HTMLElement>(null);
  const supportRef = useRef<HTMLElement>(null);
  const privacyRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Determine active section for nav highlighting
      const scrollPosition = window.scrollY + 100;
      
      if (privacyRef.current && scrollPosition >= privacyRef.current.offsetTop) {
        setActiveSection('privacy');
      } else if (supportRef.current && scrollPosition >= supportRef.current.offsetTop) {
        setActiveSection('support');
      } else {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-[#F6F7F9]">
      {/* Navigation */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#F6F7F9]/80 backdrop-blur-xl border-b border-black/5' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection(homeRef)}
              className="text-lg font-semibold tracking-tight text-[#111214] hover:opacity-70 transition-opacity"
            >
              SubStacker
            </button>

            {/* Nav Links */}
            <nav className="flex items-center gap-8">
              <button
                onClick={() => scrollToSection(supportRef)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'support' 
                    ? 'text-[#4F6DF5]' 
                    : 'text-[#6B7280] hover:text-[#111214]'
                }`}
              >
                Support
              </button>
              <button
                onClick={() => scrollToSection(privacyRef)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'privacy' 
                    ? 'text-[#4F6DF5]' 
                    : 'text-[#6B7280] hover:text-[#111214]'
                }`}
              >
                Privacy
              </button>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(homeRef);
                }}
                className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#4F6DF5] rounded-full hover:bg-[#3D5BD9] transition-colors"
              >
                Get the app
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero / Marketing Section */}
      <section 
        ref={homeRef}
        id="home"
        className="relative min-h-screen flex items-center pt-16"
      >
        <div className="w-full max-w-6xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111214] leading-[1.1]">
                  SubStacker
                </h1>
                <p className="text-xl sm:text-2xl text-[#6B7280] font-medium">
                  Subscription management made simple
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-base lg:text-lg text-[#374151] leading-relaxed max-w-lg">
                  SubStacker helps you stay on top of your recurring subscriptions so you can avoid surprise renewals and keep your spending organized.
                </p>
                <p className="text-base lg:text-lg text-[#374151] leading-relaxed max-w-lg">
                  View all your subscriptions in one place, track billing cycles, and get reminders before renewals. SubStacker is designed to be simple, privacy-focused, and easy to use.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-[#B9F6D4] flex items-center justify-center">
                    <Check className="w-3 h-3 text-[#111214]" />
                  </div>
                  <span className="text-[#374151]">View your subscriptions in one place</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-[#B9F6D4] flex items-center justify-center">
                    <Check className="w-3 h-3 text-[#111214]" />
                  </div>
                  <span className="text-[#374151]">Track billing cycles and renewal dates</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-[#B9F6D4] flex items-center justify-center">
                    <Check className="w-3 h-3 text-[#111214]" />
                  </div>
                  <span className="text-[#374151]">Stay informed before subscriptions renew</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-[#B9F6D4] flex items-center justify-center">
                    <Check className="w-3 h-3 text-[#111214]" />
                  </div>
                  <span className="text-[#374151]">Simple, distraction-free design</span>
                </div>
              </div>

              {/* Disclaimer */}
              <p className="text-sm text-[#9CA3AF] max-w-md">
                SubStacker does not process payments or cancel subscriptions automatically. It provides visibility and guidance so users can make informed decisions.
              </p>

              {/* CTA */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-[#4F6DF5] rounded-full hover:bg-[#3D5BD9] transition-colors shadow-lg shadow-[#4F6DF5]/20"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Available on the App Store
                </a>
                <button
                  onClick={() => scrollToSection(supportRef)}
                  className="inline-flex items-center text-sm font-medium text-[#6B7280] hover:text-[#111214] transition-colors"
                >
                  View support
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>

            {/* Right Content - Phone Mockup */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-[280px] sm:w-[320px] lg:w-[380px]">
                {/* Phone Frame */}
                <div className="relative bg-white rounded-[40px] p-3 shadow-[0_28px_70px_rgba(0,0,0,0.14)]">
                  {/* Screen */}
                  <div className="relative bg-[#F8F9FB] rounded-[32px] overflow-hidden aspect-[9/19]">
                    {/* App UI */}
                    <div className="absolute inset-0 flex flex-col">
                      {/* Status Bar */}
                      <div className="h-8 bg-white flex items-center justify-between px-6">
                        <span className="text-xs font-semibold text-[#111214]">9:41</span>
                        <div className="flex items-center gap-1">
                          <div className="w-4 h-2.5 bg-[#111214] rounded-sm"></div>
                        </div>
                      </div>
                      
                      {/* App Header */}
                      <div className="px-5 py-4 bg-white">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs text-[#6B7280]">Total Monthly</p>
                            <p className="text-2xl font-bold text-[#111214]">$127.43</p>
                          </div>
                          <div className="w-10 h-10 bg-[#4F6DF5] rounded-full flex items-center justify-center">
                            <span className="text-white text-lg font-bold">S</span>
                          </div>
                        </div>
                      </div>

                      {/* Subscription List */}
                      <div className="flex-1 px-4 py-3 space-y-3 overflow-hidden">
                        {/* Card 1 */}
                        <div className="bg-white rounded-2xl p-4 shadow-sm">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#E8F5E9] rounded-xl flex items-center justify-center">
                              <span className="text-green-600 text-lg font-bold">N</span>
                            </div>
                            <div className="flex-1">
                              <p className="font-semibold text-[#111214] text-sm">Netflix</p>
                              <p className="text-xs text-[#6B7280]">Monthly • 15th</p>
                            </div>
                            <p className="font-semibold text-[#111214] text-sm">$15.49</p>
                          </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-2xl p-4 shadow-sm">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#E3F2FD] rounded-xl flex items-center justify-center">
                              <span className="text-blue-600 text-lg font-bold">S</span>
                            </div>
                            <div className="flex-1">
                              <p className="font-semibold text-[#111214] text-sm">Spotify</p>
                              <p className="text-xs text-[#6B7280]">Monthly • 22nd</p>
                            </div>
                            <p className="font-semibold text-[#111214] text-sm">$10.99</p>
                          </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-2xl p-4 shadow-sm">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#FFF3E0] rounded-xl flex items-center justify-center">
                              <span className="text-orange-600 text-lg font-bold">A</span>
                            </div>
                            <div className="flex-1">
                              <p className="font-semibold text-[#111214] text-sm">Apple Music</p>
                              <p className="text-xs text-[#6B7280]">Monthly • 5th</p>
                            </div>
                            <p className="font-semibold text-[#111214] text-sm">$10.99</p>
                          </div>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white rounded-2xl p-4 shadow-sm">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#F3E5F5] rounded-xl flex items-center justify-center">
                              <span className="text-purple-600 text-lg font-bold">Y</span>
                            </div>
                            <div className="flex-1">
                              <p className="font-semibold text-[#111214] text-sm">YouTube Premium</p>
                              <p className="text-xs text-[#6B7280]">Monthly • 12th</p>
                            </div>
                            <p className="font-semibold text-[#111214] text-sm">$13.99</p>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Indicator */}
                      <div className="h-1 w-32 bg-[#111214]/20 rounded-full mx-auto mb-2"></div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-2 -right-2 bg-[#B9F6D4] text-[#111214] text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                  Simple
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section 
        ref={supportRef}
        id="support"
        className="relative py-24 lg:py-32"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#4F6DF5]/10 rounded-xl flex items-center justify-center">
                <Mail className="w-5 h-5 text-[#4F6DF5]" />
              </div>
              <span className="text-sm font-semibold text-[#4F6DF5] uppercase tracking-wider">Support</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111214] tracking-tight mb-6">
              SubStacker Support
            </h2>

            <div className="space-y-6 text-[#374151]">
              <p className="text-lg leading-relaxed">
                Need help or have questions about SubStacker?
              </p>
              <p className="text-lg leading-relaxed">
                If you're experiencing an issue, have feedback, or need assistance, you can reach out using the contact information below.
              </p>
            </div>

            <div className="mt-10 p-6 bg-white rounded-3xl shadow-sm border border-black/5">
              <h3 className="text-sm font-semibold text-[#6B7280] uppercase tracking-wider mb-4">
                Contact
              </h3>
              <a 
                href="mailto:support@substacker.app"
                className="inline-flex items-center text-lg font-medium text-[#4F6DF5] hover:text-[#3D5BD9] transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                support@substacker.app
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section 
        ref={privacyRef}
        id="privacy"
        className="relative py-24 lg:py-32 bg-white"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#4F6DF5]/10 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#4F6DF5]" />
              </div>
              <span className="text-sm font-semibold text-[#4F6DF5] uppercase tracking-wider">Privacy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111214] tracking-tight mb-4">
              Privacy Policy — SubStacker
            </h2>

            <p className="text-sm text-[#9CA3AF] mb-8">
              Last updated: {today}
            </p>

            <div className="space-y-8 text-[#374151]">
              <p className="text-base leading-relaxed">
                SubStacker is a subscription tracking app.
              </p>

              <div className="space-y-4">
                <p className="text-base leading-relaxed">
                  We collect only the information necessary to operate the app:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-[#4F6DF5] mt-1.5">•</span>
                    <span>Account login details (such as email) if you create an account</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4F6DF5] mt-1.5">•</span>
                    <span>Subscription data you enter</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4F6DF5] mt-1.5">•</span>
                    <span>Basic usage data to improve app performance</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <p className="text-base leading-relaxed">
                  We do not sell personal data.
                </p>
                <p className="text-base leading-relaxed">
                  We do not share personal data with third parties except for required service providers that support app functionality.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-base leading-relaxed">
                  Data is used only to:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-[#4F6DF5] mt-1.5">•</span>
                    <span>Provide subscription tracking features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4F6DF5] mt-1.5">•</span>
                    <span>Save user preferences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4F6DF5] mt-1.5">•</span>
                    <span>Improve app reliability</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-[#F6F7F9] rounded-2xl">
                <h3 className="text-sm font-semibold text-[#6B7280] uppercase tracking-wider mb-4">
                  Contact
                </h3>
                <p className="text-base leading-relaxed mb-2">
                  If you have questions about this policy, contact:
                </p>
                <a 
                  href="mailto:vtguy65@icloud.net"
                  className="inline-flex items-center font-medium text-[#4F6DF5] hover:text-[#3D5BD9] transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  vtguy65@icloud.net
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#111214]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#4F6DF5] rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">S</span>
              </div>
              <span className="text-white font-semibold">SubStacker</span>
            </div>

            <nav className="flex items-center gap-6">
              <button
                onClick={() => scrollToSection(supportRef)}
                className="text-sm text-[#9CA3AF] hover:text-white transition-colors"
              >
                Support
              </button>
              <button
                onClick={() => scrollToSection(privacyRef)}
                className="text-sm text-[#9CA3AF] hover:text-white transition-colors"
              >
                Privacy Policy
              </button>
            </nav>

            <p className="text-sm text-[#6B7280]">
              © {new Date().getFullYear()} SubStacker
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
