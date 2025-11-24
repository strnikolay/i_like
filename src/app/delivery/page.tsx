import Image from "next/image";
import "./deliv.css"

export default function Delivery() {

  return (
    <div className="deliv-wrap container">

      <h2>Мы доставляем женское нижнее белье в любой город России самым удобным для Вас способом!</h2>
      <h3>или вы можете забрать заказ самовывозом со склада в Москве</h3>

      <div className="img-wrap">
        <Image className='deliv-img' src="/delivery/map.png" width={600} height={300} alt=''/>

        <div className="del-icon pochta-wrap">
          <Image className='deliv-img' src="/delivery/pochta.jpg" width={95} height={50} alt=''/>
          <div className="line"></div>
        </div>
        <div className="del-icon sdek-wrap">
          <Image className='deliv-img' src="/delivery/sdek.jpg" width={95} height={45} alt=''/>
          <div className="line"></div>
        </div>
        <div className="del-icon del-wrap">
          <Image className='deliv-img' src="/delivery/del-line.jpg" width={95} height={45} alt=''/>
          <div className="line"></div>
        </div>
        
        <div className="del-icon pek-wrap">
          <Image className='deliv-img' src="/delivery/pecom.jpg" width={95} height={45} alt=''/>
          <div className="line"></div>
        </div>

        <div className="del-icon ems-wrap">
          <Image className='deliv-img' src="/delivery/ems.jpg" width={95} height={45} alt=''/>
          <div className="line"></div>
        </div>
      </div>

 
    </div>
  )
}
