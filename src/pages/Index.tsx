import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const telegramLink = 'https://t.me/NikitaTechnology';

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-orange-50">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-purple-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-gradient-purple via-gradient-magenta to-gradient-orange bg-clip-text text-transparent">
            AI.Agency
          </h1>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="hover:text-gradient-purple transition">Услуги</a>
            <a href="#cases" className="hover:text-gradient-purple transition">Кейсы</a>
            <a href="#process" className="hover:text-gradient-purple transition">Процесс</a>
            <a href="#pricing" className="hover:text-gradient-purple transition">Пакеты</a>
          </nav>
          <Button 
            onClick={() => window.open(telegramLink, '_blank')}
            className="bg-gradient-to-r from-gradient-purple to-gradient-magenta hover:opacity-90"
          >
            <Icon name="Send" size={20} className="mr-2" />
            Связаться
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-5xl">
          <Badge className="mb-6 bg-gradient-to-r from-gradient-purple to-gradient-magenta text-white border-0 animate-scale-in">
            🚀 Мы в топе AI-агентств 2024
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-gradient-purple via-gradient-magenta to-gradient-orange bg-clip-text text-transparent leading-tight">
            ИИ для вашего бизнеса.<br />Под ключ за 2 недели
          </h1>
          <p className="text-xl text-muted-foreground mb-10 animate-fade-in max-w-3xl mx-auto">
            Помогаем предпринимателям использовать искусственный интеллект для ускорения работы, 
            снижения расходов и роста прибыли. ChatGPT, автоматизация и AI-контент — всё готово к внедрению.
          </p>
          
          <Button 
            onClick={() => window.open(telegramLink, '_blank')}
            size="lg" 
            className="bg-gradient-to-r from-gradient-purple via-gradient-magenta to-gradient-orange hover:opacity-90 text-white font-semibold text-xl px-12 py-8 h-auto animate-scale-in shadow-2xl"
          >
            <Icon name="Send" size={28} className="mr-3" />
            Написать в Telegram
          </Button>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gradient-purple to-gradient-magenta bg-clip-text text-transparent">
              Что мы делаем при помощи ИИ
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Каждое решение — под ключ и под ваш бизнес
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'Brain', title: 'ChatGPT-интеграции', desc: 'Внедряем AI-ассистентов для поддержки клиентов, генерации контента и автоматизации задач' },
              { icon: 'MessageSquare', title: 'AI-чат боты', desc: 'Умные боты для Telegram, WhatsApp и сайта, обрабатывающие до 80% запросов' },
              { icon: 'FileText', title: 'Автоматизация контента', desc: 'Генерация статей, постов, email-рассылок с помощью GPT-4 и Claude' },
              { icon: 'Zap', title: 'Автоматизация процессов', desc: 'Настройка AI-воркфлоу: от лидогенерации до обработки заказов' },
              { icon: 'GraduationCap', title: 'Онлайн-курсы на ИИ', desc: 'Создаём образовательные продукты с AI-генерацией материалов' },
              { icon: 'BarChart', title: 'AI-аналитика данных', desc: 'Прогнозирование продаж, анализ клиентов, подготовка отчётов через ИИ' },
            ].map((service, idx) => (
              <Card key={idx} className="border-2 border-purple-100 hover:border-gradient-purple hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-gradient-purple to-gradient-magenta rounded-xl flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-gradient-magenta to-gradient-orange bg-clip-text text-transparent">
            Кейсы и результаты
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { client: 'Онлайн-школа «EduPro»', result: '+320% заявок', desc: 'Внедрили AI-чат бота для квалификации лидов. Конверсия выросла с 2% до 8.4%', metric: '8.4%' },
              { client: 'E-commerce «FashionStore»', result: '-60% времени на контент', desc: 'Автоматизировали создание описаний товаров через GPT-4. 500 карточек за неделю', metric: '500+' },
              { client: 'Digital-студия «Creative»', result: '×3 проектов в месяц', desc: 'Настроили AI-ассистента для дизайнеров. Скорость работы увеличилась в 3 раза', metric: '×3' },
            ].map((caseItem, idx) => (
              <Card key={idx} className="bg-gradient-to-br from-white to-purple-50 border-2 border-purple-200 hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <div className="text-5xl font-bold bg-gradient-to-r from-gradient-purple to-gradient-magenta bg-clip-text text-transparent mb-2">
                    {caseItem.metric}
                  </div>
                  <CardTitle className="text-xl mb-2">{caseItem.client}</CardTitle>
                  <Badge className="w-fit bg-gradient-to-r from-gradient-magenta to-gradient-orange text-white border-0">
                    {caseItem.result}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{caseItem.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-2 border-gradient-purple text-gradient-purple hover:bg-gradient-purple hover:text-white">
              Посмотреть больше кейсов
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-gradient-purple via-gradient-magenta to-gradient-orange animate-gradient-shift bg-[length:200%_200%]">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Почему выбирают нас
          </h2>
          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {[
              { icon: 'Rocket', title: 'Быстрый запуск', desc: 'От идеи до работающего решения — 2 недели' },
              { icon: 'TrendingUp', title: 'Измеримый ROI', desc: 'Окупаемость проекта в среднем за 3 месяца' },
              { icon: 'Shield', title: 'Безопасность данных', desc: 'Соблюдаем все стандарты защиты информации' },
              { icon: 'Headphones', title: 'Поддержка 24/7', desc: 'Сопровождаем после запуска и обучаем команду' },
            ].map((advantage, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={advantage.icon} size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                <p className="text-white/90">{advantage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-gradient-purple to-gradient-orange bg-clip-text text-transparent">
            Как мы работаем
          </h2>

          <div className="max-w-4xl mx-auto">
            {[
              { step: '01', title: 'Бриф и аудит', desc: 'Изучаем ваш бизнес, находим точки роста через ИИ' },
              { step: '02', title: 'Стратегия внедрения', desc: 'Разрабатываем дорожную карту AI-трансформации' },
              { step: '03', title: 'Разработка решения', desc: 'Создаём и обучаем AI-инструменты под ваши задачи' },
              { step: '04', title: 'Тестирование', desc: 'Проверяем качество работы на реальных сценариях' },
              { step: '05', title: 'Запуск и обучение', desc: 'Интегрируем в процессы и обучаем вашу команду' },
            ].map((process, idx) => (
              <div key={idx} className="flex gap-6 mb-8 items-start group">
                <div className="text-6xl font-bold text-gradient-purple/20 group-hover:text-gradient-purple transition-all">
                  {process.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{process.title}</h3>
                  <p className="text-muted-foreground text-lg">{process.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-gradient-purple to-gradient-magenta hover:opacity-90 text-white">
              Запустить мой проект
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-gradient-magenta to-gradient-orange bg-clip-text text-transparent">
            Технологии, которые мы используем
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
            Работаем только с проверенными AI-платформами, обеспечивающими максимальную производительность и безопасность
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {['ChatGPT', 'Claude', 'Midjourney', 'ElevenLabs', 'Make.com', 'n8n'].map((tech, idx) => (
              <Card key={idx} className="border-2 border-purple-100 hover:border-gradient-purple transition-all hover:shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="flex items-center justify-center h-24">
                  <p className="font-semibold text-lg">{tech}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-gradient-purple to-gradient-magenta bg-clip-text text-transparent">
            Отзывы клиентов
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Алексей М.', role: 'CEO онлайн-школы', text: 'Ребята внедрили AI-чат бота за 10 дней. Теперь обрабатываем в 3 раза больше заявок без расширения отдела продаж!' },
              { name: 'Мария К.', role: 'Владелец интернет-магазина', text: 'ChatGPT интеграция для описаний товаров окупилась за месяц. Контент-менеджер освободил 70% времени на стратегию.' },
              { name: 'Дмитрий П.', role: 'Директор digital-студии', text: 'Автоматизация рутины через AI позволила взять на 50% больше проектов. Команда в восторге от новых инструментов!' },
            ].map((review, idx) => (
              <Card key={idx} className="border-2 border-purple-100 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-gradient-purple to-gradient-magenta rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {review.name[0]}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-gradient-orange to-gradient-magenta bg-clip-text text-transparent">
            Наша команда
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">
            Эксперты с опытом в AI, автоматизации и digital-маркетинге
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: 'Александр', role: 'AI-консультант', desc: '5+ лет в ML/AI, бывший Lead в Яндексе' },
              { name: 'Екатерина', role: 'Prompt Engineer', desc: 'Эксперт по GPT-4, Claude, создание AI-агентов' },
              { name: 'Максим', role: 'Tech Lead', desc: 'Fullstack разработчик, специализация на автоматизации' },
            ].map((member, idx) => (
              <Card key={idx} className="border-2 border-purple-100 hover:shadow-xl transition-all bg-gradient-to-br from-white to-purple-50">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-gradient-purple to-gradient-magenta rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                    {member.name[0]}
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-gradient-purple font-semibold">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground">{member.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-gradient-purple to-gradient-orange bg-clip-text text-transparent">
            Пакеты услуг
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">
            Выберите подходящий формат сотрудничества
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { 
                name: 'Старт', 
                price: 'от 150 000 ₽', 
                features: ['AI-чат бот для сайта', 'Интеграция с ChatGPT', 'Настройка автоответов', 'Обучение команды', '1 месяц поддержки'],
                gradient: 'from-gradient-purple to-gradient-magenta'
              },
              { 
                name: 'Pro', 
                price: 'от 350 000 ₽', 
                features: ['Всё из "Старт"', 'Автоматизация процессов', 'AI-генерация контента', 'Мультиканальность (Telegram, WA)', '3 месяца поддержки', 'Аналитика и отчёты'],
                gradient: 'from-gradient-magenta to-gradient-orange',
                popular: true
              },
              { 
                name: 'Business+', 
                price: 'от 700 000 ₽', 
                features: ['Всё из "Pro"', 'Кастомные AI-решения', 'Интеграция с CRM/ERP', 'Обучение моделей на ваших данных', 'Выделенный AI-консультант', 'Безлимитная поддержка'],
                gradient: 'from-gradient-orange to-gradient-magenta'
              },
            ].map((plan, idx) => (
              <Card key={idx} className={`border-2 ${plan.popular ? 'border-gradient-magenta shadow-2xl scale-105' : 'border-purple-100'} hover:shadow-xl transition-all bg-white/80 backdrop-blur-sm relative`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-gradient-magenta to-gradient-orange text-white border-0">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className={`text-4xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent mb-4`}>
                    {plan.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Icon name="Check" className="text-gradient-purple mt-1 flex-shrink-0" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full bg-gradient-to-r ${plan.gradient} hover:opacity-90 text-white`}>
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-gradient-purple via-gradient-magenta to-gradient-orange">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Готовы внедрить ИИ в свой бизнес?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Оставьте заявку, и мы проведём бесплатный аудит ваших процессов, 
            покажем возможности AI для вашей ниши
          </p>

          <Button 
            onClick={() => window.open(telegramLink, '_blank')}
            size="lg" 
            className="bg-white text-gradient-purple hover:bg-white/90 font-semibold text-xl px-12 py-8 h-auto shadow-2xl"
          >
            <Icon name="Send" size={28} className="mr-3" />
            Написать в Telegram
          </Button>
        </div>
      </section>

      <footer className="py-12 px-4 bg-white/80 backdrop-blur-sm border-t border-purple-100">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-gradient-purple to-gradient-magenta bg-clip-text text-transparent mb-4">
                AI.Agency
              </h3>
              <p className="text-muted-foreground">
                Внедрение искусственного интеллекта для роста вашего бизнеса
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#services" className="hover:text-gradient-purple transition">ChatGPT-интеграции</a></li>
                <li><a href="#services" className="hover:text-gradient-purple transition">AI-чат боты</a></li>
                <li><a href="#services" className="hover:text-gradient-purple transition">Автоматизация</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#cases" className="hover:text-gradient-purple transition">Кейсы</a></li>
                <li><a href="#pricing" className="hover:text-gradient-purple transition">Цены</a></li>
                <li><a href="#" className="hover:text-gradient-purple transition">Блог</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  hello@ai-agency.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  +7 (999) 123-45-67
                </p>
                <div className="flex gap-4 mt-4">
                  <a href="#" className="hover:text-gradient-purple transition">
                    <Icon name="Send" size={24} />
                  </a>
                  <a href="#" className="hover:text-gradient-purple transition">
                    <Icon name="MessageCircle" size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-purple-100 pt-8 text-center text-muted-foreground">
            <p>© 2024 AI.Agency. Все права защищены. Создаём будущее вместе с искусственным интеллектом.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;