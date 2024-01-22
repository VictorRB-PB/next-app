import { Inter } from "next/font/google";
import { useRouter } from "next/router"; 

const inter = Inter({ subsets: ["latin"] });

export default function Produto() {

  const route = useRouter();

  const { id } = route.query;

  return (
    <div>
      <h1>Produto {id}</h1>
    </div>
  );
}
