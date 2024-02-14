interface SectionProps {
  language: string
  theme: string
}

export const PhraseSection = ( props:SectionProps ) => {

  return (
    <section className="slideBottom flex mx-auto text-center">
      <h1 className={`${props.theme==='light' ? 'gradient-title-white-2' : 'gradient-title-black-2' } gradient-title
      font-bold tracking-wider leading-[8vh]
      px-5 text-4xl 2xl:text-7xl ultrawide:text-9xl 
      `}>
        { props.language === 'pt-BR'
          ? `A vida não é esperar a tempestade passar, é aprender a dançar na chuva.`
          : `Life isn't about waiting for the storm to pass, it's learning to dance in the rain.`}
      </h1>
    </section>
  )
}