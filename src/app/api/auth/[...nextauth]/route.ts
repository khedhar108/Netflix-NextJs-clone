
import { authOptions } from '@/app/utils/auth';
import NextAuth from 'next-auth';


const handler = NextAuth(authOptions);
export {handler as GET, handler as POST, handler}



// AuthProvider component wraps all authorization pages
// utils/auth.ts   ------ authOptions
