import { useEffect } from "react"

const useTitle=(title)=>{
    useEffect(()=>{
document.title=`${title} - News Today`;
    },[title])
};

export default useTitle;