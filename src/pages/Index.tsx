
import WeddingHeader from "@/components/WeddingHeader";
import PhotoGallery from "@/components/PhotoGallery";
import WeddingDetails from "@/components/WeddingDetails";
import RSVP from "@/components/RSVP";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-montserrat text-gray-800">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-200 to-transparent" />
      
      <WeddingHeader />
      <PhotoGallery />
      <WeddingDetails />
      <RSVP />
      
      <footer className="py-8 text-center text-gray-500 text-sm">
        <p>С любовью, Александр и Анна</p>
        <p className="mt-2">© 2025</p>
      </footer>
    </div>
  );
};

export default Index;
