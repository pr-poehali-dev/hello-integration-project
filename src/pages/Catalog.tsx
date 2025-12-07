import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  inStock: boolean;
}

const Catalog = () => {
  const { toast } = useToast();
  const [cart, setCart] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('Все');

  const products: Product[] = [
    { id: 1, name: 'Ноутбук Pro 15', price: 89990, category: 'Электроника', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80', inStock: true },
    { id: 2, name: 'Смартфон X12', price: 54990, category: 'Электроника', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80', inStock: true },
    { id: 3, name: 'Наушники Premium', price: 12990, category: 'Аксессуары', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80', inStock: true },
    { id: 4, name: 'Умные часы Sport', price: 24990, category: 'Аксессуары', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80', inStock: true },
    { id: 5, name: 'Планшет Tab 10', price: 34990, category: 'Электроника', image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80', inStock: false },
    { id: 6, name: 'Клавиатура Mechanical', price: 8990, category: 'Аксессуары', image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80', inStock: true },
    { id: 7, name: 'Монитор 27" 4K', price: 45990, category: 'Электроника', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80', inStock: true },
    { id: 8, name: 'Мышь Gaming Pro', price: 5990, category: 'Аксессуары', image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=800&q=80', inStock: true },
    { id: 9, name: 'Веб-камера HD', price: 7990, category: 'Аксессуары', image: 'https://images.unsplash.com/photo-1526406915894-7bcd65f60845?w=800&q=80', inStock: true },
  ];

  const categories = ['Все', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = selectedCategory === 'Все' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const addToCart = (productId: number, productName: string) => {
    setCart([...cart, productId]);
    toast({
      title: 'Добавлено в корзину',
      description: `${productName} добавлен в вашу корзину`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-primary">
              ShopPro
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-foreground hover:text-accent transition">Главная</Link>
              <Link to="/catalog" className="text-accent font-medium">Каталог</Link>
              <Link to="/about" className="text-foreground hover:text-accent transition">О нас</Link>
              <Link to="/delivery" className="text-foreground hover:text-accent transition">Доставка</Link>
              <Link to="/reviews" className="text-foreground hover:text-accent transition">Отзывы</Link>
              <Link to="/contacts" className="text-foreground hover:text-accent transition">Контакты</Link>
            </div>
            <Link to="/cart" className="relative">
              <Icon name="ShoppingCart" size={24} className="text-primary" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-primary mb-2">Каталог товаров</h1>
            <p className="text-muted-foreground">Найдено товаров: {filteredProducts.length}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className="transition-all"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all group"
            >
              <div className="aspect-square bg-secondary/20 overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">Нет в наличии</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-primary">{product.name}</h3>
                  <Badge variant={product.inStock ? 'default' : 'secondary'}>
                    {product.inStock ? 'В наличии' : 'Нет в наличии'}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{product.category}</p>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-primary">
                    {product.price.toLocaleString('ru-RU')} ₽
                  </div>
                  <Button
                    size="sm"
                    disabled={!product.inStock}
                    onClick={() => addToCart(product.id, product.name)}
                  >
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    В корзину
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <Icon name="Package" size={64} className="text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-2">Товары не найдены</h3>
            <p className="text-muted-foreground">Попробуйте выбрать другую категорию</p>
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

export default Catalog;