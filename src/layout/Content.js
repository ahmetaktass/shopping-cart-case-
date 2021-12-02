import Buttons from '../components/Buttons/Buttons'
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
    </div>
  )
}

export default Content
