import { useParams } from "react-router-dom";

export default function Product() {
  const { id } = useParams();

  return (
    <div>
      <h2>Product Page</h2>
      <p>Product ID: {id}</p>
    </div>
  );
}
