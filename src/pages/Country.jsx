import { useEffect,useState,useTransition } from "react";
import { getcountrydata } from "../api/postApi";
import { Loader } from "../components/UI/loader";
import { Countrycard } from "../components/Layout/Countrycard";
import { SearchFiter } from "../components/UI/Searchfilter";


export const Country=()=>{
    const [isPending, startTransition]= useTransition();
    const[countries,setCountries]=useState([]);

    //for filter detail
    const [search,setsearchfilter]=useState();
    const [filter,setfileter]=useState("all");
    useEffect(()=>{
        startTransition(async()=>{
            const res=await getcountrydata();
            // console.log(res);
            setCountries(res.data);
        });
    },[]);
   if(isPending) return <Loader />;
    //here the main logic of the search

    const searchcountry =(country)=>{
        if(search)
        return country.name.common.toLowerCase().includes(search.toLowerCase());
        
        return country;
    }

    const filterregion =(country)=>{
     if(filter ==="all") return country;

     return country.region===filter;
    }
   const filterdata= countries.filter((country)=> searchcountry(country) && filterregion(country));
    return (
        <section className="country-section">
            <SearchFiter search={search} setsearchfilter={setsearchfilter} filter={filter} setfileter={setfileter}/>
            <ul className="grid grid-four-col">
                {filterdata.map((currcountry,idx)=>{
                    return <Countrycard country={currcountry} key={idx} />;
                })}
            </ul>
        </section>
    );
};