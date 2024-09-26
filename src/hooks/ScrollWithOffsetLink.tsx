import { useRouter } from 'next/router'

// Hook personalizado para hacer scroll con offset
const scrollToElementWithOffset = (elementId: string, offset: number) => {
  const element = document.getElementById(elementId)
  if (element) {
    const yOffset = -offset
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}

const ScrollWithOffsetLink = ({ href, offset, children, ...props }: any) => {
  const router = useRouter()

  const handleClick = async (e: any) => {
    e.preventDefault() // Prevenimos el comportamiento por defecto del enlace
    const [path, elementId] = href.split('#') // Separamos la ruta del ID

    if (router.pathname === path) {
      // Si estamos en la misma página
      scrollToElementWithOffset(elementId, offset)
    } else {
      // Si estamos en otra página
      await router.push(path) // Navegamos a la nueva página
      scrollToElementWithOffset(elementId, offset) // Desplazamos al ID una vez que la página esté cargada
    }
  }

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  )
}

export default ScrollWithOffsetLink
