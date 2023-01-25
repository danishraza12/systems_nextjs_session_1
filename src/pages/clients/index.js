import Link from "next/link"

export default function ClientsPage() {
    const clients = [
        { name: "Danish", id: "danish" },
        { name: "Danish Raza", id: "danish_raza" }
    ]

    return (
        <div>
            <h1> Clients Listing Page </h1>
            <ul>
                {
                    clients.map((client) => (
                        <li key={client.id}>
                            <Link href={{
                                pathname: '/clients/[clientId]',
                                query: {
                                    clientId: client.id
                                }
                            }}>{client.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
  