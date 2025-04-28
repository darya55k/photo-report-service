import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Check, CircleDollarSign, BarChart, Users, Star } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, { message: "Имя должно содержать минимум 2 символа" }),
  email: z.string().email({ message: "Введите корректный email" }),
  company: z.string().min(2, { message: "Название компании должно содержать минимум 2 символа" }),
  phone: z.string().min(10, { message: "Введите корректный номер телефона" }),
  plan: z.enum(["starter", "business", "enterprise"], {
    required_error: "Выберите тариф",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const Subscribe = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      plan: "starter",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    setIsSubmitted(true);
    // Здесь будет логика отправки данных
  };

  const plans = [
    {
      id: "starter",
      name: "Базовый",
      price: "2 900 ₽",
      period: "месяц",
      description: "Идеально подходит для малого бизнеса и индивидуальных предпринимателей",
      features: [
        "До 5 пользователей",
        "До 500 фотоотчетов в месяц",
        "Базовая аналитика",
        "Email-поддержка"
      ],
      icon: <CircleDollarSign className="h-12 w-12 text-primary" />
    },
    {
      id: "business",
      name: "Бизнес",
      price: "7 900 ₽",
      period: "месяц",
      description: "Полный набор инструментов для среднего бизнеса",
      features: [
        "До 20 пользователей",
        "До 2000 фотоотчетов в месяц",
        "Расширенная аналитика",
        "Приоритетная поддержка",
        "Кастомизация шаблонов"
      ],
      icon: <BarChart className="h-12 w-12 text-primary" />
    },
    {
      id: "enterprise",
      name: "Корпоративный",
      price: "19 900 ₽",
      period: "месяц",
      description: "Масштабируемое решение для крупного бизнеса",
      features: [
        "Неограниченное количество пользователей",
        "Безлимитное количество фотоотчетов",
        "Полная аналитика с экспортом данных",
        "Персональный менеджер",
        "API интеграция",
        "Индивидуальная настройка"
      ],
      icon: <Users className="h-12 w-12 text-primary" />
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold font-heading mb-4">Выберите подходящий тариф</h1>
          <p className="text-lg text-muted-foreground">
            Начните использовать наш сервис уже сегодня с тарифом, который соответствует потребностям вашего бизнеса
          </p>
        </div>

        {isSubmitted ? (
          <Card className="max-w-xl mx-auto animate-fade-in">
            <CardHeader>
              <div className="flex items-center justify-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Check className="h-10 w-10 text-primary" />
                </div>
              </div>
              <CardTitle className="text-center text-2xl">Заявка отправлена</CardTitle>
              <CardDescription className="text-center text-lg">
                Спасибо за интерес к нашему сервису! Мы свяжемся с вами в ближайшее время для уточнения деталей подписки.
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-center pt-4">
              <Button onClick={() => setIsSubmitted(false)} variant="outline">
                Отправить новую заявку
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="grid grid-cols-1 gap-6">
                {plans.map((plan) => (
                  <Card 
                    key={plan.id} 
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      form.watch("plan") === plan.id ? "border-primary ring-2 ring-primary/20" : ""
                    }`}
                    onClick={() => form.setValue("plan", plan.id as "starter" | "business" | "enterprise")}
                  >
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl mb-1">{plan.name}</CardTitle>
                          <CardDescription>{plan.description}</CardDescription>
                        </div>
                        <div>{plan.icon}</div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-baseline mb-4">
                        <span className="text-3xl font-bold">{plan.price}</span>
                        <span className="text-muted-foreground ml-1">/ {plan.period}</span>
                      </div>
                      <ul className="space-y-2">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <Star className="h-4 w-4 text-primary" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Оформить подписку</CardTitle>
                  <CardDescription>
                    Заполните форму, и наш менеджер свяжется с вами для уточнения деталей
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>ФИО</FormLabel>
                            <FormControl>
                              <Input placeholder="Иванов Иван Иванович" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="your@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Название компании</FormLabel>
                            <FormControl>
                              <Input placeholder="ООО «Компания»" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Телефон</FormLabel>
                            <FormControl>
                              <Input placeholder="+7 (999) 123-45-67" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="plan"
                        render={({ field }) => (
                          <FormItem className="hidden">
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col space-y-1"
                              >
                                {plans.map(plan => (
                                  <FormItem className="flex items-center space-x-3 space-y-0" key={plan.id}>
                                    <FormControl>
                                      <RadioGroupItem value={plan.id} />
                                    </FormControl>
                                    <FormLabel className="font-normal">{plan.name}</FormLabel>
                                  </FormItem>
                                ))}
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button type="submit" className="w-full">Отправить заявку</Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Subscribe;
