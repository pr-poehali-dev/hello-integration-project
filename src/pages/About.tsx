import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const About = () => {
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
              <Link to="/about" className="text-accent font-medium">О нас</Link>
              <Link to="/delivery" className="text-foreground hover:text-accent transition">Доставка</Link>
              <Link to="/reviews" className="text-foreground hover:text-accent transition">Отзывы</Link>
              <Link to="/contacts" className="text-foreground hover:text-accent transition">Контакты</Link>
            </div>
            <Link to="/cart" className="relative">
              <Icon name="ShoppingCart" size={24} className="text-primary" />
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-primary mb-8">О нас</h1>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">Наша миссия</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Мы стремимся предоставить нашим клиентам лучшие товары по справедливым ценам, 
              обеспечивая высочайший уровень сервиса и профессионализм на каждом этапе.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Наш интернет-магазин работает с 2020 года, и за это время мы заслужили доверие 
              тысяч клиентов благодаря качественным товарам и надежному сервису.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">Наши преимущества</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Icon name="CheckCircle" size={24} className="text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary mb-1">Проверенное качество</h3>
                  <p className="text-sm text-muted-foreground">Все товары сертифицированы и проходят контроль</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="Truck" size={24} className="text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary mb-1">Быстрая доставка</h3>
                  <p className="text-sm text-muted-foreground">Доставляем по всей России в кратчайшие сроки</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="Shield" size={24} className="text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary mb-1">Гарантия безопасности</h3>
                  <p className="text-sm text-muted-foreground">Защищенные платежи и конфиденциальность данных</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="Headphones" size={24} className="text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary mb-1">Поддержка 24/7</h3>
                  <p className="text-sm text-muted-foreground">Наши специалисты всегда готовы помочь</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-secondary rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Цифры, которые говорят сами за себя</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">5000+</div>
              <div className="text-muted-foreground">Довольных клиентов</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">1200+</div>
              <div className="text-muted-foreground">Товаров в каталоге</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">98%</div>
              <div className="text-muted-foreground">Положительных отзывов</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-muted-foreground">Работаем для вас</div>
            </div>
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

export default About;
