// components/Footer.js
export default function Footer() {
  return (
    <footer className="py-8 text-gray-600 border-t bg-gray-100">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        <div>
          <h3 className="font-bold">Company Address</h3>
          <p>Branch 1: 123 Main St, City A</p>
          <p>Branch 2: 456 Market St, City B</p>
          <p>Branch 3: 789 Tech Park, City C</p>
        </div>
        <div>
          <h3 className="font-bold">Quick Links</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Industries</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Our Services</h3>
          <ul>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Cloud Computing</a></li>
            <li><a href="#">AI & ML</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Follow Us</h3>
          <ul className="flex justify-center md:justify-start space-x-4">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <p className="text-center mt-6">&copy; 2025 AAS Information Technology. All rights reserved.</p>
    </footer>
  );
}
