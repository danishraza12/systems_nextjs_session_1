import { useRouter } from "next/router";

function PortfolioProjectPage() {
    const router = useRouter();

    console.log('Project Id: ', router.query);

    return (
        <div>
            <h1> Portfolio Project Page </h1>
        </div>
    )
}

export default PortfolioProjectPage;