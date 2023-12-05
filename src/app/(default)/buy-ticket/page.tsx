import BuyTicket from "@/modules/buy-ticket"

export const metadata = {
    title: 'Next js 13 starter template | Home',
}


export default function Home() {
    return (
        <>
          <BuyTicket />
        </>
    )
}