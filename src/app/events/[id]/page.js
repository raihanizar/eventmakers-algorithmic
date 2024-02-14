export default function Page({ params }) {
  const dataDummy = {
    "message": "All events fetched successfully",
    "data": {
      "events": {
        "id": "ds_RvnzsAqIpBVe0aW",
        "title": "Indonesia Mom, Baby & Kids Expo (IMOBY) Bandung 2024",
        "description": "Dear Family Lover, Kalo kamu baca ini, artinya kamu diundang ke IMOBY Indonesia Mom & Baby, Kids Expo. Event Promo bermanfaat dan terlengkap dengan discount fantastic di Bandung! Explore 250+ brands Mom, Baby, Kids dengan berbagai diskon up to 90%, buy 1 get 1, free gift, dapatkan promo gledek di morning attack pkl 10.00 pagi setiap harinya! Yuk datang lebih pagi rasakan keseruannya. Ada juga Hiburan menarik meet & greet bersama guest star mom artist dan masih banyak lagi hiburan lainnya. Yang sama pentingnya Moms and Dads dapat mengikuti berbagai Talkshow edukatif dengan ahli professional dibidangnya! Pssst bakal banyak DOORPRIZE dengan hadiah utama Motor, emas, TV, dan berbagai Giveaway! Yuk, beli ticketsnya sekarang dan ajak semua bunda bunda bestie-mu buat seru-seruan bareng di IMOBY Bandung. Let’s have the best shopping times with much benefits on hands! Only at IMOBY Bandung Friday-Sunday, 1 - 3 Maret 2023 di Sudirman Grand Ballroom. See you Familia!  Informasi selengkapnya, Follow Instagram : imoby.mye",
        "image": "https://res.cloudinary.com/dgt0nrylf/image/upload/v1707417973/eventsmaker/gb9aaw7qat6jbexqwuk4.png",
        "dateTime": "01 Maret 2024",
        "author": "ds_v3jTVjbKWukzTUd"
      },
      "participants": [
        {
          "id": "ds_O8lFVdZb7gZdrSe",
          "name": "Panji Pusaka",
          "email": "panji@devscale.id",
          "phoneNumber": "081231231231",
          "eventId": "ds_RvnzsAqIpBVe0aW"
        }
      ]
    }
  }

  const { message, data } = dataDummy

  return (
    <main className="p-8 bg-rose-200 flex flex-col gap-y-8">

      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-2">
          <h2 className="text-2xl">{data.events.title}</h2>
          <p>{data.events.description}</p>
          <p>{data.events.dateTime}</p>
        </div>
        <div className="flex flex-col gap-x-2">
          {data.participants.length > 0
            ? data.participants.map((participant, idx) => (
              <p key={participant.id} className="text-gray-500 italic">{participant.name}</p>
            ))
            : <p className="text-gray-500 italic">no participant</p>
          }
        </div>
      </div>
    </main>
  )
}