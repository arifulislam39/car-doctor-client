import { useEffect, useState } from "react";
import ServicCard from "./ServicCard";

const Services = () => {
    const [services, setServices]=useState([]);
    console.log(services);

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data => setServices(data))
    },[])
  return (
    <div className="mt-8">
      <div className="text-center">
        <h3 className="text-3xl text-orange-600 ">Service</h3>
        <h2 className="text-6xl font-bold">Our Service Area</h2>
        <p>
          Minima ratione fugiat, ullam molestias commodi ipsam itaque soluta
          autem odio eius ad veniam maiores consequatur doloribus a?
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
            services.map(service =><ServicCard key={service._id}
            service={service}></ServicCard>)
        }
      </div>
    </div>
  );
};

export default Services;
