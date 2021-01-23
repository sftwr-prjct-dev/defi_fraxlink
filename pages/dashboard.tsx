import Dashboard from '../components/Dashboard'

const dashboard = () => {
  return(
    <div className="flex">
      <div className="w-1/12 border-2 border-gray-600"></div>
      <div className="w-11/12">
        <Dashboard />
      </div>
    </div>
  )
}

export default dashboard
