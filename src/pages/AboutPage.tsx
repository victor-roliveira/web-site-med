function AboutPage() {
  return (
    <>
      <section className="bg-black/90 h-[100vh] flex items-center justify-center gap-44">
        <div className="flex flex-col items-start gap-4 w-[400px] text-white">
          <div>
            <h2 className="text-4xl font-bold pb-2">Quem somos?</h2>
            <div className="border-b-2 bg-white w-[140px]"></div>
          </div>
          <p className="text-white/65 text-xl">
            Bem-vindo ao grupo Descomplicando. Antes de embarcar nessa jornada,
            iremos te apresentar nossos profissionais...
          </p>
          <p>CERTIFICAÇÕES</p>
        </div>

        <div>
            <div className="flex items-center justify-center bg-black text-white w-[400px] h-[400px] rounded-md">
                FOTO CLEIBER
            </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
