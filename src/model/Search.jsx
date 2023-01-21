import { useState } from "react";
import Instance from "../axios";
import { NavLink } from "react-router-dom";

export default function Search(){
    const [search_res, setSearch]= useState([]);
    const getSearch = async ()=>{
        try{
           var q = document.getElementById('searchvalue').value;
            if(q.trim()===''){
                    document.getElementById('searchlistbar').classList.remove('searchresult')
            }else{
                    document.getElementById('searchlistbar').classList.add('searchresult')
            }
            const search_data = await Instance.get(`/search.php?q=${q}`);
            setSearch(search_data.data);
            // console.log(q)
            // console.log(search_data)
        } catch(error){
            console.log("Error"+error);
        }
    }
    if(search_res !== undefined){
        return(
            <>
            <div className="nav-item dropdown dropdown-hover w-80 mx-2">
                <div className="d-flex align-items-center" id="dropdownMenuDocs" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                    <input type="search" id="searchvalue" className="form-control" placeholder="Search.." onClick={getSearch} onChange={getSearch} />
                </div>
                <div className=" sr mt-0 mt-lg-3 p-3 border-radius-lg" id='searchlistbar' aria-labelledby="dropdownMenuDocs">
                    <div className="d-none d-lg-block">
                        <ul className="list-group searches">
                            {search_res.map((currElems , index) => {
                                return (
                                    <>
                                        <li className="nav-item list-group-item border-0 p-0" >
                                            <NavLink key={index} className="dropdown-item py-2 ps-3 border-radius-md" to={`/video/${currElems.video_uri}`}>
                                                <div className="d-flex">
                                                    <div className="icon h-10 me-3 d-flex mt-1"> </div>
                                                    <div> <h6  className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">{currElems.name+' - '+currElems.title}</h6>
                                                    </div>
                                                </div>  
                                            </NavLink>
                                        </li>
                                    </>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

document.body.addEventListener('click', function(){
    document.getElementById('searchlistbar').classList.remove('searchresult')
}); 