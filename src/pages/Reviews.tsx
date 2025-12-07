import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Анна Петрова',
      rating: 5,
      date: '15 ноября 2024',
      text: 'Отличный магазин! Быстрая доставка, качественные товары. Заказываю уже не первый раз, всегда все на высшем уровне.',
      initials: 'АП'
    },
    {
      id: 2,
      name: 'Дмитрий Смирнов',
      rating: 5,
      date: '10 ноября 2024',
      text: 'Профессиональный подход к клиентам. Консультанты помогли выбрать именно то, что нужно. Цены адекватные.',
      initials: 'ДС'
    },
    {
      id: 3,
      name: 'Елена Козлова',
      rating: 4,
      date: '5 ноября 2024',
      text: 'Хороший выбор товаров, удобный сайт. Единственное - доставка немного задержалась, но в целом все отлично.',
      initials: 'ЕК'
    },
    {
      id: 4,
      name: 'Михаил Иванов',
      rating: 5,
      date: '1 ноября 2024',
      text: 'Впечатлен качеством обслуживания! Товар пришел раньше срока, упаковка отличная. Буду рекомендовать друзьям.',
      initials: 'МИ'
    },
    {
      id: 5,
      name: 'Ольга Васильева',
      rating: 5,
      date: '28 октября 2024',
      text: 'Замечательный магазин! Широкий ассортимент, приятные цены и быстрая доставка. Очень довольна покупкой.',
      initials: 'ОВ'
    },
    {
      id: 6,
      name: 'Сергей Николаев',
      rating: 4,
      date: '20 октября 2024',
      text: 'Качественные товары по разумным ценам. Поддержка оперативно отвечает на вопросы. Рекомендую!',
      initials: 'СН'
    }
  ];

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
              <Link to="/reviews" className="text-accent font-medium">Отзывы</Link>
              <Link to="/contacts" className="text-foreground hover:text-accent transition">Контакты</Link>
            </div>
            <Link to="/cart" className="relative">
              <Icon name="ShoppingCart" size={24} className="text-primary" />
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-primary mb-4">Отзывы наших клиентов</h1>
        <p className="text-muted-foreground mb-12">Мы ценим мнение каждого покупателя и стремимся стать лучше</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white border border-border rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-accent mb-2">4.8</div>
            <div className="flex justify-center gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Icon key={star} name="Star" size={20} className="text-accent fill-accent" />
              ))}
            </div>
            <div className="text-muted-foreground text-sm">Средняя оценка</div>
          </div>

          <div className="bg-white border border-border rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-accent mb-2">5000+</div>
            <Icon name="MessageSquare" size={24} className="text-accent mx-auto mb-2" />
            <div className="text-muted-foreground text-sm">Отзывов от клиентов</div>
          </div>

          <div className="bg-white border border-border rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-accent mb-2">98%</div>
            <Icon name="ThumbsUp" size={24} className="text-accent mx-auto mb-2" />
            <div className="text-muted-foreground text-sm">Рекомендуют нас</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <Avatar>
                  <AvatarFallback className="bg-accent text-white">{review.initials}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-semibold text-primary">{review.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          size={16}
                          className={i < review.rating ? 'text-accent fill-accent' : 'text-gray-300'}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">{review.date}</span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-accent/10 border border-accent/20 rounded-lg p-8 text-center">
          <Icon name="MessageCircle" size={48} className="text-accent mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-primary mb-3">Поделитесь своим мнением</h2>
          <p className="text-muted-foreground mb-6">Ваш отзыв поможет нам стать лучше и поможет другим покупателям сделать правильный выбор</p>
          <Link to="/contacts" className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition">
            Написать отзыв
            <Icon name="ArrowRight" size={20} />
          </Link>
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

export default Reviews;
