// src/main.ts

import axios from 'axios';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

async function fetchUsers(): Promise<User[]> {
  try {
    const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
}

async function displayUsers() {
  const users = await fetchUsers();
  if (users.length > 0) {
    console.log('Users List:');
    users.forEach(user => {
      console.log(`- ${user.name} (Username: ${user.username}, Email: ${user.email})`);
    });
  } else {
    console.log('No users found.');
  }
}

displayUsers();
