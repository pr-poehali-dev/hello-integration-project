import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Index = () => {
  const featuredProducts = [
    { 
      id: 1, 
      name: 'Ноутбук Pro 15', 
      price: 89990, 
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80',
      category: 'Ноутбуки'
    },
    { 
      id: 2, 
      name: 'Смартфон X12', 
      price: 54990, 
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80',
      category: 'Смартфоны'
    },
    { 
      id: 3, 
      name: 'Наушники Premium', 
      price: 12990, 
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
      category: 'Аудио'
    },
    { 
      id: 4, 
      name: 'Умные часы Sport', 
      price: 24990, 
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
      category: 'Аксессуары'
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-primary">
              ShopPro
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-accent font-medium">Главная</Link>
              <Link to="/catalog" className="text-foreground hover:text-accent transition">Каталог</Link>
              <Link to="/about" className="text-foreground hover:text-accent transition">О нас</Link>
              <Link to="/delivery" className="text-foreground hover:text-accent transition">Доставка</Link>
              <Link to="/reviews" className="text-foreground hover:text-accent transition">Отзывы</Link>
              <Link to="/contacts" className="text-foreground hover:text-accent transition">Контакты</Link>
            </div>
            <Link to="/cart" className="relative">
              <Icon name="ShoppingCart" size={24} className="text-primary hover:text-accent transition" />
            </Link>
          </nav>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=1600&q=80" 
            alt="Hero background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Качественные товары для вашего бизнеса
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90 leading-relaxed">
              Широкий ассортимент электроники и аксессуаров с гарантией качества. 
              Быстрая доставка по всей России и профессиональная поддержка.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link to="/catalog">
                <Button size="lg" variant="secondary" className="text-lg hover-scale">
                  <Icon name="ShoppingBag" size={20} className="mr-2" />
                  Перейти в каталог
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-primary">
                  Узнать больше
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Icon name="Truck" size={32} className="text-accent" />
              </div>
              <h3 className="font-semibold text-primary mb-2">Быстрая доставка</h3>
              <p className="text-sm text-muted-foreground">По всей России от 1 дня</p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Icon name="Shield" size={32} className="text-accent" />
              </div>
              <h3 className="font-semibold text-primary mb-2">Гарантия качества</h3>
              <p className="text-sm text-muted-foreground">Сертифицированные товары</p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Icon name="CreditCard" size={32} className="text-accent" />
              </div>
              <h3 className="font-semibold text-primary mb-2">Безопасная оплата</h3>
              <p className="text-sm text-muted-foreground">Защищенные платежи</p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Icon name="Headphones" size={32} className="text-accent" />
              </div>
              <h3 className="font-semibold text-primary mb-2">Поддержка 24/7</h3>
              <p className="text-sm text-muted-foreground">Всегда на связи</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-2">Популярные товары</h2>
            <p className="text-muted-foreground">Выбор покупателей этого месяца</p>
          </div>
          <Link to="/catalog">
            <Button variant="outline">
              Смотреть все
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all group"
            >
              <div className="aspect-square bg-secondary/20 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-3">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-primary">
                    {product.price.toLocaleString('ru-RU')} ₽
                  </div>
                  <Button size="sm">
                    <Icon name="ShoppingCart" size={16} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-border rounded-lg p-8 md:p-12 text-center">
              <Icon name="Gift" size={64} className="text-accent mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-primary mb-4">
                Специальное предложение
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Бесплатная доставка при заказе от 3000 ₽. 
                Успейте воспользоваться выгодными условиями!
              </p>
              <Link to="/catalog">
                <Button size="lg">
                  Выбрать товары
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">Что говорят наши клиенты</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: 'Анна П.', text: 'Отличный магазин! Быстрая доставка и качественные товары.', rating: 5 },
            { name: 'Дмитрий С.', text: 'Профессиональный подход, всегда помогают с выбором.', rating: 5 },
            { name: 'Елена К.', text: 'Удобный сайт и адекватные цены. Рекомендую!', rating: 4 },
          ].map((review, index) => (
            <div key={index} className="bg-white border border-border rounded-lg p-6">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={16}
                    className={i < review.rating ? 'text-accent fill-accent' : 'text-gray-300'}
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">"{review.text}"</p>
              <p className="font-semibold text-primary">{review.name}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/reviews">
            <Button variant="outline">
              Все отзывы
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ShopPro</h3>
              <p className="text-sm text-primary-foreground/80">
                Качественные товары для вашего бизнеса с гарантией и профессиональной поддержкой.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><Link to="/catalog" className="hover:text-primary-foreground transition">Все товары</Link></li>
                <li><Link to="/catalog" className="hover:text-primary-foreground transition">Электроника</Link></li>
                <li><Link to="/catalog" className="hover:text-primary-foreground transition">Аксессуары</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><Link to="/about" className="hover:text-primary-foreground transition">О нас</Link></li>
                <li><Link to="/delivery" className="hover:text-primary-foreground transition">Доставка</Link></li>
                <li><Link to="/reviews" className="hover:text-primary-foreground transition">Отзывы</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>+7 (495) 123-45-67</li>
                <li>info@shoppro.ru</li>
                <li><Link to="/contacts" className="hover:text-primary-foreground transition">Написать нам</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/80">
            <p>&copy; 2024 ShopPro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;