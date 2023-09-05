import { iParams } from "../types/Product"
import { fromStringToArray } from "./fromStringToArray"
import { removeNullUndefinedFields } from "./removeNullUndefinedFields"

export  function coonfigurateQuery({brand = null,category,size,skip ,search,orderedBy}:iParams){ 
    
    let where = removeNullUndefinedFields(
        {
            brand_id:removeNullUndefinedFields(
                {
                    in:fromStringToArray(brand)
                }   
            ),
            category_id:category,
            name:removeNullUndefinedFields({contains:search})
        }
    )
    

    let query = removeNullUndefinedFields(
        {
            where:where,
            
        }
    )
    if (orderedBy ) {
        
        let orderParams = orderedBy!.split('-')
        query = {...query,orderBy:{
            [orderParams[0]]:orderParams[1]
        }}
        console.log(query)
    }
    return {...query,skip:skip,
        take:size}
    
    
}