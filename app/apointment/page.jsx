import React from 'react'
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

async function Apontmentpage() {
    const session = await getServerSession(authOptions);

    if (!session) redirect("/login");
  
    return(
        <>hy</>
    );
}

export default Apontmentpage
