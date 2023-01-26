import { useRouter } from "next/router"

export default function SelectedProjectPage() {
    const router = useRouter();
    const clientProjectId = router.query.clientProjectId;

    console.log('query: ', router.query);

    return (
        <div>
            <h1> Selected Project Page: {clientProjectId} </h1>
        </div>
    )
}
  