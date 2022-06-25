import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link } from 'react-router-dom'

interface LessonProps {
  title: string
  slug: string
  availableAt: Date
  type: 'live' | 'class'
  selected: boolean
}

export function Lesson(props: LessonProps) {
  const isLessonAvailable = isPast(props.availableAt)
  const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", { locale: ptBR })
  return (
    <Link
      to={isLessonAvailable ? `/event/lesson/${props.slug}` : '/event'}
      className={`${isLessonAvailable ? 'group' : 'pointer-events-none'}`}>
      <span className="text-gray-300">{availableDateFormatted}</span>
      <div
        className={[
          'rounded border p-4 mt-2 relative',
          props.selected
            ? `before:absolute before:content-[' '] before:w-4 before:h-4
          before:top-[calc(50%-8px)] before:-left-2 before:bg-green-500
          before:rotate-45 before:rounded-sm border-green-500 bg-green-500`
            : 'border-gray-500 group-hover:border-green-500',
        ].join(' ')}>
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span
              className={[
                'text-sm font-medium flex items-center gap-2',
                props.selected ? 'text-white' : 'text-blue-500',
              ].join(' ')}>
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span
              className={[
                'text-sm font-medium flex items-center gap-2',
                props.selected ? 'text-white' : 'text-orange-500',
              ].join(' ')}>
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span
            className={[
              'text-xs rounded py-[0.125rem] px-2 text-white border font-bold',
              props.selected ? 'border-white' : 'border-green-300',
            ].join(' ')}>
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>
        <strong className={['mt-5 block', props.selected ? 'text-white' : 'text-gray-200'].join(' ')}>
          {props.title}
        </strong>
      </div>
    </Link>
  )
}
