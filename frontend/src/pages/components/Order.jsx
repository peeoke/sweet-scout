function Order({ order }) {
    return (
        <div className="flex justify-center items-center border border-gray-300 rounded-lg p-4 m-4 w-48 h-48">
          <div className="text-center">
            <h2 className="text-xl font-bold mb-2">{order.name}</h2>
            <p className="text-sm">{order.place}</p>
            <p className="text-sm">{order.price}</p>
            <p className="text-xs">{order.details}</p>
          </div>
        </div>
      );
    }

export default Order