import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import {useEffect, useState} from "react";
import UsersTable from "../components/Layout/Table";

export default function Home() {
    const [users, setUsers] = useState([]);
    useEffect(()=> {
        fetch('/api/users').then(r =>
            r.json().then(re =>{
                setUsers(re)
            })
        )
    },[])
  return (
    <>
      <SeoHead title='LaslesVPN Landing Page' />
      <Layout>
        <Hero />
          <UsersTable users={users}/>
          <Feature />
        <Pricing />
      </Layout>
    </>
  );
}
