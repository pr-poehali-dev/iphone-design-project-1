import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: 'iphone' | 'accessory';
  specs: string[];
  colors: string[];
}

interface CartItem extends Product {
  quantity: number;
}

const products: Product[] = [
  {
    id: 1,
    name: 'iPhone 17 Pro Max',
    price: 149990,
    image: 'https://cdn.poehali.dev/projects/77aa9356-6ca6-479b-8d69-3872284a0fd4/files/2d92edd8-f375-4b97-9ef9-76f0817e47f3.jpg',
    category: 'iphone',
    specs: ['A18 Pro', '256GB', '6.9"', '5G', 'Титановый корпус'],
    colors: ['Чёрный титан', 'Белый титан', 'Синий титан', 'Натуральный титан']
  },
  {
    id: 2,
    name: 'iPhone 17 Pro',
    price: 129990,
    image: 'https://cdn.poehali.dev/projects/77aa9356-6ca6-479b-8d69-3872284a0fd4/files/2d92edd8-f375-4b97-9ef9-76f0817e47f3.jpg',
    category: 'iphone',
    specs: ['A18 Pro', '128GB', '6.3"', '5G', 'Титановый корпус'],
    colors: ['Чёрный титан', 'Белый титан', 'Синий титан']
  },
  {
    id: 3,
    name: 'iPhone 17',
    price: 99990,
    image: 'https://cdn.poehali.dev/projects/77aa9356-6ca6-479b-8d69-3872284a0fd4/files/2d92edd8-f375-4b97-9ef9-76f0817e47f3.jpg',
    category: 'iphone',
    specs: ['A18', '128GB', '6.1"', '5G', 'Алюминиевый корпус'],
    colors: ['Чёрный', 'Белый', 'Синий', 'Розовый']
  },
  {
    id: 4,
    name: 'AirPods Pro 3',
    price: 29990,
    image: 'https://cdn.poehali.dev/projects/77aa9356-6ca6-479b-8d69-3872284a0fd4/files/2d92edd8-f375-4b97-9ef9-76f0817e47f3.jpg',
    category: 'accessory',
    specs: ['ANC', 'Прозрачный режим', 'USB-C', 'H2 чип'],
    colors: ['Белый']
  },
  {
    id: 5,
    name: 'MagSafe зарядка',
    price: 4990,
    image: 'https://cdn.poehali.dev/projects/77aa9356-6ca6-479b-8d69-3872284a0fd4/files/2d92edd8-f375-4b97-9ef9-76f0817e47f3.jpg',
    category: 'accessory',
    specs: ['15W', 'MagSafe', 'USB-C кабель 1м'],
    colors: ['Белый']
  },
  {
    id: 6,
    name: 'Силиконовый чехол',
    price: 5990,
    image: 'https://cdn.poehali.dev/projects/77aa9356-6ca6-479b-8d69-3872284a0fd4/files/2d92edd8-f375-4b97-9ef9-76f0817e47f3.jpg',
    category: 'accessory',
    specs: ['MagSafe', 'Силикон', 'Мягкая подкладка'],
    colors: ['Чёрный', 'Синий', 'Розовый', 'Белый']
  }
];

