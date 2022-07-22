export const searchRequests = `query(
                      $query:String
                      $travelTypes:[String]
                    ){
                      saleSearch(
                        query: $query
                        travelTypes: $travelTypes
                      ){
                        query
                        sales (limit: 10, offset: 0){
                          id
                          editorial { 
                            title 
                            destinationName 
                          } 
                          photos {
                            url
                          }
                        }
                        resultCount
                      }
                    }`;

export const saleRequest = `query(
  $saleId:String!
){
  sale(saleId: $saleId) { 
    editorial { 
      title
      destinationName 
      hotelDetails 
    } 
    prices { 
      leadRate { 
        forDisplay 
      } 
    } 
    photos { url } 
  }
}`;
