import Link from "next/link";
import Container from "../../components/Container";

const Users = ({users}) => {
    return (
        <Container title={'Users'}>
            <h1>List of users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>{user.name}</Link>
                    </li>
                ))}
            </ul>
        </Container>
    );
};

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()

    return {
        props: {
            users,
        },
    }
}

export default Users;