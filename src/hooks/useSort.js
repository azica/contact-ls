import {useMemo} from 'react';

export const useSortedItems = (items, sort) => {
   const sortedItems = useMemo(()=> {
    if(sort) {
        const sortedArray = [...items].sort((a,b)=>{
            if(sort == "name") {
                return a[sort].localeCompare(b[sort]);
            } else if (sort === "distance") {
                return a.distance - b.distance;
            } else if (sort =="quantity") {
                let rep = a.quantity - b.quantity;
                return rep
            }
        })
        
        return sortedArray
    } else {
        return items
    }
   },[sort, items]);
   
   return sortedItems;
}

export const useSort = (items, sort, query) => {
    const sortedItems = useSortedItems(items, sort)

    if(sortedItems) {
    
        const sortedAndSearchedItesm = useMemo(()=>{
        return sortedItems.filter(item=>item.name.toLowerCase().includes(query.toLowerCase()) )
        }, [query, sortedItems]);

        return sortedAndSearchedItesm;

    } else {
        return sortedItems
    }

}

