'use client';

import ChatList from '@/components/chat/chatList';
import { userStore } from '@/store';

export default function Sidebar() {
  const user = userStore((state) => state.user);

  return (
    <aside className="sidebar bg-white text-black" aria-label="Sidebar">
      <div className='p-5 sidenav'>
        <p className="text-2xl font-bold">Chats - {user?.name}</p>
      </div>
      <hr className=""/>
      <div className='sidecontent overflow-auto'>
        <ChatList />
      </div>
    </aside>
  );
}
