import { useRouter } from "next/router";
import HandleNaver from "../../components/HandleNaver";
import Header from "../../components/Header";
import isAuthenticated from "../../functions/isAuthenticated";

export default function EditNaver() {
	const router = useRouter();

	return(
		<>
			<Header />
			<HandleNaver title="Editar Naver" />
		</>
	)
}

export async function getServerSideProps(ctx) {
  if (!isAuthenticated(ctx.req)) {
    ctx.res.writeHead(303, { Location: '/login' });
    ctx.res.end();
  }

  return { props: {} };
}
