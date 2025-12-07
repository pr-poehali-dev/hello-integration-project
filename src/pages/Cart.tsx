import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: 'Ноутбук Pro 15', price: 89990, quantity: 1, image: '💻' },
    { id: 2, name: 'Наушники Premium', price: 12990, quantity: 2, image: '🎧' },
  ]);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = subtotal >= 3000 ? 0 : 300;
  const total = subtotal + deliveryFee;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-white">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-primary">
              ShopPro
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-foreground hover:text-accent transition">Главная</Link>
              <Link to="/catalog" className="text-foreground hover:text-accent transition">Каталог</Link>
              <Link to="/about" className="text-foreground hover:text-accent transition">О нас</Link>
              <Link to="/delivery" className="text-foreground hover:text-accent transition">Доставка</Link>
              <Link to="/reviews" className="text-foreground hover:text-accent transition">Отзывы</Link>
              <Link to="/contacts" className="text-foreground hover:text-accent transition">Контакты</Link>
            </div>
            <Link to="/cart" className="relative">
              <Icon name="ShoppingCart" size={24} className="text-accent" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-primary mb-8">Корзина</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-lg border border-border">
            <Icon name="ShoppingBag" size={64} className="text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-primary mb-2">Корзина пуста</h2>
            <p className="text-muted-foreground mb-6">Добавьте товары из каталога</p>
            <Link to="/catalog">
              <Button size="lg">
                <Icon name="ArrowLeft" size={20} className="mr-2" />
                Перейти в каталог
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white border border-border rounded-lg p-6 flex gap-6">
                  <div className="w-24 h-24 bg-secondary rounded-lg flex items-center justify-center text-5xl flex-shrink-0">
                    {item.image}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-primary mb-2">{item.name}</h3>
                    <p className="text-2xl font-bold text-primary mb-4">
                      {item.price.toLocaleString('ru-RU')} ₽
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 border border-border rounded-lg">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => updateQuantity(item.id, -1)}
                        >
                          <Icon name="Minus" size={16} />
                        </Button>
                        <span className="w-12 text-center font-semibold">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          <Icon name="Plus" size={16} />
                        </Button>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Icon name="Trash2" size={16} className="mr-2" />
                        Удалить
                      </Button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground mb-1">Итого:</p>
                    <p className="text-xl font-bold text-primary">
                      {(item.price * item.quantity).toLocaleString('ru-RU')} ₽
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white border border-border rounded-lg p-6 sticky top-24">
                <h2 className="text-xl font-bold text-primary mb-6">Итого</h2>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Товары ({cartItems.length})</span>
                    <span>{subtotal.toLocaleString('ru-RU')} ₽</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Доставка</span>
                    <span>{deliveryFee === 0 ? 'Бесплатно' : `${deliveryFee} ₽`}</span>
                  </div>
                </div>

                {subtotal < 3000 && (
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-3 mb-4">
                    <p className="text-sm text-accent flex items-start gap-2">
                      <Icon name="Info" size={16} className="flex-shrink-0 mt-0.5" />
                      <span>До бесплатной доставки осталось {(3000 - subtotal).toLocaleString('ru-RU')} ₽</span>
                    </p>
                  </div>
                )}

                <Separator className="my-4" />

                <div className="flex justify-between text-xl font-bold text-primary mb-6">
                  <span>К оплате:</span>
                  <span>{total.toLocaleString('ru-RU')} ₽</span>
                </div>

                <div className="space-y-3 mb-4">
                  <Input placeholder="Промокод" />
                  <Button variant="outline" className="w-full">
                    Применить промокод
                  </Button>
                </div>

                <Button size="lg" className="w-full">
                  <Icon name="CreditCard" size={20} className="mr-2" />
                  Оформить заказ
                </Button>

                <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Icon name="Shield" size={16} className="text-accent" />
                    <span>Безопасная оплата</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Truck" size={16} className="text-accent" />
                    <span>Гарантия доставки</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="RotateCcw" size={16} className="text-accent" />
                    <span>Возврат в течение 14 дней</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-primary text-primary-foreground mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p>&copy; 2024 ShopPro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Cart;
