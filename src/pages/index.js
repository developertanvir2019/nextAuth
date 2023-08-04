import { Avatar } from "antd";
import { useSession } from "next-auth/react";
import Head from "next/head";
const HomePage = () => {
  const { data: session } = useSession();

  return (
    <div>
      <Head>
        <title>Next Auth</title>
      </Head>
      <h1 style={{ textAlign: "center", marginTop: "10%" }}>Welcome To Next Auth Home Page
      </h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Avatar size={96} src={session?.user?.image} />
      </div>
      <h1 style={{ textAlign: "center" }}>{session?.user?.name}</h1>
      <h1 style={{ textAlign: "center" }}>{session?.user?.email}</h1>
    </div>
  );
};

export default HomePage;