export default function Index() {
  const [activeSection, setActiveSection] = useState<'home' | 'catalog' | 'iphone' | 'accessories' | 'about' | 'contacts'>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState<CartItem[]>([]);

  const filteredProducts = products.filter(product => {
    const query = searchQuery.toLowerCase();
    return (
      product.name.toLowerCase().includes(query) ||
      product.specs.some(spec => spec.toLowerCase().includes(query)) ||
      product.colors.some(color => color.toLowerCase().includes(query))
    );
  });

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(id);
    } else {
      setCart(prev =>
        prev.map(item => (item.id === id ? { ...item, quantity } : item))
      );
    }
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Icon name="Smartphone" className="h-6 w-6" />
            <span className="text-xl font-semibold">iPhone Store</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => setActiveSection('home')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === 'home' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Главная
            </button>
            <button
              onClick={() => setActiveSection('catalog')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === 'catalog' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Каталог
            </button>
            <button
              onClick={() => setActiveSection('iphone')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === 'iphone' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              iPhone
            </button>
            <button
              onClick={() => setActiveSection('accessories')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === 'accessories' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Аксессуары
            </button>
            <button
              onClick={() => setActiveSection('about')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === 'about' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              О магазине
            </button>
            <button
              onClick={() => setActiveSection('contacts')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === 'contacts' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Контакты
            </button>
          </nav>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="relative">
                <Icon name="ShoppingCart" className="h-5 w-5" />
                {cartItemsCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                    {cartItemsCount}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Корзина</SheetTitle>
                <SheetDescription>
                  {cartItemsCount > 0 ? `${cartItemsCount} товар(ов)` : 'Корзина пуста'}
                </SheetDescription>
              </SheetHeader>
              <div className="mt-8 space-y-4">
                {cart.map(item => (
                  <div key={item.id} className="flex items-center gap-4 pb-4 border-b">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                    <div className="flex-1">
                      <p className="font-medium text-sm">{item.name}</p>
                      <p className="text-sm text-muted-foreground">{item.price.toLocaleString('ru-RU')} ₽</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Icon name="Minus" className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Icon name="Plus" className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              {cartItemsCount > 0 && (
                <div className="absolute bottom-0 left-0 right-0 border-t bg-background p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold">Итого:</span>
                    <span className="text-2xl font-bold">{cartTotal.toLocaleString('ru-RU')} ₽</span>
                  </div>
                  <Button className="w-full" size="lg">
                    Оформить заказ
                  </Button>
                </div>
              )}
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main>
        {activeSection === 'home' && (
          <div className="relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 opacity-10">
              <img src="https://cdn.poehali.dev/projects/77aa9356-6ca6-479b-8d69-3872284a0fd4/files/d7cd3e9d-dc8c-485c-8f44-3d0c90c59ee2.jpg" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 opacity-10 rotate-90">
              <img src="https://cdn.poehali.dev/projects/77aa9356-6ca6-479b-8d69-3872284a0fd4/files/d7cd3e9d-dc8c-485c-8f44-3d0c90c59ee2.jpg" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 w-64 h-64 opacity-10 rotate-180">
              <img src="https://cdn.poehali.dev/projects/77aa9356-6ca6-479b-8d69-3872284a0fd4/files/d7cd3e9d-dc8c-485c-8f44-3d0c90c59ee2.jpg" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 right-0 w-64 h-64 opacity-10 rotate-270">
              <img src="https://cdn.poehali.dev/projects/77aa9356-6ca6-479b-8d69-3872284a0fd4/files/d7cd3e9d-dc8c-485c-8f44-3d0c90c59ee2.jpg" alt="" className="w-full h-full object-cover" />
            </div>

            <div className="container mx-auto px-4 py-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
                <div className="space-y-8 animate-fade-in">
                  <Badge variant="secondary" className="w-fit">Новинка 2026</Badge>
                  <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-balance">
                    iPhone 17 Pro Max
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-lg">
                    Титановый корпус. A18 Pro чип. Невероятная камера ProRes. 
                    Всё это в самом мощном iPhone.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button size="lg" className="text-lg px-8" onClick={() => setActiveSection('catalog')}>
                      Купить сейчас
                      <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
                    </Button>
                    <Button size="lg" variant="outline" className="text-lg px-8">
                      Узнать больше
                    </Button>
                  </div>
                  <div className="flex gap-8 pt-8">
                    <div>
                      <p className="text-3xl font-bold">от 149 990 ₽</p>
                      <p className="text-sm text-muted-foreground">или от 6 250 ₽/мес</p>
                    </div>
                  </div>
                </div>

                <div className="relative flex justify-center items-center animate-slide-in-right">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 blur-3xl rounded-full"></div>
                    <img
                      src="https://cdn.poehali.dev/projects/77aa9356-6ca6-479b-8d69-3872284a0fd4/files/2d92edd8-f375-4b97-9ef9-76f0817e47f3.jpg"
                      alt="iPhone 17 Pro Max"
                      className="relative w-full max-w-md lg:max-w-lg drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {(activeSection === 'catalog' || activeSection === 'iphone' || activeSection === 'accessories') && (
          <div className="container mx-auto px-4 py-12">
            <div className="mb-8 space-y-4">
              <h1 className="text-4xl font-bold">
                {activeSection === 'catalog' && 'Каталог товаров'}
                {activeSection === 'iphone' && 'iPhone'}
                {activeSection === 'accessories' && 'Аксессуары'}
              </h1>
              <div className="flex gap-4 items-center">
                <div className="relative flex-1 max-w-md">
                  <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Поиск по названию, характеристикам..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts
                .filter(p => {
                  if (activeSection === 'iphone') return p.category === 'iphone';
                  if (activeSection === 'accessories') return p.category === 'accessory';
                  return true;
                })
                .map((product, index) => (
                  <Card key={product.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <CardHeader className="p-0">
                      <div className="aspect-square overflow-hidden bg-muted">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <CardTitle className="mb-2">{product.name}</CardTitle>
                      <CardDescription className="mb-4">
                        {product.specs.slice(0, 3).join(' • ')}
                      </CardDescription>
                      <div className="flex gap-2 mb-4">
                        {product.colors.slice(0, 4).map(color => (
                          <div key={color} className="w-6 h-6 rounded-full border-2 border-muted bg-muted" title={color}></div>
                        ))}
                      </div>
                      <p className="text-2xl font-bold mb-4">{product.price.toLocaleString('ru-RU')} ₽</p>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button className="w-full" onClick={() => addToCart(product)}>
                        <Icon name="ShoppingCart" className="mr-2 h-4 w-4" />
                        В корзину
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <Icon name="SearchX" className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground">Ничего не найдено</p>
              </div>
            )}
          </div>
        )}

        {activeSection === 'about' && (
          <div className="container mx-auto px-4 py-12 max-w-3xl">
            <h1 className="text-4xl font-bold mb-8">О магазине</h1>
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Мы — официальный партнёр Apple, предлагающий полную линейку iPhone и оригинальных аксессуаров. 
                Наш магазин специализируется на продаже последних моделей iPhone с гарантией качества.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 my-8">
                <Card>
                  <CardHeader>
                    <Icon name="Shield" className="h-8 w-8 mb-2 text-primary" />
                    <CardTitle>Официальная гарантия</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Все устройства с официальной гарантией Apple на 1 год</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Icon name="Truck" className="h-8 w-8 mb-2 text-primary" />
                    <CardTitle>Быстрая доставка</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Доставка по Москве в день заказа, по России — 1-3 дня</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'contacts' && (
          <div className="container mx-auto px-4 py-12 max-w-3xl">
            <h1 className="text-4xl font-bold mb-8">Контакты</h1>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="MapPin" className="h-5 w-5" />
                    Адрес магазина
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">г. Москва, ул. Тверская, д. 1</p>
                  <p className="text-sm text-muted-foreground mt-2">Ежедневно с 10:00 до 22:00</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Phone" className="h-5 w-5" />
                    Телефон
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Mail" className="h-5 w-5" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">info@iphonestore.ru</p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>

      <footer className="border-t mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2026 iPhone Store. Все права защищены.</p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
