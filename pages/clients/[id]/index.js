import { useRouter } from 'next/router';

function ClientsProjectPage() {
  const router = useRouter();

  console.log(router.query);

  function loadProjectHandler() {
    router.push({
      pathname: '/clients/[id]/[clientprojectid]',
      query: {
        id: 'bob',
        clientprojectid: 'projectA',
      },
    });
  }

  return (
    <div>
      <h1>the ClientsProjectPage for a given client</h1>
      <button onClick={loadProjectHandler}>load project A</button>
    </div>
  );
}

export default ClientsProjectPage;
