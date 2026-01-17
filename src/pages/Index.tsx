import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const scrollToOrder = () => {
    document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Icon name="Smartphone" className="h-6 w-6" />
            <span className="text-xl font-semibold">iPhone 17 Pro Max</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Возможности
            </a>
            <a href="#specs" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Характеристики
            </a>
            <a href="#order" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Купить
            </a>
          </nav>

          <Button onClick={scrollToOrder}>
            Заказать
          </Button>
        </div>
      </header>

      <main className="pt-16">
        <section className="relative overflow-hidden min-h-screen flex items-center">
          <div className="absolute top-0 left-0 w-64 h-64 opacity-10 animate-fade-in">
            <img 
              src="https://cdn.poehali.dev/projects/77aa9356-6ca6-479b-8d69-3872284a0fd4/files/d7cd3e9d-dc8c-485c-8f44-3d0c90c59ee2.jpg" 
              alt="" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 opacity-10 rotate-90 animate-fade-in">
            <img 
              src="https://cdn.poehali.dev/projects/77aa9356-6ca6-479b-8d69-3872284a0fd4/files/d7cd3e9d-dc8c-485c-8f44-3d0c90c59ee2.jpg" 
              alt="" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-64 h-64 opacity-10 rotate-180 animate-fade-in">
            <img 
              src="https://cdn.poehali.dev/projects/77aa9356-6ca6-479b-8d69-3872284a0fd4/files/d7cd3e9d-dc8c-485c-8f44-3d0c90c59ee2.jpg" 
              alt="" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 w-64 h-64 opacity-10 -rotate-90 animate-fade-in">
            <img 
              src="https://cdn.poehali.dev/projects/77aa9356-6ca6-479b-8d69-3872284a0fd4/files/d7cd3e9d-dc8c-485c-8f44-3d0c90c59ee2.jpg" 
              alt="" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="container mx-auto px-4 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-fade-in">
                <Badge variant="secondary" className="w-fit">Новинка 2026</Badge>
                <h1 className="text-6xl lg:text-8xl font-bold tracking-tight text-balance leading-tight">
                  iPhone 17<br/>Pro Max
                </h1>
                <p className="text-2xl text-muted-foreground max-w-lg leading-relaxed">
                  Титановый. Мощный. Pro.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button size="lg" className="text-lg px-8 h-14" onClick={scrollToOrder}>
                    Купить от 149 990 ₽
                    <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg px-8 h-14">
                    <Icon name="Play" className="mr-2 h-5 w-5" />
                    Смотреть видео
                  </Button>
                </div>
              </div>

              <div className="relative flex justify-center items-center animate-slide-in-right">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-blue-500/30 blur-3xl rounded-full animate-pulse"></div>
                  <img
                    src="https://cdn.poehali.dev/projects/77aa9356-6ca6-479b-8d69-3872284a0fd4/files/2d92edd8-f375-4b97-9ef9-76f0817e47f3.jpg"
                    alt="iPhone 17 Pro Max"
                    className="relative w-full max-w-md lg:max-w-lg drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20 animate-fade-in">
              <h2 className="text-5xl font-bold mb-6">Создан для профессионалов</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Каждая деталь разработана для максимальной производительности
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
              <div className="order-2 md:order-1 space-y-6 animate-fade-in">
                <Badge variant="outline" className="mb-4">Камера Pro</Badge>
                <h3 className="text-4xl font-bold">Невероятная система камер</h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Тройная камера 48MP с поддержкой ProRes видео 8K. 
                  Новый сенсор захватывает в 4 раза больше света для потрясающих снимков даже ночью.
                </p>
                <ul className="space-y-4 pt-4">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg">Основная камера 48MP с f/1.4</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg">Ультра-широкоугольная 48MP</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg">Телеобъектив 12MP с 5x зумом</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2 animate-scale-in">
                <img
                  src="https://cdn.poehali.dev/projects/77aa9356-6ca6-479b-8d69-3872284a0fd4/files/30392610-aea3-42b5-bfb3-a68b9dbd9bac.jpg"
                  alt="Камера iPhone"
                  className="w-full rounded-3xl shadow-2xl"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6 animate-fade-in">
                <Badge variant="outline" className="mb-4">Производительность</Badge>
                <h3 className="text-4xl font-bold">Чип A18 Pro</h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Самый быстрый чип в смартфоне. 6-ядерный процессор с нейронным движком 
                  следующего поколения обрабатывает до 35 триллионов операций в секунду.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div>
                    <p className="text-4xl font-bold text-primary mb-2">2x</p>
                    <p className="text-muted-foreground">быстрее GPU</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-primary mb-2">50%</p>
                    <p className="text-muted-foreground">меньше энергии</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-primary mb-2">35T</p>
                    <p className="text-muted-foreground">операций/сек</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-primary mb-2">3nm</p>
                    <p className="text-muted-foreground">техпроцесс</p>
                  </div>
                </div>
              </div>
              <div className="animate-scale-in">
                <img
                  src="https://cdn.poehali.dev/projects/77aa9356-6ca6-479b-8d69-3872284a0fd4/files/50c249d2-81ab-4e63-9efa-3122405b1bb3.jpg"
                  alt="Чип A18 Pro"
                  className="w-full rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="specs" className="py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20 animate-fade-in">
              <h2 className="text-5xl font-bold mb-6">Технические характеристики</h2>
              <p className="text-xl text-muted-foreground">Всё, что нужно знать</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-8 rounded-2xl border bg-card hover:shadow-lg transition-all animate-fade-in">
                <Icon name="Smartphone" className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Дисплей</h3>
                <p className="text-muted-foreground mb-4">6.9" Super Retina XDR</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>ProMotion 120Hz</li>
                  <li>Always-On дисплей</li>
                  <li>2000 нит яркость</li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl border bg-card hover:shadow-lg transition-all animate-fade-in" style={{ animationDelay: '100ms' }}>
                <Icon name="Cpu" className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Процессор</h3>
                <p className="text-muted-foreground mb-4">A18 Pro чип</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>6 ядер CPU</li>
                  <li>6 ядер GPU</li>
                  <li>16-ядерный Neural Engine</li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl border bg-card hover:shadow-lg transition-all animate-fade-in" style={{ animationDelay: '200ms' }}>
                <Icon name="Camera" className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Камера</h3>
                <p className="text-muted-foreground mb-4">Тройная система</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>48MP основная</li>
                  <li>48MP ультра-широкая</li>
                  <li>12MP телефото 5x</li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl border bg-card hover:shadow-lg transition-all animate-fade-in" style={{ animationDelay: '300ms' }}>
                <Icon name="Battery" className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Батарея</h3>
                <p className="text-muted-foreground mb-4">До 29 часов видео</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>MagSafe 25W</li>
                  <li>Быстрая зарядка</li>
                  <li>USB-C</li>
                </ul>
              </div>
            </div>

            <div className="mt-16 p-12 rounded-3xl bg-gradient-to-br from-primary/10 to-blue-500/10 border animate-scale-in">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <p className="text-5xl font-bold mb-2">256GB</p>
                  <p className="text-muted-foreground">Встроенная память</p>
                </div>
                <div>
                  <p className="text-5xl font-bold mb-2">8GB</p>
                  <p className="text-muted-foreground">Оперативная память</p>
                </div>
                <div>
                  <p className="text-5xl font-bold mb-2">5G</p>
                  <p className="text-muted-foreground">Связь нового поколения</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h2 className="text-5xl font-bold mb-6">Титановый корпус</h2>
              <p className="text-2xl text-muted-foreground mb-12 leading-relaxed">
                Aerospace-grade титан класса 5. Самый прочный и лёгкий материал, 
                который мы когда-либо использовали в iPhone.
              </p>
              <div className="grid sm:grid-cols-4 gap-6">
                <div className="p-6 rounded-xl bg-background border">
                  <div className="w-12 h-12 rounded-full bg-zinc-900 mx-auto mb-4"></div>
                  <p className="font-medium">Чёрный титан</p>
                </div>
                <div className="p-6 rounded-xl bg-background border">
                  <div className="w-12 h-12 rounded-full bg-zinc-100 mx-auto mb-4 border"></div>
                  <p className="font-medium">Белый титан</p>
                </div>
                <div className="p-6 rounded-xl bg-background border">
                  <div className="w-12 h-12 rounded-full bg-blue-600 mx-auto mb-4"></div>
                  <p className="font-medium">Синий титан</p>
                </div>
                <div className="p-6 rounded-xl bg-background border">
                  <div className="w-12 h-12 rounded-full bg-zinc-400 mx-auto mb-4"></div>
                  <p className="font-medium">Натуральный</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="order" className="py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center animate-fade-in">
              <h2 className="text-5xl font-bold mb-6">Готовы к покупке?</h2>
              <p className="text-2xl text-muted-foreground mb-12">
                iPhone 17 Pro Max уже доступен для заказа
              </p>
              
              <div className="p-10 rounded-3xl border bg-card shadow-xl mb-8">
                <div className="space-y-6">
                  <div>
                    <p className="text-6xl font-bold mb-2">149 990 ₽</p>
                    <p className="text-muted-foreground">или от 6 250 ₽/мес на 24 месяца</p>
                  </div>
                  
                  <div className="space-y-3 pt-6">
                    <div className="flex items-center justify-between py-3 border-b">
                      <span className="text-muted-foreground">iPhone 17 Pro Max 256GB</span>
                      <span className="font-semibold">149 990 ₽</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b">
                      <span className="text-muted-foreground">Доставка</span>
                      <span className="font-semibold text-primary">Бесплатно</span>
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <span className="text-lg font-semibold">Итого</span>
                      <span className="text-2xl font-bold">149 990 ₽</span>
                    </div>
                  </div>

                  <Button size="lg" className="w-full h-14 text-lg mt-6">
                    <Icon name="ShoppingCart" className="mr-2 h-5 w-5" />
                    Купить сейчас
                  </Button>
                  
                  <div className="flex items-center justify-center gap-6 pt-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Icon name="Truck" className="h-4 w-4" />
                      <span>Доставка 1-2 дня</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Shield" className="h-4 w-4" />
                      <span>Гарантия 1 год</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground">
                Также доступны модели на 512GB и 1TB
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">Продукты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">iPhone 17 Pro Max</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">iPhone 17 Pro</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">iPhone 17</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Аксессуары</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Справка</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Гарантия</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Ремонт</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Новости</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Партнёры</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Связь</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+7 (495) 123-45-67</li>
                <li>info@iphonestore.ru</li>
                <li>г. Москва, ул. Тверская, д. 1</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2026 iPhone Store. Все права защищены.</p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
