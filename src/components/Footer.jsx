export default function Footer() {
  return (
    <footer id="contact" className="border-t border-black/5 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} RealEstate Pro. Všetky práva vyhradené.</p>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">Ochrana súkromia</a>
            <a href="#" className="hover:text-gray-900">Podmienky</a>
            <a href="#" className="hover:text-gray-900">Kontakt</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
