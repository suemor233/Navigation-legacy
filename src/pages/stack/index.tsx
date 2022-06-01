import StackProgrss from '@/components/Stack/Progress'
import { useStore } from '@/store'

const Stack: React.FC = () => {
  const { userStore } = useStore()
  return (
    <div className="flex flex-col overflow-y-auto p-2 animate__animated animate__fadeIn">
      <StackProgrss userStore={userStore} />
    </div>
  )
}

export default Stack
