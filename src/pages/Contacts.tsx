import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contacts = () => {
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
              <Link to="/contacts" className="text-accent font-medium">Контакты</Link>
            </div>
            <Link to="/cart" className="relative">
              <Icon name="ShoppingCart" size={24} className="text-primary" />
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-primary mb-8">Контакты</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-6">Свяжитесь с нами</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Icon name="MapPin" size={24} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-primary mb-1">Адрес</h3>
                  <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 123, офис 45</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Icon name="Phone" size={24} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-primary mb-1">Телефон</h3>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  <p className="text-muted-foreground">+7 (800) 555-35-35</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Icon name="Mail" size={24} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-primary mb-1">Email</h3>
                  <p className="text-muted-foreground">info@shoppro.ru</p>
                  <p className="text-muted-foreground">support@shoppro.ru</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Icon name="Clock" size={24} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-primary mb-1">Режим работы</h3>
                  <p className="text-muted-foreground">Пн-Пт: 9:00 - 21:00</p>
                  <p className="text-muted-foreground">Сб-Вс: 10:00 - 18:00</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-secondary rounded-lg">
              <h3 className="font-semibold text-primary mb-3">Мы в социальных сетях</h3>
              <div className="flex gap-4">
                <Button variant="outline" size="icon">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Twitter" size={20} />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-primary mb-6">Напишите нам</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-primary mb-2">Имя</label>
                <Input placeholder="Ваше имя" />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-2">Email</label>
                <Input type="email" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-2">Телефон</label>
                <Input type="tel" placeholder="+7 (___) ___-__-__" />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-2">Сообщение</label>
                <Textarea placeholder="Ваше сообщение..." rows={6} />
              </div>
              <Button className="w-full" size="lg">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить сообщение
              </Button>
            </form>
          </div>
        </div>
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

export default Contacts;
