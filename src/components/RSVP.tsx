
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";

const RSVP = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [attending, setAttending] = useState<string | undefined>(undefined);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !attending) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все поля формы.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Спасибо!",
      description: attending === "yes" 
        ? "Мы будем рады видеть вас на нашей свадьбе!" 
        : "Жаль, что вы не сможете присутствовать. Спасибо, что сообщили нам.",
    });
    
    setName("");
    setAttending(undefined);
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-md mx-auto px-4">
        <h2 className="font-cormorant text-3xl md:text-4xl text-center text-gray-800 mb-8">Подтвердите присутствие</h2>
        <p className="text-center font-montserrat text-gray-600 mb-8">
          Пожалуйста, сообщите нам о вашем решении до 19 июня 2025 года
        </p>
        
        <Card className="bg-white border-pink-100">
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя и фамилия</Label>
                  <Input 
                    id="name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Иван Иванов"
                    className="border-gray-200 focus:border-pink-200"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>Вы планируете присутствовать?</Label>
                  <RadioGroup 
                    value={attending} 
                    onValueChange={setAttending}
                    className="flex flex-col space-y-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="yes" />
                      <Label htmlFor="yes" className="cursor-pointer">С удовольствием приду</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="no" />
                      <Label htmlFor="no" className="cursor-pointer">К сожалению, не смогу</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-pink-200 hover:bg-pink-300 text-gray-800"
                >
                  Отправить
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RSVP;
