
export default function Example() {
  return (
<form className="zip-input">
  <div className="flex items-center py-2">  
    <input className="appearance-none text-center bg-green border-none rounded-lg w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-green" placeholder="ZIP Code" text-w aria-label="zipcode"></input>
  </div>
  <button className="rounded-md bg-green mt-3 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:green" type="button">
      Submit
    </button>
</form>
  )
}