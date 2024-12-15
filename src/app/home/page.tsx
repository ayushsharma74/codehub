import React from 'react'
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Dashboard() {
  const {getUser} = getKindeServerSession();
  const user = await getUser();

  return (
    <div>Hi {user.picture}!</div>
  )
}
