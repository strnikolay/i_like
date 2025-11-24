import "./contact.css"
import { SendForm } from "@/components/send-message";

export default function Contact() {

  return (
    <div className="contact-page-wrap container">
        <h1>Наши Контакты</h1>

        <div className="content-wrap">
          <div className="contact-item">
          <p>ООО АйЛайк</p>
          <p>ОГРН: 1127746409372</p>
          <p>ИНН: 7719812389</p>         

          <p>Юр. Адрес: 105037, Москва, Первомайская ул., д.12а, пом 37 </p>

          
          </div>

          <div className="contact-item">
            <SendForm/>
          </div>

        </div>

        <div className="adress-item">
          <h2>Наши магазины в Москве:</h2>
          <div className="map-wrap">
            <div className="map-item">
              <p>ТК Москва, м. Люблино, Тихорецкий б-р, д.1, (2Б-39) - Вход №2</p>
              <iframe src="https://yandex.ru/map-widget/v1/?um=mymaps%3Amz38Yma-cLw0u_laKQxQkfKz-EANqeO_&amp;source=constructor" width="500" height="400"></iframe>
            </div>
            <div className="map-item">
              <p>ТК Садовод, 14-й км МКАД, (2А-42) - Вход №1</p>
              <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac938dfe295f74ca23d68facc7b2cfecde7e7568b27497e497fbc9e65d4d44b83&amp;source=constructor" width="500" height="400"></iframe>
            </div>
          </div>

        </div>
        
    </div>
  )
}
