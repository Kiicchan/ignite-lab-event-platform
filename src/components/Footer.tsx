import { RocketLogo } from './RocketLogo'

interface FooterProps {
  hideFooter?: boolean
}

export function Footer({hideFooter}:FooterProps) {
  return (
    <footer className={`md:flex flex-col md:flex-row gap-6 justify-between items-center mx-6 pb-6 pt-6 self-stretch bg-gray-900 border-t border-gray-500 ${hideFooter ? 'hidden' : 'flex'}`}>
      <div className='flex flex-col md:flex-row gap-4 items-center'>
        <RocketLogo />
        <span className='text-sm leading-relaxed text-gray-300 text-center md:text-base'>Rocketseat - Todos os direitos reservados</span>
      </div>
      <a href="#" className='text-sm leading-relaxed text-gray-300 text-right md:text-base'>Políticas de privacidade</a>
    </footer>
  )
}
