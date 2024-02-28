import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";
import { UserDashboard } from "@/components/UserDashboard";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Footer } from "@/components/Footer";

export function getUsers() {
  const token = cookies().get("token")?.value;
  const userData = jwtDecode(token);
  return { token, userData };
}

export async function listEvents() {
  const res = await fetch("https://eventmakers-api.fly.dev/events", {
    cache: "no-cache",
  });
  const data = await res.json();
  return data;
}

export default async function Dashboard() {
  const { userData } = getUsers();
  const authorID = userData.id;
  const authorEmail = userData.email;

  let events;

  const { data } = await listEvents();
  const userEvent = data.filter((item) => item.events.author === authorID);
  // console.log(data.filter(item));

  events = userEvent;

  return (
    <main>
      <div>
        <DashboardHeader />
      </div>
      <div>
        <UserDashboard events={events} />
      </div>
      <footer className="mt-10">
        <Footer />
      </footer>
    </main>
  );
}
