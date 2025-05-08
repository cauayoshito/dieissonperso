import Head from "next/head";
import AuctionSection from "../../components/AuctionSection";

export default function ImoveisPage() {
  return (
    <>
      <Head>
        <title>Imóveis | Malsa Investimentos</title>
      </Head>
      <main className="pt-24">
        <AuctionSection />
      </main>
    </>
  );
}
