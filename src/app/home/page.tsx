import { getServerSession } from 'next-auth';
import React from 'react'
import { authOptions } from '../utils/auth';
import Image from 'next/image';

function home() {
  return (
    <div>home</div>
  )
}

export default home

// export default async function home() {
//   const session = await getServerSession(authOptions);
//   console.log(session)
//   /*
//    {
//   user: {
//     name: 'Pradeep Kumar',
//     email: 'khedhar.pradeep@gmail.com',
//     image: 'https://lh3.googleusercontent.com/a/ACg8ocICDJUQOmTsEaRmkCGVU215q4ponrA3X7l-Xw8NxFkQPA=s96-c'
//   }
// }
//    */
//  return(
//   <div>  {session?.user?.name}   
//  <Image src={session?.user?.image} width={100} height={100} />
//  )
// }
