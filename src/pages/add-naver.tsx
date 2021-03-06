import HandleNaver from "../components/HandleNaver";
import Header from "../components/Header";
import isAuthenticated from "../functions/isAuthenticated";

export default function AddNaver() {
	return(
		<>
			<Header />
			<HandleNaver title="Adicionar Naver" />
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
