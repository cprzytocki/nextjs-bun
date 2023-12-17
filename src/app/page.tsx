import { users } from '@/libs/drizzle/schema';
import {db} from '../libs/drizzle';

export default async function Home() {
  const fetchedUsers = await db.query.users.findMany();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>My Page</div>
      <div>
        users: 
        {fetchedUsers.map((user) => (
          <div key={user.id}>
            <div>{user.name} - {user.email}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
