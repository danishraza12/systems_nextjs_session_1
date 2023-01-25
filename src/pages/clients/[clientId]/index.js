import { useRouter } from "next/router"

export default function ClientPage() {
    const router = useRouter();
    const clientId = router.query.clientId;

    const loadProjectHandler = () => {
        router.push({
            pathname: '/clients/[clientId]/[clientProjectId]',
            query: {
                clientId: 'danish',
                clientProjectId: 'projectA'
            }
        });
    }
    
    return (
        <div>
            <h1> Selected Client's ({clientId}) Projects: </h1>
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    )
}
  