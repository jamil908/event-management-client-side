const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p className="text-lg mb-4">Event Management Platform</p>
          <p className="mb-4">© 2025 Event Management. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  