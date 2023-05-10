import { Polybase } from "@polybase/client";
import React from 'react'


const db = new Polybase({
  defaultNamespace: "pk/0xf50ea4b6ca184c2a54567099bab8960e4057f80161262704102502bacb76b8029902b6bab1a9dcac5701c816db1834ec27760b2ddc6b9efaedcb3fc0906b4aea/new-test",
});




function PolybaseP() {



const createCollection = async()=>{
    await db.applySchema(`
  @public
  collection City {
    id: string;
    name: string;
    country?: string;

    constructor (id: string, name: string) {
      this.id = id;
      this.name = name;
    }

    setCountry (country: string) {
      this.country = country;
    }
  }

  @public
  collection Country {
    id: string;
    name: string;

    constructor (id: string, name: string) {
      this.id = id;
      this.name = name;
    }
  }
`
);
console.log("created collection");
}

const createColectionRecord = async()=>{
    await db.collection("City").create(["new-york", "New York"]); 
    console.log("created record");
}

const updateRecord =async()=>{
    await db.collection("City").record("new-york").call("setCountry",["USA"])
    console.log("update record");
}

const readrecord = async()=>{
    const data = await db.collection("City").record("new-york").get();
    console.log("record read",data);
}


return (
    <div>
        <div>
            <button onClick={createCollection}>
                create collection
            </button>
            
        </div>
        <div>
            <button onClick={createColectionRecord}>
                create Record
            </button>
            
        </div>
        <div>
            <button onClick={updateRecord}>
                update record
            </button>
            
        </div>
        <div>
            <button onClick={readrecord}>
                read record
            </button>
            
        </div>

    </div>
  )
}
export default PolybaseP