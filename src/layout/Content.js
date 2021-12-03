import Buttons from '../components/Buttons/Buttons'
import Pagination from '../components/Pagination'
import Products from '../components/Products'

const Content = () => {
  return (
    <div className="flex-1 px-4 ">
      <div>
        <h1 className="text-xl text-text-title font-extralight mt-9">
          Proucts
        </h1>
      </div>
      <Buttons />
      <div>
        <Products />
      </div>
      <Pagination />
    </div>
  )
}

export default Content
