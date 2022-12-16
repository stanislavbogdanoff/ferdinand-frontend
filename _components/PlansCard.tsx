import Image from "next/image"
import { motion } from "framer-motion"

export default function PlansCard(props: any) {
    return (
        <motion.div
            key={Math.random() * 100}
            initial={{ opacity: 0.5, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{
                duration: 0.3
            }}
        >
            <div className="floors_card" >
                <div className="floors_card-title">
                    {props.plan.floor} этаж <br />
                    {props.plan.apts}
                </div>
                <Image
                    src={props.plan.img}
                    alt=''
                    width={500}
                    height={271}
                />
                <div className="floors_card-bot wrapper">
                    <div className="floors-bot-text">
                        <span>{props.plan.area}</span>
                        <p>общая площаль дома</p>
                    </div>
                    <button className="dwnld-btn">
                        Скачать планировку
                    </button>
                </div>
            </div>
        </motion.div>
    )
}