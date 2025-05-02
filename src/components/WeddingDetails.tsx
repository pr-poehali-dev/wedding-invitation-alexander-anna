
import { CalendarIcon, MapPinIcon, ClockIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WeddingDetails = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="font-cormorant text-3xl md:text-4xl text-center text-gray-800 mb-12">Детали торжества</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-gray-50 border-pink-100 shadow-sm">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <CalendarIcon className="w-8 h-8 text-pink-300" />
                </div>
                <h3 className="font-cormorant text-2xl font-medium text-gray-800 mb-2">Дата</h3>
                <p className="font-montserrat text-gray-600">19 июля 2025 года</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-50 border-pink-100 shadow-sm">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <ClockIcon className="w-8 h-8 text-pink-300" />
                </div>
                <h3 className="font-cormorant text-2xl font-medium text-gray-800 mb-2">Время</h3>
                <p className="font-montserrat text-gray-600">Сбор гостей в 16:00</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-50 border-pink-100 shadow-sm md:col-span-2">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <MapPinIcon className="w-8 h-8 text-pink-300" />
                </div>
                <h3 className="font-cormorant text-2xl font-medium text-gray-800 mb-2">Место</h3>
                <p className="font-montserrat text-gray-600">Лофт Манхэттен</p>
                <p className="font-montserrat text-gray-600 mt-1">Новая улица, 4, Пучково, поселение Первомайское, Москва</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <p className="font-cormorant text-xl md:text-2xl text-gray-700 italic">
            "Мы будем очень рады видеть вас на нашем особенном дне!"
          </p>
          <div className="mt-4 font-montserrat text-lg text-gray-600">
            — Александр и Анна
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingDetails;
