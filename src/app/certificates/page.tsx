'use client'
import "./certificates.css"
import Tabs from "./Tabs/tabs"
import Tab from "./Tabs/tab"
//import Image from "next/image"

export default function Certificates() {

    const enlargeHandle = (e:React.MouseEvent<HTMLButtonElement>) =>{
        e.currentTarget.classList.toggle("big")
    } 

    return (
    <div className="certificates-wrap container">
        <h1>Сертификаты соответствия</h1>
       <Tabs>
            <Tab title="iLike (АйЛайк)">
                <div className='content'>
                    <button className="cert-img" onClick={enlargeHandle}>
                        <div className="ilike-one"></div>
                    </button>
                    <button className="cert-img" onClick={enlargeHandle}>
                        <div className="ilike-two"></div>
                    </button>
                </div>
                
            </Tab>

            <Tab title="BigLif (БигЛиф)">
                <div className='content'>
                    <button className="cert-img" onClick={enlargeHandle}>
                        <div className="biglif-one"></div>
                    </button>
                    <button className="cert-img" onClick={enlargeHandle}>
                        <div className="biglif-two"></div>
                    </button>
                    <button className="cert-img" onClick={enlargeHandle}>
                        <div className="biglif-three"></div>
                    </button>
                </div>    
            </Tab>

            <Tab title="Allegro (Аллегро)">
                <div className='content'>
                <button className="cert-img" onClick={enlargeHandle}>
                    <div className="allegro-one"></div>
                </button>
                </div>
            </Tab>

            <Tab title="Glora (Глора)">
                <div className='content'>
                <button className="cert-img" onClick={enlargeHandle}>
                    <div className="glora-one"></div>
                </button>
                </div>
            </Tab>

            <Tab title="Orhideja (Орхидея)">
                <div className='content'>
                <button className="cert-img" onClick={enlargeHandle}>
                    <div className="orh-one"></div>
                </button>
                <button className="cert-img" onClick={enlargeHandle}>
                    <div className="orh-two"></div>
                </button>
                <button className="cert-img" onClick={enlargeHandle}>
                    <div className="orh-three"></div>
                </button>
                <button className="cert-img" onClick={enlargeHandle}>
                    <div className="orh-four"></div>
                </button>
                </div>                                 
            </Tab>

            <Tab title="Hовое время">
                <div className='content'>
                <button className="cert-img" onClick={enlargeHandle}>
                    <div className="nv-one"></div>
                </button>
                <button className="cert-img" onClick={enlargeHandle}>
                    <div className="nv-two"></div>
                </button> 
                </div>
            </Tab>
        </Tabs>
        
    </div>
  )
}
