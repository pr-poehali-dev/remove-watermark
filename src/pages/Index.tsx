import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  date: string;
  image: string;
  readTime: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: 'Искусство минимализма в современном дизайне',
    excerpt: 'Как простота формы создаёт глубину смысла и позволяет сфокусироваться на главном в визуальной коммуникации.',
    category: 'Дизайн',
    tags: ['минимализм', 'творчество', 'эстетика'],
    date: '15 октября 2024',
    image: 'https://cdn.poehali.dev/files/198c61fb-9f8d-4319-82c9-43ffafe6bfe9.png',
    readTime: '5 мин'
  },
  {
    id: 2,
    title: 'Психология цвета в брендинге',
    excerpt: 'Исследование влияния цветовых решений на восприятие бренда и эмоциональную связь с аудиторией.',
    category: 'Брендинг',
    tags: ['психология', 'цвет', 'маркетинг'],
    date: '12 октября 2024',
    image: 'https://cdn.poehali.dev/files/198c61fb-9f8d-4319-82c9-43ffafe6bfe9.png',
    readTime: '7 мин'
  },
  {
    id: 3,
    title: 'Футуризм в типографике',
    excerpt: 'Как экспериментальная типографика формирует визуальный язык будущего и разрушает традиционные границы.',
    category: 'Типографика',
    tags: ['шрифты', 'будущее', 'инновации'],
    date: '10 октября 2024',
    image: 'https://cdn.poehali.dev/files/198c61fb-9f8d-4319-82c9-43ffafe6bfe9.png',
    readTime: '6 мин'
  },
  {
    id: 4,
    title: 'Эмоциональный дизайн интерфейсов',
    excerpt: 'Создание цифровых продуктов, которые вызывают настоящие эмоции и строят доверительные отношения с пользователями.',
    category: 'UX/UI',
    tags: ['интерфейсы', 'эмоции', 'опыт'],
    date: '8 октября 2024',
    image: 'https://cdn.poehali.dev/files/198c61fb-9f8d-4319-82c9-43ffafe6bfe9.png',
    readTime: '8 мин'
  },
  {
    id: 5,
    title: 'Сюрреализм в цифровом искусстве',
    excerpt: 'Слияние реальности и фантазии через призму современных технологий и безграничного воображения художников.',
    category: 'Искусство',
    tags: ['сюрреализм', 'digital art', 'креатив'],
    date: '5 октября 2024',
    image: 'https://cdn.poehali.dev/files/198c61fb-9f8d-4319-82c9-43ffafe6bfe9.png',
    readTime: '6 мин'
  },
  {
    id: 6,
    title: 'Архитектура информации',
    excerpt: 'Структурирование контента и навигации для создания интуитивно понятных цифровых пространств.',
    category: 'UX/UI',
    tags: ['архитектура', 'навигация', 'структура'],
    date: '3 октября 2024',
    image: 'https://cdn.poehali.dev/files/198c61fb-9f8d-4319-82c9-43ffafe6bfe9.png',
    readTime: '9 мин'
  }
];

const categories = ['Все', 'Дизайн', 'Брендинг', 'Типографика', 'UX/UI', 'Искусство'];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = Array.from(new Set(articles.flatMap(article => article.tags)));

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const filteredArticles = articles.filter(article => {
    const categoryMatch = selectedCategory === 'Все' || article.category === selectedCategory;
    const tagMatch = selectedTags.length === 0 || selectedTags.some(tag => article.tags.includes(tag));
    return categoryMatch && tagMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/20">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <header className="mb-16 text-center animate-fade-in">
          <h1 className="text-7xl md:text-8xl font-bold mb-6 font-serif bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Креативное пространство
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light">
            Исследуем границы творчества, дизайна и визуальной культуры
          </p>
        </header>

        <div className="mb-12 space-y-8 animate-scale-in">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg shadow-primary/30'
                    : 'bg-card hover:bg-muted border border-border'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Tag" size={20} className="text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Теги:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {allTags.map(tag => (
                <Badge
                  key={tag}
                  variant={selectedTags.includes(tag) ? 'default' : 'outline'}
                  className={`cursor-pointer transition-all duration-300 hover:scale-110 ${
                    selectedTags.includes(tag)
                      ? 'bg-secondary text-secondary-foreground shadow-md'
                      : 'hover:bg-muted'
                  }`}
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <Card
              key={article.id}
              className="group overflow-hidden border-0 bg-card/80 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Badge className="absolute top-4 right-4 bg-primary/90 text-primary-foreground backdrop-blur-sm">
                  {article.category}
                </Badge>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="Calendar" size={16} />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" size={16} />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-serif font-bold group-hover:text-primary transition-colors duration-300">
                  {article.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {article.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-primary font-medium pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Читать статью</span>
                  <Icon name="ArrowRight" size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-20 animate-fade-in">
            <Icon name="SearchX" size={64} className="mx-auto text-muted-foreground/50 mb-4" />
            <h3 className="text-2xl font-serif font-bold mb-2">Ничего не найдено</h3>
            <p className="text-muted-foreground">Попробуйте изменить фильтры</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;