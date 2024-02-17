import 'dotenv/config'

async function getData() {
  try {
    const response = await fetch('https://eventmakers-api.fly.dev/events/', {
      headers: {
        Authorization: `Bearer ${process.env.TOKEN}`
      }
    })
    const data = await response.json()
    return data
  } catch (error) {
    return null
  }
}


export default async function Events() {

  const payloadDummy = {
    id: "ds_V5bTiVsgnx6gk30",
    name: "ooo",
    email: "ooo.com",
    avatar: null
  }

  const { data: eventData, message: eventMessage } = await getData()

  return (
    <main className="p-8 bg-rose-200 flex flex-col gap-y-8">
      <div>Login as: {payloadDummy.name}</div>

      {eventData ? eventData.map((data, idx) => (
        <div key={idx} className="flex flex-col gap-y-4">
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
      )) : <div>no data</div>}
    </main>
  );
}
