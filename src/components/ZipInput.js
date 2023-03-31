
export default function Example() {
  return (
<form className="zip-input">
  <div className="flex items-center py-2">  
    <input className="appearance-none text-center bg-white border-none rounded-lg w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="ZIP Code" aria-label="zipcode"></input>
  </div>
  <button className="rounded-md bg-dark-green mt-3 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:light-green" type="button">
      Submit
    </button>
</form>
  )
}