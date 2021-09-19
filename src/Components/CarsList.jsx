import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import CarCard from "./CarCard";
import Loader from "./Loader";
import EndOfData from "./EndOfData";

const CarsList = () => {
    
  const [items, setItems] = useState([]);
  const [hasMore, sethasMore] = useState(true);
  const [page, setpage] = useState(1);
  const [date, setDate] = useState("");
  // const [filterOn,setFilterOn] = useState(false)
  // const [url,setUrl] = useState(false)
  console.log(items, " items values")
  useEffect(() => {
    const getCrashData = async () => {
      const res = await fetch(`https://data.cityofnewyork.us/resource/h9gi-nx95.json?$offset=0&$limit=10&$order=collision_id`);
      const data = await res.json();
      setItems(data);
      console.log(data , " from first call")
    };

    getCrashData();

  }, []);
  console.log(date," from top")
  const fetchCrashesAsScrollDown = async () => {
    const res = await fetch(`https://data.cityofnewyork.us/resource/h9gi-nx95.json?$offset=${page*10}&$limit=10&$order=collision_id`);
    const data = await res.json();
    return data;
  };
  
  const fetchData = async () => {
    
    // console.log(' from fetch data ', page)
    const crashDetails = await fetchCrashesAsScrollDown();
    
    setItems([...items, ...crashDetails]);
    if (crashDetails.length === 0 || crashDetails.length <10) {
      sethasMore(false);
    }
    setpage(page + 1);
    console.log('fetch data is getting called')
  };
  const getDateFilteredData = async (day) => {
    console.log(`https://data.cityofnewyork.us/resource/h9gi-nx95.json?crash_date=${day}`," from filter function ")
    const res = await fetch(`https://data.cityofnewyork.us/resource/h9gi-nx95.json?crash_date=${day}`);
    const data = await res.json();
    setItems(data);
    console.log(" from filter ",date)
    console.log(data , " from first call")
  };
  function handleDate(dat){
    console.log(" handle date :  ",dat)
    console.log(typeof dat," type")
    let day=dat+"T00:00:00.000"
    setDate(day)
    console.log(day , " from handle date after setting")
    getDateFilteredData(day)
  }
    return (
      <div style={{textAlign:"center",marginTop:"40px"}}>
        <input type="date"  value={date} onChange={(e)=>handleDate(e.target.value)} />
        <InfiniteScroll style={{textAlign:"left"}}
          dataLength={items.length} //This is important field to render the next data
          next={fetchData}
          hasMore={hasMore}
          loader={<Loader />}
          endMessage={<EndOfData />}
        >
          <div className="container">
            <div className="row m-2">
              {items?.map((item) => {
                return <CarCard key={item.collision_id} {...item} />
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
      );
}

export default CarsList
