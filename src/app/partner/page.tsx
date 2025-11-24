import "./partner.css";

export default function Partner() {

  return (
    <div className="partner-wrap container">


      <div className="partner-item">
        <div className="partner-title">1</div>

        <svg width="138" height="215 " viewBox="0 0 237 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path filter="url(#filter)" d="m110,53 l108,-68 l0,205 l-108,71 l-108,-71 l0,-205 l108,68" fill="#47ACA4"/> 
          <defs>
            <filter id="filter">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dx="0" dy="7"/>
              <feGaussianBlur stdDeviation="10"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2112_59"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2112_59" result="shape"/>
            </filter>
          </defs>
        </svg>

        <div className="text blue">
          <h3>Зарегистрируйтесь.</h3>
          <p>Оптовые цены, корзина, избраное, история заказов и многое другое доступны только зарегистрированым пользователям.Так же вы получите персонального менеджера, который будет сопровождать вас, помогать в выборе моделей, консультировать по всем вопросам сотрудничества.</p>
        </div>
      </div>
      
      
      <div className="partner-item up">
        <div className="partner-title">2</div>

        <svg width="138" height="215 " viewBox="0 0 237 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path filter="url(#filter)" d="m110,53 l108,-68 l0,205 l-108,71 l-108,-71 l0,-205 l108,68" fill="#E5017F"/> 
          <defs>
            <filter id="filter">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dx="0" dy="7"/>
              <feGaussianBlur stdDeviation="10"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2112_59"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2112_59" result="shape"/>
            </filter>
          </defs>
        </svg>

        <div className="text red">
          <h3>Оформление заказа.</h3>
          <p>Минимальный заказ - от 15 000 руб. Для заказов от 30 000 р и выше действует система скидок. Эту информацию вы также будете видеть в Корзине в процессе подбора товара.Заказ может быть сформирован из любого ассортимента, нет необходимости выкупать товар размерными рядами.В день оформления заказа с вами свяжется менеджер для подтверждения наличия товара и уточнения условий доставки.Оформленные заказы мы бронируем на срок до 7 дней.</p>
        </div>
      </div>

      <div className="partner-item up">
        <div className="partner-title">3</div>

        <svg width="138" height="215 " viewBox="0 0 237 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path filter="url(#filter)" d="m110,53 l108,-68 l0,205 l-108,71 l-108,-71 l0,-205 l108,68" fill="#47ACA4"/> 
          <defs>
            <filter id="filter">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dx="0" dy="7"/>
              <feGaussianBlur stdDeviation="10"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2112_59"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2112_59" result="shape"/>
            </filter>
          </defs>
        </svg>

        <div className="text blue">
          <h3>Отгрузка товара.</h3>
          <p>Отгрузка товара осуществляется только при условии 100%-й предоплаты, в течение 3 рабочих дней с момента поступления оплаты. Вся предлагаемая продукция отгружается со склада в Москве и имеет необходимые сертификаты и документыб которые мы предоставим вместе с продукцией. А так же: каталоги, электронные презентации, пакеты. По запросу - фотографии товаров в электронном виде для размещения на вашем сайте или печати каталогов.</p>
        </div>
      </div>
    </div>
  )
}
