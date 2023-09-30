import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col justify-center text-center">
      <h1 className="text-4xl font-bold">
        Dica de sites para rastreamento Correios{" "}
      </h1>
      <Link
        href="https://www.sitecorreios.com.br/link-correios"
        target="_blank"
      >
        Link Correios
      </Link>
      <Link href="https://www.muambator.com.br" target="_blank">
        Muambator
      </Link>
      <Link href="https://www.sitecorreios.com.br/" target="_blank">
        Rastreamento Correios
      </Link>
      <Link href="https://www.sitecorreios.com.br/" target="_blank">
        Site Correios
      </Link>
      <Link href="https://www.correios.com.br/" target="_blank">
        App Correios
      </Link>
      <Link href="https://www.sitecorreios.combr/cep" target="_blank">
        Busca CEP
      </Link>
      <h2 className="text-2xl font-bold mt-10">Rastreamento sem Captcha</h2>
      <p>
        Nossa opinião: o <strong>Site Correios</strong> é a melhor ferramenta
        alternativa para rastreamento, pois além de entregar uma experiência
        simplificada, rápida e funcional, não solicita o preenchimento de
        captcha, gera link de rastreamento e é gratuito.
      </p>
    </section>
  );
}
