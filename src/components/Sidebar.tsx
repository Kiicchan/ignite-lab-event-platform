import { Lesson } from './Lesson'
import { useParams } from 'react-router-dom'
import { useGetLessonsQuery } from '../graphql/generated'

interface SidebarProps {
  hideMenu: boolean
}

export function Sidebar({ hideMenu }: SidebarProps) {
  const { data } = useGetLessonsQuery()
  const { slug } = useParams()

  return (
    <aside
      className={`flex-1 md:flex-none md:w-[348px] bg-gray-700 p-6 border-l border-gray-600 md:block ${
        hideMenu ? 'hidden' : 'block'
      }`}>
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>
      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
              selected={lesson.slug === slug}
            />
          )
        })}
      </div>
    </aside>
  )
}
