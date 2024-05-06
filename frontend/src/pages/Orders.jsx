import PlusSign from "./components/PlusSign";
import Search from "./components/Search"
import { useNavigate } from 'react-router-dom';

function Orders() {
  const navigate = useNavigate();
  const handleSearch = (query) => {
    fetch('/order-search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    })
    window.location.reload()
  };

  const handleClick = (query) => {
    navigate("/new-order")
  };

  return (
    <>
      <div className="flex p-4 m-20 gap-2"> 
        <Search onSearch={handleSearch} />
        <PlusSign onClick={handleClick}/>
      </div>
    </>
  )
}

export default Orders