import { Form } from "react-hook-form";


function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border rounded-lg overflow-hidden">
         
          <figure className="h-48 w-full">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="card-body">
            
            <h2 className="card-title text-lg font-semibold">
              {item.name}
              <div className="badge badge-secondary ml-2">{item.category}</div>
            </h2>

           
            <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
              {item.Describe}
            </p>

            
            <div className="card-actions justify-between mt-4">
            
              <div className="badge badge-outline text-lg font-semibold">
                ${item.price}
              </div>

              
              <div className="cursor-pointer px-3 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
