import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Delivery = () => {
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
              <Link to="/delivery" className="text-accent font-medium">Доставка</Link>
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
        <h1 className="text-4xl font-bold text-primary mb-8">Доставка и оплата</h1>
        
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-6">Способы доставки</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-border rounded-lg p-6">
                <Icon name="Truck" size={32} className="text-accent mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Курьерская доставка</h3>
                <p className="text-muted-foreground mb-4">Доставим заказ по указанному адресу в удобное для вас время</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• По Москве: 1-2 дня</li>
                  <li>• По МО: 2-3 дня</li>
                  <li>• Стоимость: от 300 ₽</li>
                </ul>
              </div>

              <div className="bg-white border border-border rounded-lg p-6">
                <Icon name="Package" size={32} className="text-accent mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Пункты выдачи</h3>
                <p className="text-muted-foreground mb-4">Заберите заказ в ближайшем пункте выдачи в любое время</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Более 1000 пунктов</li>
                  <li>• Срок доставки: 2-5 дней</li>
                  <li>• Стоимость: от 150 ₽</li>
                </ul>
              </div>

              <div className="bg-white border border-border rounded-lg p-6">
                <Icon name="Mail" size={32} className="text-accent mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Почта России</h3>
                <p className="text-muted-foreground mb-4">Доставка в любую точку России через отделения почты</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• По всей России</li>
                  <li>• Срок доставки: 5-14 дней</li>
                  <li>• Стоимость: от 200 ₽</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-6 bg-accent/10 border border-accent/20 rounded-lg">
              <div className="flex items-start gap-3">
                <Icon name="Gift" size={24} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-primary mb-2">Бесплатная доставка</h3>
                  <p className="text-muted-foreground">При заказе от 3000 ₽ доставка по Москве бесплатно!</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-6">Способы оплаты</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-border rounded-lg p-6">
                <Icon name="CreditCard" size={32} className="text-accent mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Онлайн-оплата</h3>
                <p className="text-muted-foreground mb-4">Оплата банковской картой на сайте</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Visa, Mastercard, МИР</li>
                  <li>• Безопасная оплата</li>
                  <li>• Мгновенное подтверждение</li>
                </ul>
              </div>

              <div className="bg-white border border-border rounded-lg p-6">
                <Icon name="Wallet" size={32} className="text-accent mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">При получении</h3>
                <p className="text-muted-foreground mb-4">Наличными или картой курьеру</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Наличные</li>
                  <li>• Банковская карта</li>
                  <li>• СБП (Система быстрых платежей)</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-secondary rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-primary mb-6">Часто задаваемые вопросы</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-primary mb-2">Как отследить заказ?</h3>
                <p className="text-muted-foreground">После отправки заказа вы получите трек-номер на электронную почту. С его помощью можно отследить местонахождение посылки.</p>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Можно ли изменить адрес доставки?</h3>
                <p className="text-muted-foreground">Да, до момента отправки заказа. Свяжитесь с нашей службой поддержки по телефону или email.</p>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Что делать, если товар не подошел?</h3>
                <p className="text-muted-foreground">Вы можете вернуть товар в течение 14 дней с момента получения. Подробнее об условиях возврата в разделе "О нас".</p>
              </div>
            </div>
          </section>
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

export default Delivery;
