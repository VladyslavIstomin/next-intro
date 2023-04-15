import {useRouter} from "next/router";
import Container from "../../components/Container";

const User = ({user}) => {
    return (
        <Container title={user.name}>
            <h2>User name {user.name}</h2>
        </Container>
    );
};

export async function getServerSideProps(context) {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + context.params.id);
    const user = await res.json();

    return {
        props: {
            user
        }, // will be passed to the page component as props
    }
}

export default User;