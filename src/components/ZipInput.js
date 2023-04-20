import { useState } from 'react';

export default function ZipInput( {onSubmit}) {

  const [zip, setZip] = useState('');

  const handleZipSubmit = (e) => {
    e.preventDefault();
    if (zip.length !=5) {
      alert('Please enter a valid Zip Code')
    }
    onSubmit(zip);
  }

  const handleZipChange = (e) => {
    setZip(e.target.value);
  }

  return (
<form className="zip-input" onSubmit={handleZipSubmit}>
  <div className="flex items-center py-2">  
    <input className="appearance-none text-center bg-green border-none rounded-lg w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-green focus:placeholder-opacity-0 placeholder-white" 
           placeholder="ZIP Code" 
           text-w aria-label="Zip Code"
           onChange={handleZipChange}
           >
    </input>
  </div>
  <button className="rounded-md bg-green mt-3 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:green" 
  type="button" onClick={handleZipSubmit}>
      Submit
    </button>
</form>
  )
}