import { useRouter } from "next/router";

function ClientsProjectPage() {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>the ClientsProjectPage for a given client</h1>
    </div>
  );
}

export default ClientsProjectPage;
