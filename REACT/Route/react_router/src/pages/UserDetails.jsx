import { useParams } from "react-router-dom";

const list = [
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
    { id: 3, name: "Alice Johnson", email: "alice.johnson@example.com" },
];

export default function UserDetails() {
    const { userId } = useParams();
    const user = list.find(u => u.id === parseInt(userId));
    if (!user) {
        return <h2>User not found</h2>;
    }
    return (
        <div>
            <h2>User Details</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
}