import { RocketLogo } from './RocketLogo'

export function Footer() {
  return (
    <footer className="flex flex-col md:flex-row gap-6 p-6 md:justify-between items-center bg-gray-900 border-t border-gray-500">
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <RocketLogo />
        <span className="text-sm leading-relaxed text-gray-300 text-center md:text-base">
          Rocketseat - Todos os direitos reservados
        </span>
      </div>
      <a href="#" className="text-sm leading-relaxed text-gray-300 text-right md:text-base">
        Políticas de privacidade
      </a>
    </footer>
  )
}
